'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const G  = '#C9A84C'
const G2 = '#E8C97A'
const GD = 'rgba(201,168,76,0.12)'

// ── Animated number counter ──────────────────────────
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      const dur = 2200, step = end / (dur / 16)
      let cur = 0
      const t = setInterval(() => { cur = Math.min(cur + step, end); setN(Math.floor(cur)); if (cur >= end) clearInterval(t) }, 16)
      obs.disconnect()
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end])
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>
}

// ── Pill badge ───────────────────────────────────────
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      padding: '8px 20px',
      background: 'rgba(201,168,76,0.07)',
      border: '1px solid rgba(201,168,76,0.22)',
      borderRadius: '100px',
      fontSize: '11px', fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: G,
    }}>{children}</div>
  )
}

// ── Section heading ───────────────────────────────────
function SectionHead({ badge, title, subtitle }: { badge: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
      <div style={{ marginBottom: '24px' }}><Badge>{badge}</Badge></div>
      <h2 style={{
        fontFamily: 'DM Serif Display, Georgia, serif',
        fontSize: 'clamp(36px, 4.5vw, 58px)',
        fontWeight: 600, lineHeight: 1.1,
        letterSpacing: '-0.02em', marginBottom: '20px',
      }}>{title}</h2>
      {subtitle && (
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

const FEATURES = [
  { icon: '💼', title: 'Employee Management',    desc: 'Full lifecycle from onboarding to offboarding. Roles, departments, branches, documents, and employment history.' },
  { icon: '💰', title: 'Payroll & IRP5',          desc: 'Automated SARS-compliant payroll with IRP5 generation, PAYE, UIF, SDL calculations, and downloadable PDF payslips.' },
  { icon: '🏖️', title: 'Leave Management',        desc: 'BCEA-compliant leave tracking with automatic balance calculations, multi-type leave, and approval workflows.' },
  { icon: '⏱️', title: 'Attendance Tracking',     desc: 'Real-time clock-in/out, overtime tracking, remote work, and detailed reports across all branches.' },
  { icon: '⭐', title: 'Performance Reviews',      desc: 'Structured review cycles with competency ratings, self-assessments, manager feedback, and development plans.' },
  { icon: '📚', title: 'Training & Development',  desc: 'Course catalogue, enrollment tracking, certificate expiry alerts, and B-BBEE skills development reporting.' },
  { icon: '⚖️', title: 'Disciplinary Management', desc: 'LRA-compliant case management, hearing scheduling, CCMA reference tracking, and appeal deadline monitoring.' },
  { icon: '📊', title: 'Analytics & Reporting',   desc: 'Real-time workforce dashboards with headcount trends, leave patterns, payroll summaries, and compliance data.' },
  { icon: '🔐', title: 'Enterprise Security',     desc: 'Two-factor authentication, role-based access control, and a complete immutable audit trail on every action.' },
]

const COMPLIANCE = [
  { code: 'SARS',   title: 'IRP5 & PAYE',           color: '#C9A84C', desc: 'Automated IRP5 certificates, PAYE calculations, and SARS-ready tax submissions.' },
  { code: 'BCEA',   title: 'Basic Conditions',       color: '#3B82F6', desc: 'Leave entitlements, overtime, working hours, and contract compliance per BCEA.' },
  { code: 'LRA',    title: 'Labour Relations',       color: '#22C55E', desc: 'Disciplinary procedures, CCMA tracking, hearings, and LRA appeal workflows.' },
  { code: 'EEA',    title: 'Employment Equity',      color: '#8B5CF6', desc: 'EEA4 reporting, workforce profiling, designated group tracking, and transformation goals.' },
  { code: 'B-BBEE', title: 'Skills Development',     color: '#F97316', desc: 'Training spend vs 2% payroll target, B-BBEE scorecard data, and SARS training codes.' },
  { code: 'POPIA',  title: 'Data Privacy',           color: '#EC4899', desc: 'Access controls, audit logs, and data minimisation to protect employee information.' },
]

const STEPS = [
  { n: '01', title: 'Request Access',    desc: 'Submit our onboarding form with your company details. Our team creates your workspace within 24 hours.' },
  { n: '02', title: 'Configure & Import', desc: 'Set up departments, positions, and import employees via CSV. We assist at no extra cost.' },
  { n: '03', title: 'Go Live',           desc: 'Your team logs in and workflows activate immediately. Local SA support every step of the way.' },
]

// ── Styles helpers ───────────────────────────────────
const cardBase = {
  background: 'rgba(255,255,255,0.025)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '20px',
  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
}

const primaryBtn = {
  display: 'inline-flex' as const, alignItems: 'center' as const, gap: '10px',
  padding: '17px 38px',
  background: `linear-gradient(135deg, ${G} 0%, ${G2} 50%, ${G} 100%)`,
  backgroundSize: '200% auto',
  color: '#0A0A0A', fontWeight: 700, fontSize: '15px',
  borderRadius: '12px', border: 'none', cursor: 'pointer',
  boxShadow: '0 4px 28px rgba(201,168,76,0.3)',
  transition: 'all 0.3s', textDecoration: 'none' as const,
  fontFamily: 'DM Sans, sans-serif',
}

const secondaryBtn = {
  display: 'inline-flex' as const, alignItems: 'center' as const, gap: '10px',
  padding: '16px 36px',
  background: 'transparent',
  color: G, fontWeight: 600, fontSize: '15px',
  borderRadius: '12px', border: `1.5px solid rgba(201,168,76,0.35)`,
  cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none' as const,
  fontFamily: 'DM Sans, sans-serif',
}

export default function HomePage() {
  const [cf, setCf]   = useState({ name: '', email: '', company: '', message: '' })
  const [cLoading, setCLoading] = useState(false)
  const [cDone,    setCDone]    = useState(false)
  const [cError,   setCError]   = useState('')

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault()
    setCLoading(true); setCError('')
    try {
      const res  = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cf) })
      const data = await res.json()
      if (!res.ok || !data.success) { setCError(data.error || 'Failed. Please try again.'); return }
      setCDone(true)
    } catch { setCError('Network error. Email us at info@nexbridge.co.za') }
    finally { setCLoading(false) }
  }

  return (
    <>
      <Navbar />
      <main style={{ background: '#080808' }}>

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', overflow: 'hidden' }}>

          {/* Blobs */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {/* Primary large blobs */}
            <div className="anim-blob-1" style={{ position: 'absolute', width: '900px', height: '900px', top: '-350px', left: '-350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 55%)' }} />
            <div className="anim-blob-2" style={{ position: 'absolute', width: '750px', height: '750px', bottom: '-250px', right: '-250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.11) 0%, transparent 55%)' }} />
            <div className="anim-blob-3" style={{ position: 'absolute', width: '500px', height: '500px', top: '50%', left: '50%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,201,122,0.08) 0%, transparent 60%)' }} />

            {/* Small floating orbs */}
            <div className="anim-orb" style={{ position: 'absolute', width: '120px', height: '120px', top: '20%', left: '15%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)', animationDelay: '0s' }} />
            <div className="anim-orb" style={{ position: 'absolute', width: '80px', height: '80px', top: '60%', left: '8%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)', animationDelay: '2s' }} />
            <div className="anim-orb" style={{ position: 'absolute', width: '100px', height: '100px', top: '30%', right: '12%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,201,122,0.14) 0%, transparent 70%)', animationDelay: '4s' }} />
            <div className="anim-orb" style={{ position: 'absolute', width: '60px', height: '60px', bottom: '25%', right: '20%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.16) 0%, transparent 70%)', animationDelay: '1s' }} />
            <div className="anim-orb" style={{ position: 'absolute', width: '140px', height: '140px', bottom: '15%', left: '25%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 70%)', animationDelay: '3s' }} />

            {/* Spinning ring */}
            <div className="anim-spin-slow" style={{ position: 'absolute', width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.06)' }} />
            <div className="anim-spin-slow" style={{ position: 'absolute', width: '900px', height: '900px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.04)', animationDirection: 'reverse' }} />

            {/* Dot grid */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(201,168,76,0.18) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              opacity: 0.4,
            }} />
            {/* Edge fade */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 25%, #080808 100%)' }} />
          </div>

          <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '80px 32px', position: 'relative', zIndex: 1, width: '100%' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

              <div className="anim-fade-up d1" style={{ marginBottom: '28px' }}>
                <Badge>🇿🇦 Purpose-Built for South African Businesses</Badge>
              </div>

              <h1 className="anim-fade-up d2" style={{
                fontFamily: 'DM Serif Display, Georgia, serif',
                fontSize: 'clamp(54px, 9vw, 104px)',
                fontWeight: 600, lineHeight: 1.02,
                letterSpacing: '-0.03em',
                marginBottom: '32px',
              }}>
                HR & Payroll<br />
                <span style={{
                  background: `linear-gradient(135deg, ${G} 0%, ${G2} 40%, ${G} 80%)`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>done right,</span><br />
                the SA way.
              </h1>

              <p className="anim-fade-up d3" style={{
                fontSize: 'clamp(17px, 2.2vw, 21px)',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.75, marginBottom: '52px',
                maxWidth: '680px', margin: '0 auto 52px',
              }}>
                The all-in-one HR platform built from the ground up for South African businesses —
                SARS IRP5, B-BBEE, BCEA, LRA and Employment Equity, fully covered.
              </p>

              <div className="anim-fade-up d4" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '60px' }}>
                <Link href="/register" style={primaryBtn}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 12px 40px rgba(201,168,76,0.45)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 28px rgba(201,168,76,0.3)' }}>
                  Request Access
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <a href="https://app.peoplecore.co.za/login" style={secondaryBtn}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(201,168,76,0.07)'; el.style.borderColor = 'rgba(201,168,76,0.55)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.borderColor = 'rgba(201,168,76,0.35)' }}>
                  Sign In to Platform
                </a>
              </div>

              {/* Trust pills */}
              <div className="anim-fade-up d5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                {['SARS Compliant', 'BCEA Ready', 'B-BBEE Tracking', 'LRA Aligned', 'Local Support', 'POPIA Aware'].map(b => (
                  <span key={b} style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    padding: '8px 16px', borderRadius: '100px', fontSize: '13px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    color: 'rgba(255,255,255,0.5)',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"/></svg>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: 'linear-gradient(to bottom, transparent, #080808)', pointerEvents: 'none' }} />
        </section>

        {/* ══════════════════════════════════════════════
            STATS TICKER
        ══════════════════════════════════════════════ */}
        <section style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { end: 500,   suffix: '+',   label: 'Companies Onboarded'    },
              { end: 12500, suffix: '+',   label: 'Employees Managed'       },
              { end: 99,    suffix: '.9%', label: 'Platform Uptime'         },
              { end: 100,   suffix: '%',   label: 'SA Labour Law Compliant' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '52px 32px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'DM Serif Display, Georgia, serif',
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  fontWeight: 400, color: G, lineHeight: 1,
                  marginBottom: '10px',
                }}>
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FEATURES
        ══════════════════════════════════════════════ */}
        <section id="features" style={{ padding: '140px 0', background: '#080808' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 32px' }}>
            <SectionHead
              badge="Everything You Need"
              title={<>One platform.<br />Every HR need.</>}
              subtitle="From hiring to retiring - PeopleCore handles every aspect of your HR operations, fully aligned with South African legislation."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{ ...cardBase, padding: '40px' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(201,168,76,0.04)'; el.style.borderColor = 'rgba(201,168,76,0.2)'; el.style.transform = 'translateY(-6px)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.025)'; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.transform = 'translateY(0)' }}>
                  <div style={{ fontSize: '36px', marginBottom: '20px' }}>{f.icon}</div>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '18px', marginBottom: '12px', color: '#fff' }}>{f.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            COMPLIANCE
        ══════════════════════════════════════════════ */}
        <section id="compliance" style={{ padding: '140px 0', background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 65%)' }} />

          <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
            <SectionHead
              badge="🇿🇦 SA Legislation"
              title={<>Built for South African<br /><span style={{ background: `linear-gradient(135deg, ${G}, ${G2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>compliance requirements.</span></>}
              subtitle="We didn't adapt a foreign HR product for SA. PeopleCore was built from scratch with South African labour law at its core."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px' }}>
              {COMPLIANCE.map((c, i) => (
                <div key={i} style={{ ...cardBase, padding: '36px', borderColor: `${c.color}18` }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `${c.color}45`)}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = `${c.color}18`)}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '52px', height: '52px', borderRadius: '14px', marginBottom: '20px',
                    background: `${c.color}15`, color: c.color,
                    border: `1px solid ${c.color}30`,
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 800, fontSize: '10px', letterSpacing: '0.05em',
                  }}>{c.code}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '17px', marginBottom: '10px', color: '#fff' }}>{c.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA banner */}
            <div style={{
              borderRadius: '24px', padding: '80px',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))',
              border: '1px solid rgba(201,168,76,0.2)',
              textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600, marginBottom: '16px' }}>
                  Stop worrying about compliance.
                </h3>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 40px' }}>
                  PeopleCore keeps you automatically compliant so you can focus on building your team, not navigating legislation.
                </p>
                <Link href="/register" style={primaryBtn}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 12px 40px rgba(201,168,76,0.45)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 28px rgba(201,168,76,0.3)' }}>
                  Get Started Today →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════════════ */}
        <section style={{ padding: '140px 0', background: '#080808' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
            <SectionHead badge="Simple Setup" title="Up and running in 24 hours" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {STEPS.map((s, i) => (
                <div key={i} style={{ ...cardBase, padding: '48px 40px', position: 'relative' }}>
                  <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '80px', fontWeight: 400, color: G, opacity: 0.15, lineHeight: 1, marginBottom: '28px' }}>{s.n}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '20px', marginBottom: '14px' }}>{s.title}</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>{s.desc}</p>
                  {i < 2 && (
                    <div style={{ position: 'absolute', top: '50%', right: '-16px', zIndex: 2, color: G, opacity: 0.4, fontSize: '24px', transform: 'translateY(-50%)' }}>→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════════ */}
        <section id="contact" style={{ padding: '140px 0', background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: '-200px', right: '-150px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} className="anim-blob-1" />

          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
            <SectionHead badge="Get in Touch" title="We'd love to hear from you"
              subtitle="Our SA-based team is ready to answer your questions and help you get started." />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px', alignItems: 'start' }}>

              {/* Left — contact info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ ...cardBase, padding: '40px', borderColor: 'rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.04)' }}>
                  <h3 style={{ fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '12px', color: G, marginBottom: '28px' }}>Contact Details</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {[
                      { icon: '📞', label: 'Phone', value: '010 014 8757', href: 'tel:0100148757' },
                      { icon: '📧', label: 'Email', value: 'info@nexbridge.co.za', href: 'mailto:info@nexbridge.co.za' },
                      { icon: '🌐', label: 'Platform', value: 'app.peoplecore.co.za', href: 'https://app.peoplecore.co.za' },
                    ].map(c => (
                      <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: GD, border: `1px solid rgba(201,168,76,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{c.icon}</div>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 700, color: G, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>{c.label}</div>
                          <a href={c.href} style={{ fontSize: '15px', fontWeight: 500, color: 'rgba(255,255,255,0.75)', transition: 'color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.color = G)}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}>{c.value}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ ...cardBase, padding: '32px' }}>
                  <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Ready to get started?</p>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '20px' }}>
                    Fill in our registration form and we'll have your workspace ready within 24 hours.
                  </p>
                  <Link href="/register" style={{ ...primaryBtn, padding: '13px 24px', fontSize: '14px' }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 28px rgba(201,168,76,0.4)' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 28px rgba(201,168,76,0.3)' }}>
                    Request Access →
                  </Link>
                </div>
              </div>

              {/* Right — form */}
              <div style={{ ...cardBase, padding: '48px' }}>
                <h3 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontWeight: 600, fontSize: '26px', marginBottom: '32px' }}>Send us a message</h3>
                {cDone ? (
                  <div style={{ textAlign: 'center', padding: '60px 0' }}>
                    <div style={{ fontSize: '56px', marginBottom: '20px' }}>✅</div>
                    <h4 style={{ fontWeight: 700, fontSize: '22px', marginBottom: '8px' }}>Message Sent!</h4>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>We'll get back to you within 1 business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContact} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      {[
                        { k: 'name',  label: 'Name *',          ph: 'John Smith',        type: 'text'  },
                        { k: 'email', label: 'Email Address *',  ph: 'john@company.com',  type: 'email' },
                      ].map(f => (
                        <div key={f.k}>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '8px' }}>{f.label}</label>
                          <input type={f.type} placeholder={f.ph} required value={(cf as any)[f.k]}
                            onChange={e => setCf(p => ({ ...p, [f.k]: e.target.value }))}
                            style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '13px 16px', fontSize: '14px', color: '#fff' }}
                            onFocus={e => { e.target.style.borderColor = G; e.target.style.boxShadow = `0 0 0 3px ${GD}` }}
                            onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }} />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '8px' }}>Company</label>
                      <input type="text" placeholder="Acme Corp" value={cf.company}
                        onChange={e => setCf(p => ({ ...p, company: e.target.value }))}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '13px 16px', fontSize: '14px', color: '#fff' }}
                        onFocus={e => { e.target.style.borderColor = G; e.target.style.boxShadow = `0 0 0 3px ${GD}` }}
                        onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '8px' }}>Message *</label>
                      <textarea placeholder="How can we help you?" required rows={5} value={cf.message}
                        onChange={e => setCf(p => ({ ...p, message: e.target.value }))}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '13px 16px', fontSize: '14px', color: '#fff', resize: 'none' }}
                        onFocus={e => { e.target.style.borderColor = G; e.target.style.boxShadow = `0 0 0 3px ${GD}` }}
                        onBlur={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }} />
                    </div>
                    {cError && <div style={{ padding: '14px 16px', borderRadius: '10px', fontSize: '14px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}>{cError}</div>}
                    <button type="submit" disabled={cLoading} style={{ ...primaryBtn, justifyContent: 'center', opacity: cLoading ? 0.7 : 1, width: '100%' }}>
                      {cLoading ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════ */}
        <section style={{ padding: '160px 0', background: '#080808', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '28px' }}><Badge>Get Started Today</Badge></div>
            <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(44px, 7vw, 80px)', fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '24px' }}>
              Ready to modernise<br />
              <span style={{ background: `linear-gradient(135deg, ${G}, ${G2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>your HR?</span>
            </h2>
            <p style={{ fontSize: '19px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '52px' }}>
              Join South African businesses already running their HR on PeopleCore.
              Local support, local compliance, local expertise.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <Link href="/register" style={primaryBtn}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 12px 40px rgba(201,168,76,0.45)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 28px rgba(201,168,76,0.3)' }}>
                Request Access
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <a href="#contact" style={secondaryBtn}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(201,168,76,0.07)'; el.style.borderColor = 'rgba(201,168,76,0.55)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.borderColor = 'rgba(201,168,76,0.35)' }}>
                Talk to Us First
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
