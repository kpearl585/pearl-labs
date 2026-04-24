import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ocala Elite Breed — Pearl Labs',
  description: 'Professional web presence for an elite youth basketball program — built in days, not weeks.',
}

export default function OcalaEliteBreed() {
  return (
    <div className="bg-[#0A0F1E] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Link href="/#work" className="text-[13px] text-white/25 hover:text-white/45 transition-colors duration-200 inline-flex items-center gap-1.5 mb-10">
            &larr; Back to Work
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[#C9A84C]/40" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-[#C9A84C]/60">Sports Organization</span>
          </div>

          <h1 className="font-display font-semibold text-white tracking-[-0.035em] leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Ocala Elite Breed
          </h1>
          <p className="text-[16px] leading-[1.7] text-white/40 max-w-[560px] mb-8">
            Professional web presence for an elite youth basketball program — built in days, not weeks.
          </p>

          {/* Meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden mb-8"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              { label: 'Client', value: 'Ocala Elite Breed' },
              { label: 'Industry', value: 'Youth Sports' },
              { label: 'Stack', value: 'Next.js / Tailwind / Vercel' },
              { label: 'Status', value: 'Live · ocalaelitebreed.com' },
            ].map(item => (
              <div key={item.label} className="p-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
                <div className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/20 mb-1.5">{item.label}</div>
                <div className="text-[14px] font-medium text-white/65">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a href="https://www.ocalaelitebreed.com" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-[#0A0F1E] font-semibold px-5 py-2.5 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              View Live Site
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link href="/#work" className="text-[14px] font-medium text-white/30 hover:text-white/55 transition-colors duration-200">
              Back to Work
            </Link>
          </div>

          {/* Real product screenshot */}
          <div className="mt-12 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <Image
              src="/oeb-hero.jpg"
              alt="Ocala Elite Breed website — live product screenshot"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Challenge */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">The Challenge</span>
            </div>
            <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              A serious program without a serious web presence.
            </h2>
            <p className="text-[15px] leading-[1.7] text-white/34">
              The program was running on an expired Squarespace trial. They needed a real website to attract sponsors, recruit players, and give the organization the credibility it deserved. Budget was tight. Timeline was tighter.
            </p>
          </div>
          <div className="space-y-3">
            {[
              'Expired Squarespace trial with no real alternative',
              'No sponsor acquisition tools or tiered sponsor system',
              'No centralized place for schedules, tryouts, and program info',
            ].map(item => (
              <div key={item} className="rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <p className="text-[14px] leading-[1.65] text-white/40">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* The Build */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-white/20" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">The Build</span>
          </div>
          <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-10"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            Seven pages. One week. Zero compromises.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: '7-Page Site', desc: 'Home, About, Programs, Schedule, Tryouts, Sponsors, Contact. Complete web presence from a single project.' },
              { title: 'Brand Identity', desc: 'Deep navy + gold color system. Oswald + Inter typography. "Built Different. Bred Elite." brand voice.' },
              { title: 'Sponsor Tiers', desc: 'Community Partner $250, Silver $500, Gold $1,000, Elite Partner $2,500/season. Built-in acquisition system.' },
              { title: 'Tryout Registration', desc: 'Dedicated tryout page with session details, requirements, and contact flow.' },
              { title: 'Mobile First', desc: 'Every page designed for parents checking on their phones at practice.' },
              { title: 'Zero Recurring Costs', desc: 'Deployed on Vercel. No monthly Squarespace fees. Full code ownership.' },
            ].map(item => (
              <div key={item.title} className="rounded-xl p-6 lg:p-7"
                style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 className="text-[14px] font-semibold text-white/65 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[13px] leading-[1.65] text-white/28">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Results */}
      <section className="py-0">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {[
            { value: '7 pages', label: 'Delivered' },
            { value: '< 1 week', label: 'Turnaround' },
            { value: '$0/mo', label: 'Hosting cost' },
            { value: '4 tiers', label: 'Sponsor system' },
          ].map(item => (
            <div key={item.label} className="py-10 px-6 lg:px-8 text-center" style={{ background: 'rgba(255,255,255,0.01)' }}>
              <div className="font-display font-semibold text-white/80 text-xl lg:text-2xl tracking-tight">{item.value}</div>
              <div className="text-[11px] mt-1.5 text-white/22 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Tech + Testimonial */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">Tech Stack</span>
            </div>
            <h3 className="font-display font-semibold text-white/85 text-xl tracking-tight mb-5">Built on tools that last.</h3>
            <div className="flex gap-2 flex-wrap">
              {['Next.js 14', 'Tailwind CSS', 'Vercel'].map(tech => (
                <span key={tech} className="text-[12px] font-mono px-3 py-1.5 rounded-lg text-white/30"
                  style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-7 lg:p-8"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <blockquote className="text-[15px] leading-[1.75] text-white/50 mb-6">
              &ldquo;We went from a dead Squarespace page to a professional website that we&apos;re actually proud to send to sponsors and parents. They built it fast, got our brand right, and handed us something we own completely.&rdquo;
            </blockquote>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '1rem' }}>
              <div className="text-[13px] font-medium text-white/55">Program Director</div>
              <div className="text-[11px] text-white/22 mt-0.5">Ocala Elite Breed</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            Have a project like this?
          </h2>
          <p className="text-[15px] leading-[1.7] text-white/34 mb-8">
            We build fast, clean websites for organizations that need something that actually works — and actually represents them.
          </p>
          <a href="/estimate"
            className="group inline-flex items-center gap-2 bg-white text-[#0A0F1E] font-semibold px-5 py-2.5 rounded-lg text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            Start a Conversation
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
