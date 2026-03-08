import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Shield, Lock, Eye, FileText, Database, Key, Server, AlertTriangle, Check, ArrowRight, ChevronRight } from 'lucide-react'

const APP = 'https://app.peoplecore.co.za'

const FEATURES = [
  {
    icon: Lock, color: '#C9A84C', bg: 'rgba(201,168,76,0.08)', border: 'rgba(201,168,76,0.2)',
    title: 'AES-256 Encryption',
    desc: 'Every sensitive field — ID numbers, bank account details, salary figures — is encrypted at rest using AES-256. All data in transit is protected with TLS 1.2 or higher.',
    points: ['ID numbers encrypted at rest','Bank details stored encrypted','Salary data never in plain text','TLS 1.2+ for all API calls'],
  },
  {
    icon: Key, color: '#60A5FA', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.2)',
    title: 'bcrypt Password Hashing',
    desc: 'Passwords are never stored. We store only a bcrypt hash with configurable salt rounds — the industry standard that makes brute-force attacks computationally infeasible.',
    points: ['Passwords never stored in plain text','bcrypt with salt rounds','One-way hashing — irreversible','Secure reset via one-time token'],
  },
  {
    icon: Eye, color: '#34D399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)',
    title: 'Role-Based Access Control',
    desc: 'Three distinct roles with strict permission boundaries. Employees see only their own records. HR managers see their company. Admins control everything within their tenant.',
    points: ['Employee — own records only','HR Manager — company-wide HR data','Admin — full company management','Cross-tenant access is impossible'],
  },
  {
    icon: FileText, color: '#F472B6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.2)',
    title: 'Complete Audit Trail',
    desc: 'Every action in the system is logged: who did it, what they changed, when they did it and from which IP address. Tamper-evident and always available.',
    points: ['Every API action logged','User identity on every entry','Timestamp + IP address recorded','Exportable for compliance review'],
  },
  {
    icon: Shield, color: '#A78BFA', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)',
    title: 'POPIA Compliance',
    desc: "PeopleCore is built from the ground up for South Africa's Protection of Personal Information Act. You are the Responsible Party — we are the Operator processing data on your behalf.",
    points: ['Lawful basis for all processing','Data subject access requests','Right to erasure supported','Information Regulator contact disclosed'],
  },
  {
    icon: Database, color: '#38BDF8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.2)',
    title: 'Secure Document Vault',
    desc: 'Employee contracts, payslips, IDs and HR documents are stored in an encrypted document vault. Access is controlled by role — employees see only their own documents.',
    points: ['Encrypted file storage','Role-based document access','Payslips — employee view only','Contracts — HR and admin only'],
  },
  {
    icon: Server, color: '#FB923C', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.2)',
    title: 'JWT Session Management',
    desc: 'Short-lived access tokens (15 minutes) with refresh token rotation. Sessions can be viewed and revoked at any time by administrators — useful when an employee leaves.',
    points: ['15-minute access token lifespan','Refresh token rotation','View all active sessions','Remote session revocation'],
  },
  {
    icon: AlertTriangle, color: '#F87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.2)',
    title: 'Breach Response Protocol',
    desc: 'In the event of a security incident we follow a documented breach response protocol — notifying the Information Regulator within 72 hours and affected parties without undue delay.',
    points: ['72-hour regulator notification','Affected party communication','Incident documentation','Post-incident review process'],
  },
]

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security &mdash; PeopleCore HR &amp; Payroll</title>
        <meta name="description" content="Enterprise-grade security on every PeopleCore plan. AES-256 encryption, POPIA compliance, audit trails and role-based access." />
      </Head>
      <Nav/>
      <main>

        {/* Hero */}
        <section style={{ position: 'relative', paddingTop: 140, paddingBottom: 80, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}/>
          <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}/>
          <div className="container" style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
            <div className="tag" style={{ marginBottom: 20 }}>Security</div>
            <h1 style={{
              fontFamily: 'Instrument Serif', fontSize: 'clamp(40px, 6vw, 68px)',
              fontWeight: 400, color: '#fff', lineHeight: 1.05, marginBottom: 24,
            }}>
              Enterprise-grade security<br/>
              <span className="gradient-text" style={{ fontStyle: 'italic' }}>on every plan</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 18, maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.7 }}>
              HR data is some of the most sensitive information your company holds.
              We protect it the same way a bank does — not as an afterthought.
            </p>
            {/* Security badges */}
            <div className="badge-row" style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['AES-256','TLS 1.2+','bcrypt','POPIA','JWT + Rotation','Audit Logged'].map(b => (
                <span key={b} className="compliance-badge">{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section style={{ padding: '60px 24px 100px' }}>
          <div className="container">
            <div className="security-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 60 }}>
              {FEATURES.map(f => (
                <div key={f.title} style={{
                  display: 'flex', gap: 20,
                  background: '#0F0F11',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 20, padding: '28px 28px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = f.border)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: f.bg, border: `1px solid ${f.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <f.icon size={19} color={f.color}/>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'Instrument Serif', fontSize: 20, color: '#fff', marginBottom: 8 }}>{f.title}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, marginBottom: 16 }}>{f.desc}</p>
                    <div className="security-feature-points" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px' }}>
                      {f.points.map(pt => (
                        <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Check size={11} color={f.color} style={{ flexShrink: 0 }}/>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* POPIA callout */}
            <div className="popia-grid" style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, #0F0F11 60%)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 24, padding: '48px 56px',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
            }}>
              <div>
                <div className="tag" style={{ marginBottom: 16 }}>POPIA Compliance</div>
                <h2 style={{ fontFamily: 'Instrument Serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>
                  Built for South African data protection law
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
                  PeopleCore is designed as a POPIA-compliant operator. We process personal information
                  only on your instruction, with appropriate safeguards, and we assist you in meeting
                  your obligations as the Responsible Party.
                </p>
                <a href={`${APP}/legal/popia`} className="btn-outline" style={{ fontSize: 13 }}>
                  Read POPIA Statement <ChevronRight size={13}/>
                </a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  ['Lawful basis',         'All data processing has documented lawful basis'],
                  ['Data minimisation',    'We collect only what is necessary for HR functions'],
                  ['Retention policy',     '5-year retention with secure deletion on request'],
                  ['Data subject rights',  'Access, correction and erasure requests supported'],
                  ['Breach notification',  '72-hour notification to Information Regulator'],
                  ['Operator agreement',   'Data processing agreement available on request'],
                ].map(([label, desc]) => (
                  <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C', flexShrink: 0, marginTop: 6 }}/>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{label}</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      
        <style jsx global>{`
          @media (max-width: 900px) {
            .security-grid { grid-template-columns: 1fr !important; }
            .popia-grid { grid-template-columns: 1fr !important; }
            .security-feature-points { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 480px) {
            .badge-row { gap: 6px !important; }
          }
        `}</style>
      </main>
      <Footer/>
    </>
  )
}
