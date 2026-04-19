import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

// Basic in-memory rate limiting. Resets on serverless cold start.
// TODO: replace with Upstash Redis + @upstash/ratelimit for durable limits.
const WINDOW_MS = 60 * 60 * 1000 // 1 hour
const MAX_PER_WINDOW = 5
const ipAttempts = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = ipAttempts.get(ip)
  if (!record || record.resetAt < now) {
    ipAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }
  if (record.count >= MAX_PER_WINDOW) return false
  record.count++
  return true
}

function getClientIp(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || req.headers.get('x-real-ip')
    || 'unknown'
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req)
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later or email keegan@pearllab.io directly.' },
        { status: 429 }
      )
    }

    const { name, email, phone, service, budget, message } = await req.json()

    if (!name?.trim()) return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    if (!email?.trim() || !email.includes('@')) return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 })
    if (!message?.trim() || message.trim().length < 5) return NextResponse.json({ error: 'Please add a brief message.' }, { status: 400 })

    // TODO: verify pearllab.io in Resend dashboard, then change `from` to noreply@pearllab.io.
    await getResend().emails.send({
      from: 'Pearl Labs <noreply@fenceestimatepro.com>',
      to: ['kpearl585@gmail.com', 'Pearllabs@icloud.com'],
      replyTo: email,
      subject: `${service ? `[${service}]` : '[Inquiry]'} ${name} — Pearl Labs`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto; background: #0A0F1E; color: #F1F5F9; padding: 2rem; border-radius: 12px;">
          <div style="font-size: 11px; color: #2E6BFF; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; margin-bottom: 1.5rem;">New Inquiry</div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
            <tr><td style="padding: 6px 0; color: #94A3B8; font-size: 12px; width: 100px;">Name</td><td style="padding: 6px 0; color: #F1F5F9; font-size: 14px;">${name}</td></tr>
            <tr><td style="padding: 6px 0; color: #94A3B8; font-size: 12px;">Email</td><td style="padding: 6px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #2E6BFF; text-decoration: none;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 6px 0; color: #94A3B8; font-size: 12px;">Phone</td><td style="padding: 6px 0; font-size: 14px;"><a href="tel:${phone}" style="color: #2E6BFF; text-decoration: none;">${phone}</a></td></tr>` : ''}
            ${service ? `<tr><td style="padding: 6px 0; color: #94A3B8; font-size: 12px;">Type</td><td style="padding: 6px 0; color: #F1F5F9; font-size: 14px;">${service}</td></tr>` : ''}
            ${budget ? `<tr><td style="padding: 6px 0; color: #94A3B8; font-size: 12px;">Budget</td><td style="padding: 6px 0; color: #F1F5F9; font-size: 14px;">${budget}</td></tr>` : ''}
          </table>
          <div style="border-top: 1px solid rgba(46,107,255,0.15); padding-top: 1rem;">
            <div style="color: #94A3B8; font-size: 12px; margin-bottom: 0.5rem;">Brief</div>
            <div style="color: #F1F5F9; font-size: 14px; line-height: 1.7; white-space: pre-wrap; background: rgba(46,107,255,0.05); border-left: 2px solid #2E6BFF; padding: 12px 16px; border-radius: 4px;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</div>
          </div>
          <div style="margin-top: 1.5rem; color: #64748B; font-size: 11px;">via pearllab.io</div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send. Please try again or email keegan@pearllab.io directly.' }, { status: 500 })
  }
}
