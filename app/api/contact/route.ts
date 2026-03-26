import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, budget, message } = await req.json()

    if (!name?.trim()) return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    if (!email?.trim() || !email.includes('@')) return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 })
    if (!message?.trim() || message.trim().length < 5) return NextResponse.json({ error: 'Please add a brief message.' }, { status: 400 })

    await getResend().emails.send({
      from: 'Pearl Labs <noreply@fenceestimatepro.com>',
      to: ['kpearl585@gmail.com', 'Pearllabs@icloud.com'],
      replyTo: email,
      subject: `${service ? `[${service}]` : '[Inquiry]'} ${name} — Pearl Labs`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto; background: #050508; color: #fff; padding: 2rem; border-radius: 12px;">
          <div style="font-size: 11px; color: rgba(0,212,255,0.6); letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; margin-bottom: 1.5rem;">New Project Inquiry</div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
            <tr><td style="padding: 6px 0; color: rgba(255,255,255,0.35); font-size: 12px; width: 100px;">Name</td><td style="padding: 6px 0; color: #fff; font-size: 14px;">${name}</td></tr>
            <tr><td style="padding: 6px 0; color: rgba(255,255,255,0.35); font-size: 12px;">Email</td><td style="padding: 6px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #00D4FF; text-decoration: none;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 6px 0; color: rgba(255,255,255,0.35); font-size: 12px;">Phone</td><td style="padding: 6px 0; font-size: 14px;"><a href="tel:${phone}" style="color: #00D4FF; text-decoration: none;">${phone}</a></td></tr>` : ''}
            ${service ? `<tr><td style="padding: 6px 0; color: rgba(255,255,255,0.35); font-size: 12px;">Type</td><td style="padding: 6px 0; color: #fff; font-size: 14px;">${service}</td></tr>` : ''}
            ${budget ? `<tr><td style="padding: 6px 0; color: rgba(255,255,255,0.35); font-size: 12px;">Budget</td><td style="padding: 6px 0; color: #fff; font-size: 14px;">${budget}</td></tr>` : ''}
          </table>
          <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 1rem;">
            <div style="color: rgba(255,255,255,0.35); font-size: 12px; margin-bottom: 0.5rem;">Brief</div>
            <div style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.7; white-space: pre-wrap; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(0,212,255,0.3); padding: 12px 16px; border-radius: 4px;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</div>
          </div>
          <div style="margin-top: 1.5rem; color: rgba(255,255,255,0.12); font-size: 11px;">via pearllab.io/estimate</div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send. Please try again or email hello@pearllab.io.' }, { status: 500 })
  }
}
