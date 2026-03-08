import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  Users, Calculator, Calendar, Briefcase, UserCheck,
  Package, BarChart3, Zap, Check, ArrowRight, ChevronRight,
  Shield, Settings, GitBranch,
} from 'lucide-react'

const APP = 'https://app.peoplecore.co.za'

const MODULES = [
  {
    icon: Calculator, label: 'Payroll', color: '#C9A84C', bg: 'rgba(201,168,76,0.08)', border: 'rgba(201,168,76,0.2)',
    title: 'Payroll & SARS Compliance',
    desc: 'Automated, SARS-compliant payroll that handles the complexity so you don\'t have to. Updated tax tables, accurate every time.',
    features: [
      'PAYE calculations using current SARS tax tables',
      'UIF — 1% employee + 1% employer contributions',
      'SDL — 1% of gross payroll where applicable',
      'Professional payslip PDF generation & email delivery',
      'Multiple pay frequencies (weekly, bi-weekly, monthly)',
      'Payroll run lock-and-submit model for accuracy',
      'Year-to-date IRP5 accumulation',
      'Payroll cost reports by department',
    ],
    compliance: ['SARS PAYE 2024/25', 'UIF Act', 'SDL Act', 'IRP5 Ready'],
  },
  {
    icon: Calendar, label: 'Leave', color: '#60A5FA', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.2)',
    title: 'Leave & Attendance',
    desc: 'BCEA-compliant leave management with real-time attendance tracking. From application to approval in one place.',
    features: [
      'Annual, sick, family responsibility, maternity, study leave',
      'BCEA-compliant 21-day annual leave accrual',
      'Manager/HR approval workflow with email notifications',
      'Real-time leave balance calculation',
      'Team leave calendar — see who is off at a glance',
      'Clock in/out attendance tracking',
      'Timesheet view with hours worked summary',
      'Leave reports with CSV export',
    ],
    compliance: ['BCEA Compliant', 'FMLA Supported', 'Public Holidays'],
  },
  {
    icon: Users, label: 'Employees', color: '#34D399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)',
    title: 'Employee Management',
    desc: 'A complete record of every employee from day one to their last — profiles, documents, history and everything in between.',
    features: [
      'Full employee profiles with employment history',
      'Department and reporting line management',
      'Document vault — contracts, IDs, certificates',
      'Employment status tracking (active, on leave, terminated)',
      'Salary configuration per employee',
      'Custom fields for business-specific data',
      'Employee self-service portal',
      'Bulk import via CSV',
    ],
    compliance: ['POPIA Compliant', 'AES-256 Encrypted'],
  },
  {
    icon: Briefcase, label: 'Recruitment', color: '#F472B6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.2)',
    title: 'Recruitment ATS',
    desc: 'A full applicant tracking system built into your HR platform. From job post to signed offer — all in PeopleCore.',
    features: [
      'Post jobs internally or to external boards',
      'Kanban pipeline: Applied → Screening → Interview → Offer → Hired',
      'Candidate profiles with CV storage and notes',
      'Interview scheduling and outcome recording',
      'Offer letter generation from template',
      'One-click hire: auto-creates employee + triggers onboarding',
      'Rejection workflow with candidate email',
      'Recruitment pipeline analytics',
    ],
    compliance: ['EEA Tracking', 'Candidate Data Protected'],
  },
  {
    icon: UserCheck, label: 'Onboarding', color: '#FBBF24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)',
    title: 'Onboarding Automation',
    desc: 'Never drop the ball on a new hire again. Automated checklists ensure every new employee is set up correctly every time.',
    features: [
      'Reusable onboarding templates per role or department',
      'Task assignment to HR, IT, manager or the employee',
      'Progress tracking with visual completion bar',
      'Auto-assigned when candidate is hired via ATS',
      'Document collection — ID, bank details, tax number',
      'System access provisioning checklist',
      'Welcome email automation',
      'Onboarding completion reporting',
    ],
    compliance: [],
  },
  {
    icon: Package, label: 'Assets', color: '#A78BFA', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)',
    title: 'Asset Management',
    desc: 'Know exactly what company assets you own, who has them and when they were last serviced.',
    features: [
      'Full asset register with serial numbers and categories',
      'Assign assets to employees with condition notes',
      'Return tracking with handover acknowledgement',
      'Asset categories: laptop, phone, vehicle, equipment',
      'Maintenance and service history log',
      'Asset audit trail — full history per item',
      'Assets dashboard with availability status',
      'Export asset register to CSV',
    ],
    compliance: [],
  },
  {
    icon: BarChart3, label: 'Analytics', color: '#38BDF8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.2)',
    title: 'HR Analytics',
    desc: 'Make data-driven decisions with real-time dashboards covering every aspect of your workforce.',
    features: [
      'Headcount trend with hire/exit breakdown',
      'Leave analysis — types, approval rates, peak periods',
      'Payroll cost trend by month and department',
      'Attendance patterns — clock-in, late, absent',
      'Department-level filtering on all charts',
      'Date range picker across all dashboards',
      'Export charts and data to CSV',
      'Executive summary view',
    ],
    compliance: [],
  },
  {
    icon: Zap, label: 'Workflows', color: '#FB923C', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.2)',
    title: 'Workflow Automation',
    desc: 'Set up automated actions that trigger on HR events. Eliminate manual follow-up and human error.',
    features: [
      'Trigger workflows on: hire, leave, termination, payroll',
      'Automated email notifications to relevant parties',
      'Task creation on defined HR events',
      'Probation period reminders',
      'Contract renewal alerts',
      'Birthday and work anniversary recognition',
      'Escalation rules for overdue approvals',
      'Workflow execution log',
    ],
    compliance: [],
  },
  {
    icon: Shield, label: 'Security', color: '#F87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.2)',
    title: 'Security & Audit',
    desc: 'Enterprise-grade security on every plan. POPIA-ready with full audit trails and session control.',
    features: [
      'AES-256 encryption for all sensitive fields',
      'Role-based access: Admin, HR Manager, Employee',
      'Active session management — revoke any session remotely',
      'Complete audit log: every action, user, IP, timestamp',
      'Secure password reset with one-time token',
      'Rate limiting on all sensitive endpoints',
      'JWT access tokens (15-min) with refresh rotation',
      'POPIA data deletion and export on request',
    ],
    compliance: ['POPIA', 'AES-256', 'TLS 1.2+'],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Features &mdash; PeopleCore HR &amp; Payroll</title>
        <meta name="description" content="Explore every feature in PeopleCore — payroll, leave, recruitment, analytics, security and more. Built for South African businesses." />
      </Head>
      <Nav/>
      <main>

        {/* Hero */}
        <section style={{ position: 'relative', paddingTop: 140, paddingBottom: 80, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}/>
          <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.6 }}/>
          <div className="container" style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
            <div className="tag" style={{ marginBottom: 20 }}>Platform Features</div>
            <h1 style={{
              fontFamily: 'Instrument Serif', fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 400, color: '#fff', lineHeight: 1.05,
              letterSpacing: '-0.02em', marginBottom: 24,
            }}>
              Everything you need to run<br/>
              <span className="gradient-text" style={{ fontStyle: 'italic' }}>HR in South Africa</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 18, maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>
              9 fully integrated modules. One platform. No spreadsheets, no switching between tools.
            </p>
            <a href={`${APP}/register`} className="btn-gold" style={{ fontSize: 15, padding: '13px 28px' }}>
              Start Free <ArrowRight size={15}/>
            </a>
          </div>
        </section>

        {/* Module nav pills */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)', padding: '14px 24px', overflow: 'auto' }}>
          <div className="module-nav" style={{ display: 'flex', gap: 8, justifyContent: 'center', minWidth: 'max-content', margin: '0 auto' }}>
            {MODULES.map(m => (
              <a key={m.label} href={`#${m.label.toLowerCase()}`} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 100,
                border: `1px solid ${m.border}`,
                background: m.bg,
                color: m.color,
                fontSize: 12, fontWeight: 600,
                textDecoration: 'none', whiteSpace: 'nowrap',
                transition: 'opacity 0.2s',
              }}>
                <m.icon size={12}/>{m.label}
              </a>
            ))}
          </div>
        </div>

        {/* Modules */}
        <section style={{ padding: '80px 24px' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {MODULES.map((m, i) => (
              <div key={m.title} id={m.label.toLowerCase()} className="module-card" style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1.4fr' : '1.4fr 1fr',
                gap: 0,
                background: i % 2 === 0 ? '#0F0F11' : '#0A0A0C',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 20,
                overflow: 'hidden',
                marginBottom: 12,
              }}>
                {/* Content side */}
                <div style={{
                  padding: '48px 48px',
                  order: i % 2 === 0 ? 0 : 1,
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  {/* Icon + label */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: m.bg, border: `1px solid ${m.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <m.icon size={20} color={m.color}/>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: m.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{m.label}</span>
                  </div>
                  <h2 style={{
                    fontFamily: 'Instrument Serif', fontSize: 'clamp(22px, 3vw, 32px)',
                    fontWeight: 400, color: '#fff', lineHeight: 1.15, marginBottom: 16,
                  }}>{m.title}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{m.desc}</p>
                  {m.compliance.length > 0 && (
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {m.compliance.map(c => (
                        <span key={c} style={{
                          fontSize: 11, fontWeight: 600, color: m.color,
                          background: m.bg, border: `1px solid ${m.border}`,
                          padding: '3px 9px', borderRadius: 4,
                        }}>{c}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Features side */}
                <div style={{
                  padding: '48px 48px',
                  order: i % 2 === 0 ? 1 : 0,
                  background: 'rgba(255,255,255,0.01)',
                  borderLeft: i % 2 === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  borderRight: i % 2 !== 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  <div className="feature-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
                    {m.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <div style={{
                          width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                          background: m.bg, border: `1px solid ${m.border}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <Check size={9} color={m.color}/>
                        </div>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '40px 24px 100px' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, #0F0F11 50%)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 24, padding: '56px 40px',
              maxWidth: 680, margin: '0 auto',
            }}>
              <h2 style={{ fontFamily: 'Instrument Serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, color: '#fff', marginBottom: 16 }}>
                Ready to see it in action?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 15, marginBottom: 32 }}>
                Start with the free plan and explore the platform. No credit card required.
              </p>
              <div className="features-cta-row" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={`${APP}/register`} className="btn-gold">Start Free <ArrowRight size={14}/></a>
                <Link href="/pricing" className="btn-outline">View Pricing <ChevronRight size={14}/></Link>
              </div>
            </div>
          </div>
        </section>

      
        <style jsx global>{`
          @media (max-width: 900px) {
            .module-card { grid-template-columns: 1fr !important; }
            .module-card > div { order: unset !important; border-left: none !important; border-right: none !important; border-top: 1px solid rgba(255,255,255,0.05) !important; }
            .feature-two-col { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 480px) {
            .module-nav { display: none !important; }
            .features-cta-row { flex-direction: column !important; }
            .features-cta-row a { text-align: center; justify-content: center; }
          }
        `}</style>
      </main>
      <Footer/>
    </>
  )
}
