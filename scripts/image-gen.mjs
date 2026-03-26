#!/usr/bin/env node
/**
 * Pearl Labs — Image Generation Pipeline
 *
 * Usage:
 *   node scripts/image-gen.mjs --preset hero          # Generate hero concepts
 *   node scripts/image-gen.mjs --preset section        # Section support visuals
 *   node scripts/image-gen.mjs --preset texture        # Background textures
 *   node scripts/image-gen.mjs --prompt "custom prompt" --name my-image
 *   node scripts/image-gen.mjs --prompt "..." --provider openai  # Force provider
 *   node scripts/image-gen.mjs --prompt "..." --provider fal     # Force fal
 *   node scripts/image-gen.mjs --preset hero --variants 3        # Multiple variants
 *
 * Env vars required:
 *   OPENAI_API_KEY — for GPT Image (gpt-image-1)
 *   FAL_KEY        — for fal.ai FLUX (optional, cheaper concepting)
 *
 * Cost strategy:
 *   fal/FLUX ~$0.01-0.03 per image  → use for concepting, exploration
 *   OpenAI   ~$0.04-0.08 per image  → use for final renders
 *   Default: uses whichever provider is configured. Prefers fal for concepting.
 */

import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'

const OUT_DIR = join(process.cwd(), 'public', 'generated')

// ─── Provider: OpenAI ───
async function generateOpenAI(prompt, opts = {}) {
  const key = process.env.OPENAI_API_KEY
  if (!key) throw new Error('OPENAI_API_KEY not set')

  const body = {
    model: opts.model || 'gpt-image-1',
    prompt,
    n: 1,
    size: opts.size || '1536x1024',
    quality: opts.quality || 'high',
  }

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`OpenAI error ${res.status}: ${err}`)
  }

  const data = await res.json()
  // gpt-image-1 returns base64
  if (data.data?.[0]?.b64_json) {
    return Buffer.from(data.data[0].b64_json, 'base64')
  }
  // Fallback: URL-based response
  if (data.data?.[0]?.url) {
    const imgRes = await fetch(data.data[0].url)
    return Buffer.from(await imgRes.arrayBuffer())
  }
  throw new Error('Unexpected OpenAI response format')
}

// ─── Provider: fal.ai FLUX ───
async function generateFal(prompt, opts = {}) {
  const key = process.env.FAL_KEY
  if (!key) throw new Error('FAL_KEY not set')

  const model = opts.model || 'fal-ai/flux/schnell'
  const body = {
    prompt,
    image_size: opts.size || 'landscape_16_9',
    num_images: 1,
    enable_safety_checker: true,
  }

  const res = await fetch(`https://fal.run/${model}`, {
    method: 'POST',
    headers: { 'Authorization': `Key ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`fal error ${res.status}: ${err}`)
  }

  const data = await res.json()
  if (data.images?.[0]?.url) {
    const imgRes = await fetch(data.images[0].url)
    return Buffer.from(await imgRes.arrayBuffer())
  }
  throw new Error('Unexpected fal response format')
}

// ─── Provider selection ───
function getProvider(preference) {
  const hasOpenAI = !!process.env.OPENAI_API_KEY
  const hasFal = !!process.env.FAL_KEY

  if (preference === 'openai' && hasOpenAI) return { name: 'openai', fn: generateOpenAI }
  if (preference === 'fal' && hasFal) return { name: 'fal', fn: generateFal }

  // Auto: prefer fal for cost, fallback to openai
  if (hasFal) return { name: 'fal', fn: generateFal }
  if (hasOpenAI) return { name: 'openai', fn: generateOpenAI }

  throw new Error('No provider configured. Set OPENAI_API_KEY or FAL_KEY.')
}

// ─── Prompt presets ───
const BRAND_CONTEXT = `Dark premium tech aesthetic. Background color #050508 (near-black with blue undertone). Accent color cyan #00D4FF used sparingly. Clean, minimal, editorial. No text, no logos, no UI elements, no screens. Abstract and sophisticated. Photorealistic quality.`

const PRESETS = {
  hero: [
    `${BRAND_CONTEXT} Abstract technological composition suggesting software architecture — interconnected geometric nodes, subtle glowing pathways, depth of field. Feels like looking into a premium dark system. Wide format, cinematic lighting.`,
    `${BRAND_CONTEXT} Minimal dark abstract with subtle cyan light traces suggesting data flow and engineering precision. Clean negative space. Premium editorial photography style. Wide landscape format.`,
    `${BRAND_CONTEXT} Dark abstract composition with crystalline geometric structures floating in deep space. Subtle cyan edge lighting. Feels like premium infrastructure. Ultra-clean, no clutter.`,
  ],
  section: [
    `${BRAND_CONTEXT} Abstract close-up of dark metallic surface with subtle grid pattern and single cyan light reflection. Macro photography feel. Minimal and tactile.`,
    `${BRAND_CONTEXT} Dark abstract gradient composition — deep navy to black with a single subtle cyan accent line. Smooth, premium, works as a section background. No objects, pure atmosphere.`,
  ],
  texture: [
    `${BRAND_CONTEXT} Subtle dark noise texture overlay. Very minimal grain pattern on near-black background. Almost imperceptible detail. Clean, flat, usable as a repeating texture.`,
    `${BRAND_CONTEXT} Dark abstract surface texture — fine brushed dark metal with extremely subtle blue-cyan undertone. Macro detail, premium feel, minimal.`,
  ],
}

// ─── CLI ───
async function main() {
  const args = process.argv.slice(2)
  const flags = {}
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      flags[args[i].slice(2)] = args[i + 1] || true
      i++
    }
  }

  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true })

  const variants = parseInt(flags.variants) || 1
  let prompts = []

  if (flags.preset && PRESETS[flags.preset]) {
    prompts = PRESETS[flags.preset].slice(0, variants)
    console.log(`Using preset: ${flags.preset} (${prompts.length} variants)`)
  } else if (flags.prompt) {
    prompts = Array(variants).fill(flags.prompt)
  } else {
    console.log('Usage: node scripts/image-gen.mjs --preset hero|section|texture')
    console.log('       node scripts/image-gen.mjs --prompt "your prompt" --name filename')
    console.log('')
    console.log('Available presets:', Object.keys(PRESETS).join(', '))
    console.log('Options: --provider openai|fal  --variants N  --name prefix')
    process.exit(0)
  }

  const provider = getProvider(flags.provider)
  console.log(`Provider: ${provider.name}`)
  console.log(`Generating ${prompts.length} image(s)...\n`)

  for (let i = 0; i < prompts.length; i++) {
    const name = flags.name || flags.preset || 'image'
    const filename = `${name}-${i + 1}-${Date.now()}.png`
    const filepath = join(OUT_DIR, filename)

    console.log(`[${i + 1}/${prompts.length}] Generating: ${filename}`)
    console.log(`  Prompt: ${prompts[i].slice(0, 80)}...`)

    try {
      const buffer = await provider.fn(prompts[i], {
        size: provider.name === 'fal' ? 'landscape_16_9' : '1536x1024',
      })
      await writeFile(filepath, buffer)
      console.log(`  Saved: public/generated/${filename} (${(buffer.length / 1024).toFixed(0)}KB)`)
    } catch (err) {
      console.error(`  Error: ${err.message}`)
    }
    console.log('')
  }

  console.log('Done. Assets saved to public/generated/')
}

main().catch(err => {
  console.error('Fatal:', err.message)
  process.exit(1)
})
