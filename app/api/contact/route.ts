import { NextRequest, NextResponse } from 'next/server'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const ADMIN_EMAIL    = process.env.ADMIN_EMAIL    || 'hello@peoplecore.co.za'
const FROM_EMAIL     = process.env.RESEND_FROM_EMAIL || 'noreply@peoplecore.co.za'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Name, email and message are required' }, { status: 400 })
    }

    if (RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method:  'POST',
        headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from:    FROM_EMAIL,
          to:      ADMIN_EMAIL,
          subject: `📬 PeopleCore Contact: ${name}${company ? ` · ${company}` : ''}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
              <div style="background:#0A0A0A;padding:24px 28px;">
                <div style="color:#C9A84C;font-weight:700;letter-spacing:2px;font-size:13px;">PEOPLECORE HR · Contact Form</div>
              </div>
              <div style="padding:28px;">
                <table style="width:100%;border-collapse:collapse;">
                  ${[['Name',name],['Email',email],['Company',company||'—'],['Message',message]].map(([l,v])=>`
                  <tr style="border-bottom:1px solid #f3f4f6;">
                    <td style="padding:10px 0;font-size:12px;color:#888;width:80px;vertical-align:top;">${l}</td>
                    <td style="padding:10px 0;font-size:14px;color:#333;">${v}</td>
                  </tr>`).join('')}
                </table>
                <p style="margin-top:20px;font-size:12px;color:#aaa;">Reply to: <a href="mailto:${email}" style="color:#C9A84C;">${email}</a></p>
              </div>
            </div>`,
        }),
      })
    }

    return NextResponse.json({ success: true, data: { message: 'Message sent' } })
  } catch (error) {
    console.error('[Contact API]', error)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
