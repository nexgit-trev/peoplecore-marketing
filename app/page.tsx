'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ── Animated counter ─────────────────────────────────
function Counter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const duration = 1800
      const step = end / (duration / 16)
      let current = 0
      const timer = setInterval(() => {
        current = Math.min(current + step, end)
        setCount(Math.floor(current))
        if (current >= end) clearInterval(timer)
      }, 16)
      observer.disconnect()
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const FEATURES = [
  {
    icon: '💼',
    title: 'Employee Management',
    desc: 'Complete employee lifecycle management from onboarding to offboarding. Track roles, departments, branches, and employment history in one place.',
    tags: ['Onboarding','Profiles','Documents','Assets'],
  },
  {
    icon: '💰',
    title: 'Payroll & IRP5',
    desc: 'Automated payroll processing with SARS-compliant IRP5 certificate generation, tax calculations, UIF, SDL, and multi-currency support.',
    tags: ['IRP5','Tax Calc','UIF/SDL','PDF Payslips'],
  },
  {
    icon: '🏖️',
    title: 'Leave Management',
    desc: 'Full BCEA-compliant leave management with automatic leave balance tracking, approval workflows, and public holiday integration.',
    tags: ['BCEA Compliant','Approval Flow','Balance Tracking','Annual/Sick/Family'],
  },
  {
    icon: '⏱️',
    title: 'Attendance Tracking',
    desc: 'Real-time attendance monitoring with clock-in/out, overtime calculations, and comprehensive attendance reports.',
    tags: ['Clock In/Out','Overtime','Reports','Remote Work'],
  },
  {
    icon: '⭐',
    title: 'Performance Reviews',
    desc: 'Structured performance review cycles with competency ratings, self-assessments, manager feedback, and development planning.',
    tags: ['Review Cycles','Competencies','Dev Plans','Ratings'],
  },
  {
    icon: '📚',
    title: 'Training & Development',
    desc: 'Training catalogue management with enrollment tracking, certification expiry alerts, and B-BBEE skills development reporting.',
    tags: ['Course Library','Cert Expiry','B-BBEE Link','Mandatory Training'],
  },
  {
    icon: '⚖️',
    title: 'Disciplinary Management',
    desc: 'SA Labour Law compliant disciplinary process management with case tracking, hearing scheduling, CCMA reference tracking, and appeal management.',
    tags: ['CCMA Tracking','Case Numbers','Hearings','Appeal Deadline'],
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    desc: 'Real-time workforce analytics with headcount trends, leave patterns, payroll summaries, and compliance dashboards.',
    tags: ['Headcount','Leave Trends','Payroll','Dashboards'],
  },
  {
    icon: '🔐',
    title: 'Security & Audit',
    desc: 'Enterprise-grade security with two-factor authentication, role-based access control, and complete audit trails for every action.',
    tags: ['2FA','RBAC','Audit Logs','Before/After Diff'],
  },
]

const COMPLIANCE = [
  { code: 'SARS', title: 'IRP5 & Tax Compliance', desc: 'Automated IRP5 certificate generation, PAYE calculations, and submission-ready tax reports aligned with SARS requirements.', color: '#C9A84C' },
  { code: 'BCEA', title: 'Basic Conditions of Employment', desc: 'Leave entitlements automatically calculated per BCEA — annual, sick, family responsibility, maternity, and public holidays.', color: '#3B82F6' },
  { code: 'LRA', title: 'Labour Relations Act', desc: 'Disciplinary procedures, hearing management, CCMA tracking, and appeal workflows compliant with LRA processes.', color: '#22C55E' },
  { code: 'EEA', title: 'Employment Equity Act', desc: 'EEA4 workforce profiling, equity goals tracking, designated group reporting, and transformation progress dashboards.', color: '#8B5CF6' },
  { code: 'B-BBEE', title: 'Skills Development & B-BBEE', desc: 'Track training spend against 2% payroll target, generate B-BBEE scorecard data, and record SARS training codes.', color: '#F97316' },
  { code: 'POPIA', title: 'POPIA Awareness', desc: 'Employee data managed with privacy in mind — access controls, audit trails, and data minimisation principles.', color: '#EC4899' },
]

const TESTIMONIALS = [
  { name: 'Sarah van der Merwe', role: 'HR Director', company: 'Cape Town Logistics', quote: 'PeopleCore transformed how we handle HR compliance. The IRP5 automation alone saves us 3 days every February. Finally a system that understands SA requirements.', avatar: 'SV' },
  { name: 'Thabo Nkosi', role: 'CEO', company: 'Johannesburg Tech Solutions', quote: 'The B-BBEE skills development tracking is exceptional. We can now accurately report our training spend and generate scorecards without external consultants.', avatar: 'TN' },
  { name: 'Priya Govender', role: 'Financial Manager', company: 'Durban Manufacturing Co', quote: 'Switching from spreadsheets to PeopleCore was the best decision we made. Payroll that used to take 2 days now takes 2 hours. Remarkable platform.', avatar: 'PG' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '80px' }}>

          {/* Animated blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute rounded-full animate-blob-1"
              style={{ width: '700px', height: '700px', top: '-200px', left: '-200px', background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)' }} />
            <div className="absolute rounded-full animate-blob-2"
              style={{ width: '600px', height: '600px', bottom: '-150px', right: '-150px', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)' }} />
            <div className="absolute rounded-full animate-blob-3"
              style={{ width: '400px', height: '400px', top: '40%', left: '45%', background: 'radial-gradient(circle, rgba(232,201,122,0.06) 0%, transparent 65%)' }} />
            {/* Grid */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }} />
          </div>

          <div className="container-xl relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">

              <div className="badge mb-6 animate-fade-up delay-1">
                <span>🇿🇦</span> Built for South African Businesses
              </div>

              <h1 className="font-syne font-bold leading-[1.05] mb-6 animate-fade-up delay-2"
                style={{ fontSize: 'clamp(48px, 7vw, 88px)', letterSpacing: '-0.02em' }}>
                HR & Payroll
                <br />
                <span className="text-gold">done right,</span>
                <br />
                the SA way.
              </h1>

              <p className="text-lg leading-relaxed mb-10 mx-auto max-w-2xl animate-fade-up delay-3"
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(16px, 2vw, 20px)' }}>
                The all-in-one HR platform built for South African businesses — from SARS IRP5 and B-BBEE compliance to leave management, payroll, performance reviews, and disciplinary management.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-4">
                <Link href="/register" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
                  Request Access
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
                <a href="https://app.peoplecore.co.za/login" className="btn-secondary" style={{ fontSize: '16px', padding: '15px 36px' }}>
                  Sign In to Platform
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up delay-5">
                {['SARS Compliant','BCEA Ready','B-BBEE Tracking','LRA Aligned','No Setup Fees','Local Support'].map(b => (
                  <span key={b} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>
                    <span style={{ color: '#22C55E' }}>✓</span> {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }} />
        </section>

        {/* ══════════════════════════════════════════════
            STATS
        ══════════════════════════════════════════════ */}
        <section className="section-sm" style={{ background: '#0A0A0A' }}>
          <div className="container-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: 500,  suffix: '+',  label: 'Companies Onboarded',       prefix: '' },
                { value: 12500,suffix: '+',  label: 'Employees Managed',          prefix: '' },
                { value: 99,   suffix: '.9%',label: 'Platform Uptime',            prefix: '' },
                { value: 100,  suffix: '%',  label: 'SA Labour Law Compliant',    prefix: '' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-2xl glass-gold">
                  <div className="font-syne font-black mb-2 text-gold"
                    style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
                    <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ══════════════════════════════════════════════
            FEATURES
        ══════════════════════════════════════════════ */}
        <section id="features" className="section" style={{ background: '#080808' }}>
          <div className="container-xl">

            <div className="text-center mb-16">
              <div className="badge mb-4">Everything You Need</div>
              <h2 className="font-syne font-bold mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}>
                One platform. Every HR need.
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
                From hiring to retiring — PeopleCore handles every aspect of your HR operations, fully compliant with South African legislation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl glass group transition-all hover:scale-[1.02]"
                  style={{ transitionDuration: '0.25s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.25)'; (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.03)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}>
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-syne font-bold text-lg mb-2 text-white">{f.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>{f.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map(tag => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                        style={{ background: 'rgba(201,168,76,0.08)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.15)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ══════════════════════════════════════════════
            SA COMPLIANCE
        ══════════════════════════════════════════════ */}
        <section id="compliance" className="section" style={{ background: '#0A0A0A' }}>
          <div className="container-xl">

            <div className="text-center mb-16">
              <div className="badge mb-4">🇿🇦 SA Legislation</div>
              <h2 className="font-syne font-bold mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em' }}>
                Built for South African
                <br />
                <span className="text-gold">compliance requirements.</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
                We didn't adapt a foreign product for SA. We built PeopleCore from the ground up with South African labour law at its core.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {COMPLIANCE.map((c, i) => (
                <div key={i} className="p-6 rounded-2xl transition-all"
                  style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${c.color}22` }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `${c.color}44`)}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = `${c.color}22`)}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 font-black text-sm font-syne"
                    style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}30` }}>
                    {c.code}
                  </div>
                  <h3 className="font-syne font-bold text-base mb-2" style={{ color: '#fff' }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Compliance CTA */}
            <div className="rounded-2xl p-8 md:p-12 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))', border: '1px solid rgba(201,168,76,0.2)' }}>
              <h3 className="font-syne font-bold text-2xl md:text-3xl mb-3">
                Stop worrying about compliance.
              </h3>
              <p className="text-base mb-6 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                PeopleCore keeps you compliant automatically — so you can focus on building your team, not navigating legislation.
              </p>
              <Link href="/register" className="btn-primary" style={{ fontSize: '15px' }}>
                Get Started Today →
              </Link>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ══════════════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════════════ */}
        <section className="section" style={{ background: '#080808' }}>
          <div className="container-lg">
            <div className="text-center mb-14">
              <div className="badge mb-4">Simple Setup</div>
              <h2 className="font-syne font-bold mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
                Up and running in 24 hours
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Request Access', desc: 'Fill in our simple onboarding form with your company details and requirements. Our team reviews and sets up your workspace.' },
                { step: '02', title: 'Configure & Import', desc: 'Add your departments, positions, and import your employees via CSV upload. We assist with initial configuration.' },
                { step: '03', title: 'Go Live', desc: 'Your team logs in, HR workflows activate immediately. Full support from our local SA team every step of the way.' },
              ].map((s, i) => (
                <div key={i} className="relative p-7 rounded-2xl glass">
                  <div className="font-syne font-black text-5xl mb-5 text-gold opacity-30">{s.step}</div>
                  <h3 className="font-syne font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 z-10 text-gold opacity-40 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ══════════════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════════════ */}
        <section className="section" style={{ background: '#0A0A0A' }}>
          <div className="container-xl">
            <div className="text-center mb-14">
              <div className="badge mb-4">Customer Stories</div>
              <h2 className="font-syne font-bold mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
                Trusted by SA businesses
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="p-7 rounded-2xl glass flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', color: '#0A0A0A' }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ══════════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════════ */}
        <section className="section relative overflow-hidden" style={{ background: '#080808' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-30" style={{
              background: 'radial-gradient(ellipse 800px 500px at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)'
            }} />
          </div>
          <div className="container-md relative z-10 text-center">
            <div className="badge mb-6">Get Started Today</div>
            <h2 className="font-syne font-bold mb-5" style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.02em' }}>
              Ready to modernise
              <br />
              <span className="text-gold">your HR?</span>
            </h2>
            <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Join hundreds of South African businesses already running their HR on PeopleCore. Local support, local compliance, local expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }}>
                Request Access
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ fontSize: '16px', padding: '15px 40px' }}>
                Talk to Us First
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
