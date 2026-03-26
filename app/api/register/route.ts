import { NextRequest, NextResponse } from 'next/server'

const RESEND_API_KEY  = process.env.RESEND_API_KEY
const ADMIN_EMAIL     = process.env.ADMIN_EMAIL || 'hello@peoplecore.co.za'
const FROM_EMAIL      = process.env.RESEND_FROM_EMAIL || 'noreply@peoplecore.co.za'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      companyName, tradingName, registrationNumber, taxNumber,
      industry, employeeCount, plan, companySlug,
      streetAddress, city, province, postalCode,
      firstName, lastName, jobTitle, email, phone,
      adminEmail, currentSystem, goLiveDate, additionalNotes,
    } = body

    if (!companyName || !email || !firstName || !lastName || !registrationNumber) {
      return NextResponse.json({ success: false, error: 'Required fields missing' }, { status: 400 })
    }

    // Build admin notification email
    const adminHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New PeopleCore Registration</title></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:40px 20px;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <div style="background:#0A0A0A;padding:28px 32px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:40px;height:40px;background:linear-gradient(135deg,#C9A84C,#E8C97A);border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:900;color:#0A0A0A;font-size:14px;">PC</div>
        <div>
          <div style="color:#C9A84C;font-weight:700;letter-spacing:2px;font-size:14px;">PEOPLECORE HR</div>
          <div style="color:rgba(255,255,255,0.4);font-size:11px;">New Registration Request</div>
        </div>
      </div>
    </div>

    <div style="height:3px;background:linear-gradient(90deg,#C9A84C,#E8C97A);"></div>

    <div style="padding:32px;">
      <h2 style="color:#1a1a1a;margin:0 0 4px;font-size:22px;">🎉 New Company Registration</h2>
      <p style="color:#666;margin:0 0 24px;font-size:14px;">Submitted on ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })} SAST</p>

      <table style="width:100%;border-collapse:collapse;">
        <tr style="background:#f9f6ef;">
          <td colspan="2" style="padding:10px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#C9A84C;">Company Details</td>
        </tr>
        ${[
          ['Registered Name',     companyName],
          ['Trading Name',        tradingName || '—'],
          ['Registration No.',    registrationNumber],
          ['SARS Tax No.',        taxNumber],
          ['Industry',            industry],
          ['Employees',           employeeCount],
          ['Requested Plan',      plan],
          ['Workspace Slug',      companySlug],
          ['Street Address',      streetAddress || '—'],
          ['City',                city || '—'],
          ['Province',            province || '—'],
          ['Postal Code',         postalCode || '—'],
        ].map(([l, v]) => `
        <tr style="border-bottom:1px solid #f0f0f0;">
          <td style="padding:10px 14px;font-size:13px;color:#888;width:160px;">${l}</td>
          <td style="padding:10px 14px;font-size:13px;color:#333;font-weight:500;">${v}</td>
        </tr>`).join('')}

        <tr style="background:#f9f6ef;">
          <td colspan="2" style="padding:10px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#C9A84C;">Contact Details</td>
        </tr>
        ${[
          ['Name',          `${firstName} ${lastName}`],
          ['Job Title',     jobTitle],
          ['Email',         email],
          ['Phone',         phone],
          ['Admin Email',   adminEmail],
        ].map(([l, v]) => `
        <tr style="border-bottom:1px solid #f0f0f0;">
          <td style="padding:10px 14px;font-size:13px;color:#888;width:160px;">${l}</td>
          <td style="padding:10px 14px;font-size:13px;color:#333;font-weight:500;">${v}</td>
        </tr>`).join('')}

        <tr style="background:#f9f6ef;">
          <td colspan="2" style="padding:10px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#C9A84C;">Setup Requirements</td>
        </tr>
        ${[
          ['Current System', currentSystem || '—'],
          ['Go-Live Date',   goLiveDate || 'ASAP'],
          ['Notes',          additionalNotes || '—'],
        ].map(([l, v]) => `
        <tr style="border-bottom:1px solid #f0f0f0;">
          <td style="padding:10px 14px;font-size:13px;color:#888;width:160px;vertical-align:top;">${l}</td>
          <td style="padding:10px 14px;font-size:13px;color:#333;">${v}</td>
        </tr>`).join('')}
      </table>

      <div style="margin-top:24px;padding:16px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;">
        <p style="margin:0;font-size:13px;color:#166534;font-weight:600;">Action Required</p>
        <p style="margin:4px 0 0;font-size:13px;color:#166534;">Create the tenant in the PeopleCore admin panel with slug: <strong>${companySlug}</strong> and send login credentials to <strong>${adminEmail}</strong></p>
      </div>
    </div>
  </div>
</body>
</html>`

    // Confirmation email to registrant
    const confirmHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:40px 20px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:#0A0A0A;padding:28px 32px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:40px;height:40px;background:linear-gradient(135deg,#C9A84C,#E8C97A);border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:900;color:#0A0A0A;font-size:14px;">PC</div>
        <div>
          <div style="color:#C9A84C;font-weight:700;letter-spacing:2px;font-size:14px;">PEOPLECORE HR</div>
          <div style="color:rgba(255,255,255,0.4);font-size:11px;">HR & Payroll · South Africa</div>
        </div>
      </div>
    </div>
    <div style="height:3px;background:linear-gradient(90deg,#C9A84C,#E8C97A);"></div>
    <div style="padding:36px;">
      <h2 style="color:#1a1a1a;margin:0 0 8px;font-size:22px;">Application Received! 🎉</h2>
      <p style="color:#666;margin:0 0 24px;font-size:15px;">Hi ${firstName}, thank you for registering <strong>${companyName}</strong> on PeopleCore.</p>

      <p style="color:#444;font-size:14px;line-height:1.7;margin-bottom:24px;">Your application has been received and our team will review your details within <strong>1 business day</strong>. We'll contact you at this email address to complete your workspace setup.</p>

      <div style="background:#fafaf8;border:1px solid #e8e0cc;border-radius:8px;padding:20px;margin-bottom:24px;">
        <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#C9A84C;margin:0 0 12px;">What happens next</p>
        ${['Our team verifies your company registration','Your PeopleCore workspace is created','Login credentials sent to your email','30-min onboarding call scheduled'].map((s, i) => `
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div style="width:22px;height:22px;background:#C9A84C22;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#C9A84C;flex-shrink:0;">${i + 1}</div>
          <span style="font-size:13px;color:#555;">${s}</span>
        </div>`).join('')}
      </div>

      <p style="font-size:13px;color:#888;">Questions? Reply to this email or contact us at <a href="mailto:hello@peoplecore.co.za" style="color:#C9A84C;">hello@peoplecore.co.za</a></p>
    </div>
    <div style="padding:20px 32px;background:#fafafa;border-top:1px solid #f0f0f0;text-align:center;">
      <p style="font-size:12px;color:#aaa;margin:0;">© 2025 PeopleCore · HR & Payroll · South Africa</p>
    </div>
  </div>
</body>
</html>`

    // Send both emails via Resend
    if (RESEND_API_KEY) {
      await Promise.all([
        // Notify admin
        fetch('https://api.resend.com/emails', {
          method:  'POST',
          headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body:    JSON.stringify({ from: FROM_EMAIL, to: ADMIN_EMAIL, subject: `🆕 New PeopleCore Registration: ${companyName} (${plan})`, html: adminHtml }),
        }),
        // Confirm to registrant
        fetch('https://api.resend.com/emails', {
          method:  'POST',
          headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body:    JSON.stringify({ from: FROM_EMAIL, to: email, subject: `Application received — Welcome to PeopleCore, ${firstName}!`, html: confirmHtml }),
        }),
      ])
    }

    return NextResponse.json({ success: true, data: { message: 'Registration submitted successfully' } })
  } catch (error) {
    console.error('[Register API]', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
