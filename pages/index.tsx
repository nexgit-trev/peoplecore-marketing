import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  Users, Calculator, Calendar, Briefcase, UserCheck,
  Package, BarChart3, Zap, Shield, Lock, Eye, FileText,
  ArrowRight, Check, ChevronRight, Database,
} from 'lucide-react'

const APP = 'https://app.peoplecore.co.za'

export default function Home() {
  return (
    <>
      <Head>
        <title>PeopleCore &mdash; HR &amp; Payroll Software for South Africa</title>
        <meta name="description" content="Manage employees, payroll, leave, recruitment and compliance in one secure platform. Built for South African businesses." />
      </Head>
      <Nav/>
      <main>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 64 }}>

          {/* Layered background */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            {/* Grid */}
            <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 1 }}/>
            {/* Radial gold glow */}
            <div style={{
              position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
              width: 800, height: 600,
              background: 'radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%)',
            }}/>
            {/* Bottom fade */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 200,
              background: 'linear-gradient(to top, #080809, transparent)',
            }}/>
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>

            {/* Eyebrow */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 100, padding: '6px 16px',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C', animation: 'glow 2s ease-in-out infinite' }}/>
                <span style={{ color: '#C9A84C', fontSize: 12, fontWeight: 600, letterSpacing: '0.05em' }}>
                  POPIA &middot; BCEA &middot; SARS &middot; UIF &mdash; Built for South Africa
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'Instrument Serif, serif',
              fontSize: 'clamp(44px, 7vw, 88px)',
              fontWeight: 400,
              lineHeight: 1.0,
              textAlign: 'center',
              marginBottom: 28,
              letterSpacing: '-0.02em',
            }}>
              <span style={{ color: '#fff' }}>HR &amp; Payroll</span>
              <br/>
              <span className="gradient-text" style={{ fontStyle: 'italic' }}>built for South Africa</span>
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.4)', fontSize: 18, lineHeight: 1.7,
              textAlign: 'center', maxWidth: 560, margin: '0 auto 40px',
            }}>
              One platform for employees, payroll, leave, recruitment and compliance.
              Everything a South African business actually needs.
            </p>

            {/* CTAs */}
            <div className="hero-cta-row" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
              <a href={`${APP}/register`} className="btn-gold" style={{ fontSize: 15, padding: '14px 28px', boxShadow: '0 0 40px rgba(201,168,76,0.2)' }}>
                Start for Free <ArrowRight size={15}/>
              </a>
              <Link href="/features" className="btn-outline" style={{ fontSize: 15, padding: '14px 28px' }}>
                Explore Features <ChevronRight size={15}/>
              </Link>
            </div>

            {/* Trust pills */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 72 }}>
              {['No credit card required','SARS-compliant payroll','Free plan available','Cancel anytime'].map(t => (
                <div key={t} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  color: 'rgba(255,255,255,0.25)', fontSize: 12,
                }}>
                  <Check size={11} color="#C9A84C"/>
                  {t}
                </div>
              ))}
            </div>

            {/* Dashboard mockup */}
            <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto' }} className="animate-fade-up delay-300">
              {/* Glow behind */}
              <div style={{
                position: 'absolute', inset: -1,
                background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.03), transparent)',
                borderRadius: 24, filter: 'blur(1px)',
              }}/>
              {/* Frame */}
              <div style={{
                position: 'relative',
                background: '#0F0F11',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
              }}>
                {/* Browser bar */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)',
                  background: '#0A0A0C',
                }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['#FF5F57','#FEBC2E','#28C840'].map(c => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.6 }}/>
                    ))}
                  </div>
                  <div style={{
                    flex: 1, maxWidth: 320, margin: '0 auto',
                    background: 'rgba(255,255,255,0.04)', borderRadius: 6,
                    padding: '4px 12px', fontSize: 11, color: 'rgba(255,255,255,0.2)',
                    textAlign: 'center',
                  }}>
                    app.peoplecore.co.za/dashboard
                  </div>
                </div>

                {/* Dashboard content */}
                <div style={{ padding: 24 }} className="hero-mock-inner">
                  {/* Stats row */}
                  <div className="hero-mock-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
                    {[
                      { label: 'Employees',      value: '84',       color: '#C9A84C', sub: '+3 this month' },
                      { label: 'On Leave Today', value: '6',        color: '#60A5FA', sub: '2 pending approval' },
                      { label: 'Payroll / Month',value: 'R512,400', color: '#34D399', sub: 'Next run in 8 days' },
                      { label: 'Open Positions', value: '4',        color: '#F472B6', sub: '12 applicants' },
                    ].map(s => (
                      <div key={s.label} style={{
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: 12, padding: '14px 16px',
                      }}>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                        <div style={{ fontFamily: 'Instrument Serif', fontSize: 26, color: s.color, lineHeight: 1 }}>{s.value}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', marginTop: 4 }}>{s.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Table */}
                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.04)',
                    borderRadius: 12, overflow: 'hidden',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Recent Activity</span>
                      <span style={{ fontSize: 11, color: '#C9A84C', cursor: 'pointer' }}>View all</span>
                    </div>
                    {[
                      { name: 'Thabo Nkosi',   role: 'Senior Developer',  dept: 'Engineering', status: 'Active',    dot: '#34D399' },
                      { name: 'Amahle Dlamini',role: 'HR Manager',         dept: 'People Ops',  status: 'On Leave',  dot: '#FBBF24' },
                      { name: 'Pieter van Wyk',role: 'Finance Director',   dept: 'Finance',     status: 'Active',    dot: '#34D399' },
                    ].map(r => (
                      <div key={r.name} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.03)',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{
                            width: 28, height: 28, borderRadius: '50%',
                            background: 'rgba(201,168,76,0.12)',
                            border: '1px solid rgba(201,168,76,0.2)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 11, fontWeight: 700, color: '#C9A84C',
                          }}>{r.name[0]}</div>
                          <div>
                            <div style={{ fontSize: 12, fontWeight: 500, color: '#fff' }}>{r.name}</div>
                            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>{r.role}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: r.dot }}/>
                          <span style={{ fontSize: 11, color: r.dot }}>{r.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Reflection */}
              <div style={{
                position: 'absolute', bottom: -60, left: '10%', right: '10%', height: 60,
                background: 'linear-gradient(to bottom, rgba(201,168,76,0.04), transparent)',
                filter: 'blur(12px)',
              }}/>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ───────────────────────────────────────────────── */}
        <div className="divider"/>
        <section style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.01)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Trusted across</span>
            {['Professional Services','IT Companies','Accounting Firms','Logistics','Construction','Retail'].map(i => (
              <span key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{i}</span>
            ))}
          </div>
        </section>
        <div className="divider"/>

        {/* ── FEATURES BENTO ────────────────────────────────────────────── */}
        <section className="section-pad">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div className="tag" style={{ marginBottom: 16 }}>Platform</div>
              <h2 style={{
                fontFamily: 'Instrument Serif', fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 16,
              }}>
                Everything HR, in one place
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 16, maxWidth: 520, margin: '0 auto' }}>
                Stop juggling spreadsheets. PeopleCore brings your entire HR function into one connected platform built for SA.
              </p>
            </div>

            {/* Bento grid */}
            <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 12 }}>

              {/* Big feature — Payroll */}
              <div className="bento-card" style={{ gridColumn: 'span 5' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  <Calculator size={20} color="#C9A84C"/>
                </div>
                <h3 style={{ fontFamily: 'Instrument Serif', fontSize: 24, color: '#fff', marginBottom: 10 }}>Payroll &amp; SARS Compliance</h3>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                  Automated PAYE, UIF, SDL calculations with correct SARS tax tables.
                  Generate payslips in one click. Always compliant.
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['PAYE','UIF','SDL','IRP5','Payslips'].map(b => (
                    <span key={b} style={{
                      fontSize: 11, fontWeight: 600, color: '#C9A84C',
                      background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)',
                      padding: '3px 8px', borderRadius: 4,
                    }}>{b}</span>
                  ))}
                </div>
              </div>

              {/* Leave */}
              <div className="bento-card" style={{ gridColumn: 'span 4' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  <Calendar size={20} color="#60A5FA"/>
                </div>
                <h3 style={{ fontFamily: 'Instrument Serif', fontSize: 22, color: '#fff', marginBottom: 10 }}>Leave &amp; Attendance</h3>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.7 }}>
                  BCEA-compliant leave policies with approval workflows and real-time attendance tracking.
                </p>
              </div>

              {/* Recruitment */}
              <div className="bento-card" style={{ gridColumn: 'span 3' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  <Briefcase size={20} color="#34D399"/>
                </div>
                <h3 style={{ fontFamily: 'Instrument Serif', fontSize: 22, color: '#fff', marginBottom: 10 }}>Recruitment ATS</h3>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.7 }}>
                  Post jobs, track candidates and manage your hiring pipeline end-to-end.
                </p>
              </div>

              {/* Analytics */}
              <div className="bento-card" style={{ gridColumn: 'span 3' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  <BarChart3 size={20} color="#F472B6"/>
                </div>
                <h3 style={{ fontFamily: 'Instrument Serif', fontSize: 22, color: '#fff', marginBottom: 10 }}>HR Analytics</h3>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.7 }}>
                  Headcount trends, leave patterns, payroll costs and workforce insights at a glance.
                </p>
              </div>

              {/* Workflows */}
              <div className="bento-card" style={{ gridColumn: 'span 3' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  <Zap size={20} color="#FBBF24"/>
                </div>
                <h3 style={{ fontFamily: 'Instrument Serif', fontSize: 22, color: '#fff', marginBottom: 10 }}>Workflow Automation</h3>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.7 }}>
                  Trigger actions automatically on HR events. No manual follow-up required.
                </p>
              </div>

              {/* Assets */}
              <div className="bento-card" style={{ gridColumn: 'span 3' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  <Package size={20} color="#A78BFA"/>
                </div>
                <h3 style={{ fontFamily: 'Instrument Serif', fontSize: 22, color: '#fff', marginBottom: 10 }}>Asset Management</h3>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.7 }}>
                  Track company assets assigned to employees with full audit trails.
                </p>
              </div>

              {/* Onboarding */}
              <div className="bento-card" style={{ gridColumn: 'span 3', background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(15,15,17,1) 60%)' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  <UserCheck size={20} color="#C9A84C"/>
                </div>
                <h3 style={{ fontFamily: 'Instrument Serif', fontSize: 22, color: '#fff', marginBottom: 10 }}>Onboarding</h3>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.7 }}>
                  Automate new hire checklists, document collection and access provisioning.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/features" className="btn-outline" style={{ fontSize: 13 }}>
                See all features <ChevronRight size={14}/>
              </Link>
            </div>
          </div>
        </section>

        {/* ── SA COMPLIANCE ─────────────────────────────────────────────── */}
        <section style={{ padding: '0 24px 120px' }}>
          <div className="container">
            <div style={{
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(15,15,17,0.9) 50%, rgba(201,168,76,0.04) 100%)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 28, padding: '64px 48px',
              textAlign: 'center', overflow: 'hidden',
            }}>
              {/* Decorative circle */}
              <div style={{
                position: 'absolute', top: -80, right: -80,
                width: 300, height: 300, borderRadius: '50%',
                border: '1px solid rgba(201,168,76,0.08)',
                pointerEvents: 'none',
              }}/>
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 200, height: 200, borderRadius: '50%',
                border: '1px solid rgba(201,168,76,0.06)',
                pointerEvents: 'none',
              }}/>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🇿🇦</div>
              <h2 style={{
                fontFamily: 'Instrument Serif', fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400, color: '#fff', marginBottom: 16, lineHeight: 1.1,
              }}>
                Not just HR software.<br/>
                <span className="gradient-text" style={{ fontStyle: 'italic' }}>South African HR software.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.7 }}>
                SARS PAYE tables, BCEA leave rules, UIF contributions and POPIA compliance are built in from day one.
                Not bolted on. Not an afterthought.
              </p>
              <div className="sa-compliance-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, maxWidth: 640, margin: '0 auto' }}>
                {[
                  { label: 'SARS PAYE',  desc: 'Correct tax tables, updated automatically' },
                  { label: 'BCEA Leave', desc: '21-day annual leave & all statutory types' },
                  { label: 'UIF & SDL',  desc: 'Auto-calculated on every payroll run' },
                  { label: 'POPIA',      desc: 'Data protection built into every feature' },
                ].map(b => (
                  <div key={b.label} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 14, padding: '20px 16px', textAlign: 'left',
                  }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#C9A84C', marginBottom: 6 }}>{b.label}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECURITY ──────────────────────────────────────────────────── */}
        <section style={{ padding: '0 24px 120px' }}>
          <div className="container">
            <div className="security-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              <div>
                <div className="tag" style={{ marginBottom: 20 }}>Security</div>
                <h2 style={{
                  fontFamily: 'Instrument Serif', fontSize: 'clamp(28px, 4vw, 44px)',
                  fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 20,
                }}>
                  Your employee data,<br/>
                  <span className="gradient-text" style={{ fontStyle: 'italic' }}>locked down tight</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
                  HR data is some of the most sensitive information your company holds.
                  Enterprise-grade security on every plan, not just the expensive ones.
                </p>
                <Link href="/security" className="btn-outline" style={{ fontSize: 13 }}>
                  View security details <ChevronRight size={14}/>
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { icon: Lock,     label: 'AES-256 Encryption',    desc: 'Sensitive fields encrypted at rest. TLS 1.2+ in transit.',    color: '#C9A84C' },
                  { icon: Eye,      label: 'Role-Based Access',      desc: 'Employees see only their own data. Granular admin permissions.', color: '#60A5FA' },
                  { icon: FileText, label: 'Complete Audit Trail',   desc: 'Every action logged with timestamp, user and IP address.',    color: '#34D399' },
                  { icon: Shield,   label: 'POPIA Compliance',       desc: "Built for South Africa's Protection of Personal Information Act.", color: '#F472B6' },
                  { icon: Database, label: 'Secure Document Vault',  desc: 'Encrypted storage for contracts, payslips and HR files.',    color: '#A78BFA' },
                ].map(s => (
                  <div key={s.label} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    background: '#0F0F11', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 14, padding: '16px 18px',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                      background: `${s.color}15`, border: `1px solid ${s.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <s.icon size={15} color={s.color}/>
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 3 }}>{s.label}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ───────────────────────────────────────────────────── */}
        <section style={{ padding: '0 24px 120px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="tag" style={{ marginBottom: 16 }}>Pricing</div>
              <h2 style={{
                fontFamily: 'Instrument Serif', fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 400, color: '#fff', marginBottom: 16,
              }}>Simple, honest pricing</h2>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 16 }}>
                Flat monthly rate via EFT. No hidden fees. No per-seat surprises.
              </p>
            </div>

            <div className="pricing-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, maxWidth: 900, margin: '0 auto 32px' }}>
              {[
                { name: 'Starter', price: 'Free', employees: '2 employees', badge: '',
                  features: ['Leave & attendance','Document storage','Employee self-service','Email support'],
                  cta: 'Start Free', href: `${APP}/register`, style: {} },
                { name: 'Professional', price: 'R599', employees: '20 employees', badge: '',
                  features: ['Everything in Starter','Full payroll & PAYE','Recruitment ATS','Org chart','Priority support'],
                  cta: 'Get Started', href: `${APP}/register`, style: {} },
                { name: 'SME', price: 'R1,999', employees: '100 employees', badge: 'Most Popular',
                  features: ['Everything in Professional','Advanced analytics','Asset management','Workflow automation','Dedicated support'],
                  cta: 'Get Started', href: `${APP}/register`,
                  style: { background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, #0F0F11 60%)', borderColor: 'rgba(201,168,76,0.25)' } },
              ].map(p => (
                <div key={p.name} className="plan-card" style={{ ...p.style, position: 'relative' }}>
                  {p.badge && (
                    <div style={{
                      position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                      background: '#C9A84C', color: '#000', fontSize: 10, fontWeight: 700,
                      padding: '3px 12px', borderRadius: 100, whiteSpace: 'nowrap',
                    }}>{p.badge}</div>
                  )}
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>{p.name}</div>
                    <div style={{ fontFamily: 'Instrument Serif', fontSize: 36, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{p.price}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>{p.employees} &middot; /month</div>
                  </div>
                  <ul style={{ listStyle: 'none', marginBottom: 24, flex: 1 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                        <Check size={12} color="#C9A84C" style={{ flexShrink: 0 }}/>{f}
                      </li>
                    ))}
                  </ul>
                  <a href={p.href} style={{
                    display: 'block', textAlign: 'center', padding: '11px',
                    borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: 'none',
                    background: p.badge ? '#C9A84C' : 'transparent',
                    color: p.badge ? '#000' : 'rgba(255,255,255,0.6)',
                    border: p.badge ? 'none' : '1px solid rgba(255,255,255,0.12)',
                    transition: 'all 0.2s',
                  }}>{p.cta}</a>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/pricing" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, textDecoration: 'none' }}>
                View all plans including Enterprise &amp; Core <ChevronRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }}/>
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS ─────────────────────────────────────────────────────── */}
        <div className="divider"/>
        <section style={{ padding: '64px 24px' }}>
          <div className="container">
            <div className="stats-four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { value: '100%', label: 'SA Compliant',   sub: 'SARS · BCEA · POPIA'   },
                { value: '99.5%',label: 'Uptime Target',  sub: 'Monthly SLA'             },
                { value: 'R30',  label: 'Per Employee',   sub: 'Professional plan / mo'  },
                { value: 'Free', label: 'To Start',       sub: 'Up to 2 employees'       },
              ].map(s => (
                <div key={s.label} style={{
                  textAlign: 'center', padding: '32px 16px',
                  background: '#0F0F11', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 16,
                }}>
                  <div style={{ fontFamily: 'Instrument Serif', fontSize: 44, color: '#C9A84C', lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="divider"/>

        {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
        <section className="section-pad">
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
              <div style={{
                position: 'absolute', inset: -2,
                background: 'linear-gradient(135deg, rgba(201,168,76,0.15), transparent, rgba(201,168,76,0.08))',
                borderRadius: 30, filter: 'blur(1px)',
              }}/>
              <div style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, #0F0F11 50%)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 28, padding: '72px 48px',
              }}>
                <h2 style={{
                  fontFamily: 'Instrument Serif', fontSize: 'clamp(32px, 5vw, 52px)',
                  fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: 20,
                }}>
                  Start managing your workforce<br/>
                  <span className="gradient-text" style={{ fontStyle: 'italic' }}>the smart way</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 16, marginBottom: 40 }}>
                  Join South African businesses already running on PeopleCore.
                </p>
                <a href={`${APP}/register`} className="btn-gold" style={{ fontSize: 15, padding: '14px 32px', boxShadow: '0 0 60px rgba(201,168,76,0.2)' }}>
                  Start Free Today <ArrowRight size={15}/>
                </a>
                <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
                  Free plan &middot; No credit card &middot; Setup in minutes
                </p>
              </div>
            </div>
          </div>
        </section>

      
        <style jsx global>{`
          /* Homepage responsive */
          @media (max-width: 900px) {
            .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
            .hero-mock-stats { grid-template-columns: repeat(2, 1fr) !important; }
            .sa-compliance-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .security-two-col { grid-template-columns: 1fr !important; }
            .pricing-three-col { grid-template-columns: 1fr !important; max-width: 400px !important; margin: 0 auto !important; }
            .stats-four-col { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .hero-stats { grid-template-columns: 1fr 1fr !important; }
            .hero-mock-stats { grid-template-columns: 1fr 1fr !important; }
            .sa-compliance-grid { grid-template-columns: 1fr 1fr !important; }
            .stats-four-col { grid-template-columns: 1fr 1fr !important; }
            .bento-grid { grid-template-columns: 1fr !important; }
            .bento-grid > div { grid-column: span 1 !important; }
          }
          @media (max-width: 480px) {
            .hero-cta-row { flex-direction: column !important; align-items: stretch !important; }
            .hero-cta-row a { text-align: center; justify-content: center; }
            .sa-compliance-grid { grid-template-columns: 1fr !important; }
            .stats-four-col { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </main>
      <Footer/>
    </>
  )
}
