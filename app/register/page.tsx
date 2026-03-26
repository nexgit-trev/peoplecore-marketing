'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const G = '#C9A84C'
const G2 = '#E8C97A'

const PLANS = [
  { id: 'ESSENTIAL',    label: 'Essential',    emp: 'Up to 10 employees',  desc: 'Perfect for small businesses'  },
  { id: 'PROFESSIONAL', label: 'Professional', emp: 'Up to 50 employees',  desc: 'Growing SA businesses'         },
  { id: 'ELITE',        label: 'Elite',        emp: 'Up to 200 employees', desc: 'Established companies'         },
  { id: 'ENTERPRISE',   label: 'Enterprise',   emp: 'Unlimited employees', desc: 'Large organisations'           },
]

const INDUSTRIES = [
  'Agriculture & Farming','Automotive','Banking & Finance','Construction',
  'Education','Engineering','Healthcare & Medical','Hospitality & Tourism',
  'IT & Technology','Legal Services','Logistics & Transport','Manufacturing',
  'Media & Entertainment','Mining & Resources','Non-Profit & NGO',
  'Professional Services','Real Estate','Retail & Wholesale','Telecommunications','Other',
]

const PROVINCES = ['Gauteng','Western Cape','KwaZulu-Natal','Eastern Cape','Free State','Limpopo','Mpumalanga','North West','Northern Cape']

type F = {
  companyName: string; tradingName: string; registrationNumber: string; taxNumber: string
  industry: string; employeeCount: string; plan: string; companySlug: string
  streetAddress: string; city: string; province: string; postalCode: string
  firstName: string; lastName: string; jobTitle: string; email: string; phone: string
  adminEmail: string; currentSystem: string; goLiveDate: string; additionalNotes: string
  agreeTerms: boolean; agreePrivacy: boolean
}

const inputStyle = {
  width: '100%', background: 'rgba(255,255,255,0.04)',
  border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: '10px',
  padding: '13px 16px', fontSize: '14px', color: '#fff',
  fontFamily: 'DM Sans, sans-serif', outline: 'none', transition: 'border-color 0.2s',
}

const labelStyle = {
  display: 'block' as const, fontSize: '11px', fontWeight: 700,
  letterSpacing: '0.12em', textTransform: 'uppercase' as const,
  color: 'rgba(255,255,255,0.45)', marginBottom: '8px',
}

const primaryBtn = {
  display: 'inline-flex' as const, alignItems: 'center' as const, gap: '8px',
  padding: '14px 32px', background: `linear-gradient(135deg, ${G}, ${G2})`,
  color: '#0A0A0A', fontWeight: 700, fontSize: '14px', borderRadius: '10px',
  border: 'none', cursor: 'pointer', transition: 'all 0.2s',
  fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 20px rgba(201,168,76,0.25)',
}

const secondaryBtn = {
  display: 'inline-flex' as const, alignItems: 'center' as const, gap: '8px',
  padding: '13px 28px', background: 'transparent',
  color: G, fontWeight: 600, fontSize: '14px', borderRadius: '10px',
  border: `1.5px solid rgba(201,168,76,0.3)`, cursor: 'pointer',
  transition: 'all 0.2s', fontFamily: 'DM Sans, sans-serif',
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  )
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldGroup label={label}>
      <input {...props} style={inputStyle}
        onFocus={e => { e.target.style.borderColor = G; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)' }}
        onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }} />
    </FieldGroup>
  )
}

export default function RegisterPage() {
  const [step,    setStep]    = useState(1)
  const [loading, setLoading] = useState(false)
  const [done,    setDone]    = useState(false)
  const [error,   setError]   = useState('')

  const [form, setForm] = useState<F>({
    companyName: '', tradingName: '', registrationNumber: '', taxNumber: '',
    industry: '', employeeCount: '', plan: 'PROFESSIONAL', companySlug: '',
    streetAddress: '', city: '', province: '', postalCode: '',
    firstName: '', lastName: '', jobTitle: '', email: '', phone: '',
    adminEmail: '', currentSystem: '', goLiveDate: '', additionalNotes: '',
    agreeTerms: false, agreePrivacy: false,
  })

  const set = (k: keyof F, v: string | boolean) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.agreeTerms || !form.agreePrivacy) { setError('Please agree to both policies to continue.'); return }
    setLoading(true); setError('')
    try {
      const res  = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok || !data.success) { setError(data.error || 'Submission failed.'); return }
      setDone(true)
    } catch { setError('Network error. Please try again or email us at info@nexbridge.co.za') }
    finally { setLoading(false) }
  }

  const STEPS = ['Company Info', 'Contact Details', 'Requirements', 'Confirm']

  const cardStyle = {
    background: 'rgba(255,255,255,0.025)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '20px', padding: '48px',
  }

  if (done) return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', paddingTop: '100px', background: '#080808' }}>
        <div style={{ maxWidth: '560px', width: '100%', ...cardStyle, textAlign: 'center', borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)' }}>
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>🎉</div>
          <h1 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '36px', fontWeight: 400, marginBottom: '16px' }}>Application Received!</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '8px' }}>
            Thank you, <strong>{form.firstName}</strong>. Your request to onboard <strong>{form.companyName}</strong> has been submitted.
          </p>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '36px' }}>
            Our team will contact you at <strong style={{ color: G }}>{form.email}</strong> within 1 business day.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '24px', marginBottom: '32px', textAlign: 'left' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: G, marginBottom: '16px' }}>What happens next</div>
            {['Our team verifies your company details', 'Your PeopleCore workspace is created', 'Login credentials sent to your email', 'We schedule a 30-min onboarding call'].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', color: G, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                {s}
              </div>
            ))}
          </div>
          <Link href="/" style={{ ...primaryBtn, justifyContent: 'center' as const, display: 'flex' }}>Back to Home</Link>
        </div>
      </div>
      <Footer />
    </>
  )

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#080808', paddingTop: '80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 32px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 18px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '100px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: G, marginBottom: '24px' }}>
              Get Started
            </div>
            <h1 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.1 }}>
              Request Access to PeopleCore
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
              Fill in your company details and we'll have your workspace ready within 24 hours.
            </p>
          </div>

          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '48px', gap: '4px' }}>
            {STEPS.map((s, i) => {
              const active = step === i + 1
              const done   = step > i + 1
              return (
                <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: 700, transition: 'all 0.3s',
                      background: done ? '#22C55E' : active ? G : 'rgba(255,255,255,0.06)',
                      color: done || active ? '#0A0A0A' : 'rgba(255,255,255,0.3)',
                    }}>
                      {done ? '✓' : i + 1}
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 500, color: active ? G : 'rgba(255,255,255,0.3)' }}>
                      {s}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div style={{ width: '32px', height: '1px', background: done ? '#22C55E' : 'rgba(255,255,255,0.08)', margin: '0 8px' }} />
                  )}
                </div>
              )
            })}
          </div>

          {/* Form card */}
          <div style={cardStyle}>

            {/* ── STEP 1 ── */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '26px', fontWeight: 400, marginBottom: '8px' }}>Company Information</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <Input label="Registered Company Name *" value={form.companyName}
                    onChange={e => { set('companyName', e.target.value); set('companySlug', e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')) }}
                    placeholder="Acme (Pty) Ltd" required />
                  <Input label="Trading Name (if different)" value={form.tradingName}
                    onChange={e => set('tradingName', e.target.value)} placeholder="Acme Corp" />
                  <Input label="Company Registration No. *" value={form.registrationNumber}
                    onChange={e => set('registrationNumber', e.target.value)} placeholder="2024/123456/07" required />
                  <Input label="SARS Tax Number *" value={form.taxNumber}
                    onChange={e => set('taxNumber', e.target.value)} placeholder="9123456789" required />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <FieldGroup label="Industry *">
                    <select value={form.industry} onChange={e => set('industry', e.target.value)} required
                      style={{ ...inputStyle, color: form.industry ? '#fff' : 'rgba(255,255,255,0.3)' }}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = G }}
                      onBlur={e  => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
                      <option value="" disabled>Select industry...</option>
                      {INDUSTRIES.map(i => <option key={i} value={i} style={{ background: '#1a1a1a' }}>{i}</option>)}
                    </select>
                  </FieldGroup>
                  <FieldGroup label="Number of Employees *">
                    <select value={form.employeeCount} onChange={e => set('employeeCount', e.target.value)} required
                      style={{ ...inputStyle, color: form.employeeCount ? '#fff' : 'rgba(255,255,255,0.3)' }}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = G }}
                      onBlur={e  => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
                      <option value="" disabled>Select range...</option>
                      {['1–10','11–25','26–50','51–100','101–200','201–500','500+'].map(r => <option key={r} value={r} style={{ background: '#1a1a1a' }}>{r}</option>)}
                    </select>
                  </FieldGroup>
                </div>

                <FieldGroup label="Workspace Identifier (URL Slug) *">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ padding: '13px 14px', background: 'rgba(255,255,255,0.03)', border: '1.5px solid rgba(255,255,255,0.1)', borderRight: 'none', borderRadius: '10px 0 0 10px', fontSize: '13px', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' as const, flexShrink: 0 }}>
                      app.peoplecore.co.za/
                    </span>
                    <input value={form.companySlug} onChange={e => set('companySlug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                      placeholder="acme-corp" required
                      style={{ ...inputStyle, borderRadius: '0 10px 10px 0', flex: 1 }}
                      onFocus={e => { e.target.style.borderColor = G }}
                      onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', marginTop: '6px' }}>Lowercase letters, numbers, and hyphens only</p>
                </FieldGroup>

                {/* Plan selection */}
                <FieldGroup label="Plan *">
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                    {PLANS.map(p => (
                      <div key={p.id} onClick={() => set('plan', p.id)}
                        style={{
                          padding: '16px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s',
                          background: form.plan === p.id ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.03)',
                          border: form.plan === p.id ? `1.5px solid rgba(201,168,76,0.45)` : '1.5px solid rgba(255,255,255,0.07)',
                        }}>
                        <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px', color: form.plan === p.id ? G : '#fff' }}>{p.label}</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '2px' }}>{p.emp}</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{p.desc}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', marginTop: '8px' }}>
                    Pricing shared upon request. Plans can be upgraded anytime.
                  </p>
                </FieldGroup>

                {/* Address */}
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>Physical Address</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Input label="Street Address" value={form.streetAddress} onChange={e => set('streetAddress', e.target.value)} placeholder="123 Main Street" />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                      <Input label="City / Town" value={form.city} onChange={e => set('city', e.target.value)} placeholder="Johannesburg" />
                      <FieldGroup label="Province">
                        <select value={form.province} onChange={e => set('province', e.target.value)}
                          style={{ ...inputStyle, color: form.province ? '#fff' : 'rgba(255,255,255,0.3)' }}
                          onFocus={e => { (e.target as HTMLElement).style.borderColor = G }}
                          onBlur={e  => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
                          <option value="" disabled>Province...</option>
                          {PROVINCES.map(p => <option key={p} value={p} style={{ background: '#1a1a1a' }}>{p}</option>)}
                        </select>
                      </FieldGroup>
                      <Input label="Postal Code" value={form.postalCode} onChange={e => set('postalCode', e.target.value)} placeholder="2001" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 2 ── */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '26px', fontWeight: 400, marginBottom: '8px' }}>Contact Details</h2>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>The person who will be the Company Administrator for your PeopleCore workspace.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <Input label="First Name *" value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="John" required />
                  <Input label="Last Name *" value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Smith" required />
                  <Input label="Job Title *" value={form.jobTitle} onChange={e => set('jobTitle', e.target.value)} placeholder="HR Manager / CEO / CFO" required />
                  <Input label="Phone Number *" type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+27 82 123 4567" required />
                  <Input label="Email Address *" type="email" value={form.email}
                    onChange={e => { set('email', e.target.value); if (!form.adminEmail) set('adminEmail', e.target.value) }}
                    placeholder="john@company.com" required />
                  <div>
                    <Input label="Platform Login Email *" type="email" value={form.adminEmail} onChange={e => set('adminEmail', e.target.value)} placeholder="Same as above or different" required />
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', marginTop: '6px' }}>This will be your PeopleCore login email</p>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 3 ── */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '26px', fontWeight: 400, marginBottom: '8px' }}>Setup Requirements</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <Input label="Current HR System" value={form.currentSystem} onChange={e => set('currentSystem', e.target.value)} placeholder="Spreadsheets / Sage / VIP / None" />
                  <Input label="Target Go-Live Date" type="date" value={form.goLiveDate} onChange={e => set('goLiveDate', e.target.value)} style={{ colorScheme: 'dark' as any }} />
                </div>
                <FieldGroup label="Additional Notes / Requirements">
                  <textarea value={form.additionalNotes} onChange={e => set('additionalNotes', e.target.value)}
                    placeholder="Any specific requirements, questions, or information you'd like us to know..."
                    rows={5}
                    style={{ ...inputStyle, resize: 'none' as const }}
                    onFocus={e => { e.target.style.borderColor = G; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)' }}
                    onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }} />
                </FieldGroup>
                <div style={{ padding: '24px', borderRadius: '14px', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#22C55E', marginBottom: '16px' }}>Included with your setup</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {['Company workspace configuration','Department & position setup','CSV employee import assistance','1-hour onboarding training call','30-day hypercare support','Dedicated SA support team'].map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round"/></svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 4 ── */}
            {step === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '26px', fontWeight: 400, marginBottom: '8px' }}>Confirm & Submit</h2>

                {/* Summary */}
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', overflow: 'hidden' }}>
                  {[
                    ['Company',   form.companyName],
                    ['Reg No.',   form.registrationNumber],
                    ['Tax No.',   form.taxNumber],
                    ['Industry',  form.industry],
                    ['Employees', form.employeeCount],
                    ['Plan',      PLANS.find(p => p.id === form.plan)?.label || ''],
                    ['Workspace', `app.peoplecore.co.za/${form.companySlug}`],
                    ['Contact',   `${form.firstName} ${form.lastName}`],
                    ['Email',     form.email],
                    ['Phone',     form.phone],
                  ].filter(r => r[1]).map(([l, v], i) => (
                    <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', borderBottom: i < 9 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', minWidth: '110px' }}>{l}</span>
                      <span style={{ fontSize: l === 'Workspace' ? '12px' : '13px', color: 'rgba(255,255,255,0.8)', textAlign: 'right' as const, fontFamily: l === 'Workspace' ? 'monospace' : 'inherit' }}>{v}</span>
                    </div>
                  ))}
                </div>

                {/* Consent */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { k: 'agreeTerms'    as const, label: 'I agree to the PeopleCore Terms of Service and acceptable use policy' },
                    { k: 'agreePrivacy'  as const, label: 'I agree to the Privacy Policy and consent to data processing in accordance with POPIA' },
                  ].map(c => (
                    <div key={c.k} onClick={() => set(c.k, !form[c.k])}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                      <div style={{
                        width: '20px', height: '20px', borderRadius: '6px', flexShrink: 0, marginTop: '2px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
                        background: form[c.k] ? G : 'rgba(255,255,255,0.05)',
                        border: form[c.k] ? `1px solid ${G}` : '1px solid rgba(255,255,255,0.15)',
                      }}>
                        {form[c.k] && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
                      </div>
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{c.label}</span>
                    </div>
                  ))}
                </div>

                {error && (
                  <div style={{ padding: '14px 16px', borderRadius: '10px', fontSize: '14px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>
                    {error}
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <button onClick={() => setStep(s => Math.max(1, s - 1))}
                style={{ ...secondaryBtn, visibility: step === 1 ? 'hidden' : 'visible' }}>
                ← Back
              </button>
              {step < 4 ? (
                <button onClick={() => setStep(s => Math.min(4, s + 1))} style={primaryBtn}>
                  Continue →
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={loading}
                  style={{ ...primaryBtn, opacity: loading ? 0.6 : 1 }}>
                  {loading
                    ? <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3"/><path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                        Submitting...
                      </span>
                    : 'Submit Application →'
                  }
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
