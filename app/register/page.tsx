'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PLANS = [
  { id: 'ESSENTIAL',    label: 'Essential',    emp: 'Up to 10 employees',    desc: 'Perfect for small businesses' },
  { id: 'PROFESSIONAL', label: 'Professional', emp: 'Up to 50 employees',    desc: 'Growing SA businesses'       },
  { id: 'ELITE',        label: 'Elite',        emp: 'Up to 200 employees',   desc: 'Established companies'       },
  { id: 'ENTERPRISE',   label: 'Enterprise',   emp: 'Unlimited employees',   desc: 'Large organisations'         },
]

const INDUSTRIES = [
  'Agriculture & Farming','Automotive','Banking & Finance','Construction',
  'Education','Engineering','Healthcare & Medical','Hospitality & Tourism',
  'IT & Technology','Legal Services','Logistics & Transport','Manufacturing',
  'Media & Entertainment','Mining & Resources','Non-Profit & NGO',
  'Professional Services','Real Estate','Retail & Wholesale',
  'Telecommunications','Other',
]

const EMPLOYEE_RANGES = ['1–10','11–25','26–50','51–100','101–200','201–500','500+']

type FormData = {
  // Company
  companyName:       string
  tradingName:       string
  registrationNumber:string
  taxNumber:         string
  industry:          string
  employeeCount:     string
  plan:              string
  companySlug:       string
  // Address
  streetAddress:     string
  city:              string
  province:          string
  postalCode:        string
  // Contact
  firstName:         string
  lastName:          string
  jobTitle:          string
  email:             string
  phone:             string
  // Admin account
  adminEmail:        string
  // Requirements
  currentSystem:     string
  goLiveDate:        string
  additionalNotes:   string
  // Consent
  agreeTerms:        boolean
  agreePrivacy:      boolean
}

export default function RegisterPage() {
  const [step,    setStep]    = useState(1)
  const [loading, setLoading] = useState(false)
  const [done,    setDone]    = useState(false)
  const [error,   setError]   = useState('')

  const [form, setForm] = useState<FormData>({
    companyName: '', tradingName: '', registrationNumber: '', taxNumber: '',
    industry: '', employeeCount: '', plan: 'PROFESSIONAL', companySlug: '',
    streetAddress: '', city: '', province: '', postalCode: '',
    firstName: '', lastName: '', jobTitle: '', email: '', phone: '',
    adminEmail: '', currentSystem: '', goLiveDate: '', additionalNotes: '',
    agreeTerms: false, agreePrivacy: false,
  })

  const set = (k: keyof FormData, v: string | boolean) =>
    setForm(f => ({ ...f, [k]: v }))

  const handleSlug = (name: string) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    set('companySlug', slug)
  }

  const handleSubmit = async () => {
    if (!form.agreeTerms || !form.agreePrivacy) {
      setError('Please agree to the Terms of Service and Privacy Policy')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res  = await fetch('/api/register', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) { setError(data.error || 'Submission failed. Please try again.'); return }
      setDone(true)
    } catch {
      setError('Network error. Please try again or email us at hello@peoplecore.co.za')
    } finally { setLoading(false) }
  }

  const STEPS = ['Company Info','Contact Details','Requirements','Confirm']

  if (done) return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-8" style={{ paddingTop: '80px' }}>
        <div className="max-w-lg w-full text-center p-10 rounded-2xl"
          style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.2)' }}>
          <div className="text-5xl mb-5">🎉</div>
          <h1 className="font-syne font-bold text-3xl mb-3">Application Received!</h1>
          <p className="text-base mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Thank you, <strong>{form.firstName}</strong>. Your request to onboard <strong>{form.companyName}</strong> has been submitted successfully.
          </p>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Our team will review your application and contact you at <strong style={{ color: '#C9A84C' }}>{form.email}</strong> within 1 business day to complete your setup.
          </p>
          <div className="p-4 rounded-xl mb-6 text-left space-y-2"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>What happens next</div>
            {['Our team verifies your company registration details','We create your PeopleCore workspace','You receive login credentials via email','We schedule a 30-min onboarding call'].map((s, i) => (
              <div key={i} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span className="w-5 h-5 rounded-full text-xs flex items-center justify-center flex-shrink-0 font-bold"
                  style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C' }}>{i + 1}</span>
                {s}
              </div>
            ))}
          </div>
          <Link href="/" className="btn-primary justify-center w-full">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </>
  )

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ paddingTop: '80px', background: '#080808' }}>
        <div className="container-md py-16">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="badge mb-4">Get Started</div>
            <h1 className="font-syne font-bold mb-3" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.02em' }}>
              Request Access to PeopleCore
            </h1>
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Fill in your company details and we'll have your workspace ready within 24 hours.
            </p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center mb-10">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                    style={{
                      background: step > i + 1 ? '#22C55E' : step === i + 1 ? '#C9A84C' : 'rgba(255,255,255,0.06)',
                      color:      step >= i + 1 ? '#0A0A0A' : 'rgba(255,255,255,0.3)',
                      border:     step === i + 1 ? 'none' : step > i + 1 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    }}>
                    {step > i + 1 ? '✓' : i + 1}
                  </div>
                  <span className="hidden sm:block text-xs font-medium"
                    style={{ color: step === i + 1 ? '#C9A84C' : 'rgba(255,255,255,0.3)' }}>
                    {s}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-8 sm:w-12 h-px mx-2" style={{ background: step > i + 1 ? '#22C55E' : 'rgba(255,255,255,0.08)' }} />
                )}
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>

            {/* ── STEP 1: Company Info ── */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-syne font-bold text-xl mb-6">Company Information</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Registered Company Name *
                    </label>
                    <input className="input-field" value={form.companyName}
                      onChange={e => { set('companyName', e.target.value); handleSlug(e.target.value) }}
                      placeholder="Acme (Pty) Ltd" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Trading Name (if different)
                    </label>
                    <input className="input-field" value={form.tradingName}
                      onChange={e => set('tradingName', e.target.value)}
                      placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Company Registration No. *
                    </label>
                    <input className="input-field" value={form.registrationNumber}
                      onChange={e => set('registrationNumber', e.target.value)}
                      placeholder="2024/123456/07" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      SARS Tax Number *
                    </label>
                    <input className="input-field" value={form.taxNumber}
                      onChange={e => set('taxNumber', e.target.value)}
                      placeholder="9123456789" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Industry *
                    </label>
                    <select className="input-field" value={form.industry}
                      onChange={e => set('industry', e.target.value)} required
                      style={{ background: 'rgba(255,255,255,0.04)', color: form.industry ? '#fff' : 'rgba(255,255,255,0.3)' }}>
                      <option value="" disabled>Select industry...</option>
                      {INDUSTRIES.map(ind => <option key={ind} value={ind} style={{ background: '#1a1a1a' }}>{ind}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Number of Employees *
                    </label>
                    <select className="input-field" value={form.employeeCount}
                      onChange={e => set('employeeCount', e.target.value)} required
                      style={{ background: 'rgba(255,255,255,0.04)', color: form.employeeCount ? '#fff' : 'rgba(255,255,255,0.3)' }}>
                      <option value="" disabled>Select range...</option>
                      {EMPLOYEE_RANGES.map(r => <option key={r} value={r} style={{ background: '#1a1a1a' }}>{r}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Workspace Identifier (URL slug) *
                  </label>
                  <div className="flex items-center">
                    <span className="px-3 py-3 rounded-l-xl text-sm flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRight: 'none', color: 'rgba(255,255,255,0.35)' }}>
                      app.peoplecore.co.za/
                    </span>
                    <input className="input-field" style={{ borderRadius: '0 10px 10px 0' }}
                      value={form.companySlug}
                      onChange={e => set('companySlug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                      placeholder="acme-corp" required />
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.25)' }}>Lowercase letters, numbers, and hyphens only</p>
                </div>

                {/* Plan selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Plan *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {PLANS.map(p => (
                      <div key={p.id}
                        onClick={() => set('plan', p.id)}
                        className="p-4 rounded-xl cursor-pointer transition-all"
                        style={{
                          background: form.plan === p.id ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.03)',
                          border:     form.plan === p.id ? '1px solid rgba(201,168,76,0.4)' : '1px solid rgba(255,255,255,0.07)',
                        }}>
                        <div className="font-syne font-bold text-sm mb-1"
                          style={{ color: form.plan === p.id ? '#C9A84C' : '#fff' }}>{p.label}</div>
                        <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.emp}</div>
                        <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{p.desc}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    Pricing will be shared upon request. Plans can be upgraded anytime.
                  </p>
                </div>

                {/* Physical address */}
                <div>
                  <h3 className="font-syne font-semibold text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Physical Address</h3>
                  <div className="space-y-3">
                    <input className="input-field" value={form.streetAddress}
                      onChange={e => set('streetAddress', e.target.value)}
                      placeholder="Street address" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <input className="input-field" value={form.city}
                        onChange={e => set('city', e.target.value)} placeholder="City / Town" />
                      <select className="input-field" value={form.province}
                        onChange={e => set('province', e.target.value)}
                        style={{ background: 'rgba(255,255,255,0.04)', color: form.province ? '#fff' : 'rgba(255,255,255,0.3)' }}>
                        <option value="" disabled>Province...</option>
                        {['Gauteng','Western Cape','KwaZulu-Natal','Eastern Cape','Free State','Limpopo','Mpumalanga','North West','Northern Cape'].map(p => (
                          <option key={p} value={p} style={{ background: '#1a1a1a' }}>{p}</option>
                        ))}
                      </select>
                      <input className="input-field" value={form.postalCode}
                        onChange={e => set('postalCode', e.target.value)} placeholder="Postal code" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 2: Contact Details ── */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-syne font-bold text-xl mb-6">Primary Contact Details</h2>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  The person who will be the Company Administrator for your PeopleCore workspace.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      First Name *
                    </label>
                    <input className="input-field" value={form.firstName}
                      onChange={e => set('firstName', e.target.value)} placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Last Name *
                    </label>
                    <input className="input-field" value={form.lastName}
                      onChange={e => set('lastName', e.target.value)} placeholder="Smith" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Job Title *
                    </label>
                    <input className="input-field" value={form.jobTitle}
                      onChange={e => set('jobTitle', e.target.value)} placeholder="HR Manager / CEO / CFO" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Phone Number *
                    </label>
                    <input className="input-field" type="tel" value={form.phone}
                      onChange={e => set('phone', e.target.value)} placeholder="+27 82 123 4567" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Email Address *
                    </label>
                    <input className="input-field" type="email" value={form.email}
                      onChange={e => { set('email', e.target.value); if (!form.adminEmail) set('adminEmail', e.target.value) }}
                      placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Admin Login Email *
                    </label>
                    <input className="input-field" type="email" value={form.adminEmail}
                      onChange={e => set('adminEmail', e.target.value)}
                      placeholder="Same as above or different" required />
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      This will be your login email for the PeopleCore platform
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 3: Requirements ── */}
            {step === 3 && (
              <div className="space-y-5">
                <h2 className="font-syne font-bold text-xl mb-6">Setup Requirements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Current HR System
                    </label>
                    <input className="input-field" value={form.currentSystem}
                      onChange={e => set('currentSystem', e.target.value)}
                      placeholder="Spreadsheets / Sage / VIP / None" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Target Go-Live Date
                    </label>
                    <input className="input-field" type="date" value={form.goLiveDate}
                      onChange={e => set('goLiveDate', e.target.value)}
                      style={{ colorScheme: 'dark' }} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Additional Notes / Requirements
                  </label>
                  <textarea className="input-field" rows={4} value={form.additionalNotes}
                    onChange={e => set('additionalNotes', e.target.value)}
                    placeholder="Any specific requirements, questions, or information you'd like us to know..." />
                </div>
                <div className="p-4 rounded-xl"
                  style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)' }}>
                  <div className="text-xs font-semibold mb-2" style={{ color: '#22C55E' }}>What's included in your setup</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Company workspace configuration','Department & position setup','CSV employee import assistance','1-hour onboarding training call','30-day hypercare support','Dedicated SA support team'].map(item => (
                      <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <polyline points="20 6 9 17 4 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 4: Confirm ── */}
            {step === 4 && (
              <div className="space-y-5">
                <h2 className="font-syne font-bold text-xl mb-6">Confirm & Submit</h2>

                {/* Summary */}
                <div className="space-y-3">
                  {[
                    { label: 'Company',     value: form.companyName },
                    { label: 'Reg No.',     value: form.registrationNumber },
                    { label: 'Tax No.',     value: form.taxNumber },
                    { label: 'Industry',    value: form.industry },
                    { label: 'Employees',   value: form.employeeCount },
                    { label: 'Plan',        value: PLANS.find(p => p.id === form.plan)?.label || form.plan },
                    { label: 'Workspace',   value: `app.peoplecore.co.za/${form.companySlug}` },
                    { label: 'Contact',     value: `${form.firstName} ${form.lastName} · ${form.email}` },
                    { label: 'Phone',       value: form.phone },
                  ].filter(r => r.value).map(row => (
                    <div key={row.label} className="flex items-start justify-between text-sm py-2"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', minWidth: '100px' }}>{row.label}</span>
                      <span style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'right' }}>{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Consent */}
                <div className="space-y-3 pt-2">
                  {[
                    { key: 'agreeTerms' as const,   label: 'I agree to the PeopleCore Terms of Service and acceptable use policy' },
                    { key: 'agreePrivacy' as const, label: 'I agree to the Privacy Policy and consent to processing of company data in accordance with POPIA' },
                  ].map(c => (
                    <div key={c.key}
                      className="flex items-start gap-3 cursor-pointer"
                      onClick={() => set(c.key, !form[c.key])}>
                      <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
                        style={{
                          background: form[c.key] ? '#C9A84C' : 'rgba(255,255,255,0.05)',
                          border:     form[c.key] ? '1px solid #C9A84C' : '1px solid rgba(255,255,255,0.15)',
                        }}>
                        {form[c.key] && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        )}
                      </div>
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{c.label}</span>
                    </div>
                  ))}
                </div>

                {error && (
                  <div className="p-3 rounded-xl text-sm"
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>
                    {error}
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <button
                onClick={() => setStep(s => Math.max(1, s - 1))}
                className="btn-secondary"
                style={{ visibility: step === 1 ? 'hidden' : 'visible' }}>
                ← Back
              </button>

              {step < 4 ? (
                <button
                  onClick={() => setStep(s => Math.min(4, s + 1))}
                  className="btn-primary">
                  Continue →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="btn-primary"
                  style={{ opacity: loading ? 0.6 : 1 }}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3"/>
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Submit Application →'}
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
