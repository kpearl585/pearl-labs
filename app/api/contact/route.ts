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
      subject: `New inquiry from ${name} — Pearl Labs`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #030507; color: #fff; padding: 2rem; border-radius: 8px;">
          <h2 style="color: #4A9EFF; margin-top: 0; border-bottom: 2px solid #4A9EFF; padding-bottom: 10px;">New Client Inquiry — Pearl Labs</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: rgba(255,255,255,0.5); width: 120px; font-weight: bold;">Name:</td><td style="padding: 8px 0; color: #fff;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: rgba(255,255,255,0.5); font-weight: bold;">Email:</td><td style="padding: 8px 0; color: #fff;"><a href="mailto:${email}" style="color: #4A9EFF;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: rgba(255,255,255,0.5); font-weight: bold;">Phone:</td><td style="padding: 8px 0; color: #fff;"><a href="tel:${phone}" style="color: #4A9EFF;">${phone}</a></td></tr>` : ''}
            ${service ? `<tr><td style="padding: 8px 0; color: rgba(255,255,255,0.5); font-weight: bold;">Service:</td><td style="padding: 8px 0; color: #fff;">${service}</td></tr>` : ''}
            ${budget ? `<tr><td style="padding: 8px 0; color: rgba(255,255,255,0.5); font-weight: bold;">Budget:</td><td style="padding: 8px 0; color: #fff;">${budget}</td></tr>` : ''}
          </table>
          <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="color: rgba(255,255,255,0.5); margin: 0 0 0.75rem; font-weight: bold;">Message:</p>
            <p style="color: #fff; white-space: pre-wrap; margin: 0; background: rgba(74,158,255,0.08); border-left: 3px solid #4A9EFF; padding: 12px 16px; border-radius: 4px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid rgba(255,255,255,0.1);">
          <p style="color: rgba(255,255,255,0.2); font-size: 0.8rem; margin: 0;">Sent from pearllab.io contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
