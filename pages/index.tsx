import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  Users, Calculator, Calendar, Briefcase, UserCheck,
  Package, BarChart3, Zap, Shield, Lock, Eye, FileText,
  Database, ChevronRight, Check, Star, ArrowRight,
} from 'lucide-react'

const APP_URL = 'https://app.peoplecore.co.za'

const FEATURES = [
  { icon: Users,      title: 'Employee Management',    desc: 'Complete employee profiles, org charts, documents and employment history in one place.' },
  { icon: Calculator, title: 'Payroll & Payslips',     desc: 'SARS-compliant PAYE, UIF and SDL calculations with automated payslip generation.' },
  { icon: Calendar,   title: 'Leave & Attendance',     desc: 'BCEA-compliant leave policies, approval workflows and real-time attendance tracking.' },
  { icon: Briefcase,  title: 'Recruitment ATS',        desc: 'Post jobs, manage applications and track candidates through your hiring pipeline.' },
  { icon: UserCheck,  title: 'Onboarding Automation',  desc: 'Automate new hire checklists, document collection and system access provisioning.' },
  { icon: Package,    title: 'Asset Management',       desc: 'Track company assets assigned to employees with full audit trails.' },
  { icon: BarChart3,  title: 'HR Analytics',           desc: 'Headcount trends, leave patterns, payroll costs and workforce insights at a glance.' },
  { icon: Zap,        title: 'Workflow Automation',    desc: 'Trigger actions automatically based on HR events -- no manual follow-up required.' },
]

const SECURITY = [
  { icon: Shield,   title: 'POPIA-Ready',           desc: 'Built from the ground up for South African data protection law.' },
  { icon: Lock,     title: 'AES-256 Encryption',    desc: 'All sensitive data encrypted at rest and in transit with TLS 1.2+.' },
  { icon: Eye,      title: 'Role-Based Access',     desc: 'Employees only see their own data. Granular permissions for every role.' },
  { icon: FileText, title: 'Complete Audit Logs',   desc: 'Every action logged with timestamp, user and IP address.' },
  { icon: Database, title: 'Secure Document Store', desc: 'Encrypted document vault for contracts, payslips and compliance files.' },
]

const PLANS = [
  {
    name: 'Starter', price: 'Free', period: '',
    desc: 'Try PeopleCore with up to 2 employees at no cost.',
    color: 'border-white/10', badge: '',
    features: ['Up to 2 employees', 'Leave management', 'Attendance tracking', 'Document storage', 'Email support'],
    cta: 'Start Free', ctaStyle: 'border border-white/20 text-white hover:bg-white/5',
  },
  {
    name: 'Professional', price: 'R599', period: '/month',
    desc: 'HR & payroll for small SA businesses.',
    color: 'border-white/10', badge: '',
    features: ['Up to 20 employees', 'Full payroll & PAYE', 'Recruitment ATS', 'Org chart', 'Priority support'],
    cta: 'Get Started', ctaStyle: 'border border-white/20 text-white hover:bg-white/5',
  },
  {
    name: 'SME', price: 'R1,999', period: '/month',
    desc: 'The full platform for growing businesses.',
    color: 'border-gold/30', badge: 'Most Popular',
    features: ['Up to 100 employees', 'Everything in Professional', 'Advanced analytics', 'Asset management', 'Workflow automation'],
    cta: 'Get Started', ctaStyle: 'bg-gold text-black hover:bg-gold-light',
  },
],
    cta: 'Start Free', ctaStyle: 'border border-white/20 text-white hover:bg-white/5',
  },
  {
    name: 'Professional', price: 'R399', period: '/month',
    desc: 'Everything a growing SA business needs.',
    color: 'border-gold/30', badge: 'Most Popular',
    features: ['Up to 50 employees', 'Full payroll & PAYE', 'Recruitment ATS', 'Asset management', 'Onboarding & workflows', 'Priority support'],
    cta: 'Get Started', ctaStyle: 'bg-gold text-black hover:bg-gold-light',
  },
  {
    name: 'Enterprise', price: 'R1,299', period: '/month',
    desc: 'For established businesses with larger teams.',
    color: 'border-white/10', badge: '',
    features: ['Up to 300 employees', 'Advanced analytics', 'Multi-company support', 'Dedicated account manager', 'SLA guarantee'],
    cta: 'Get Started', ctaStyle: 'border border-white/20 text-white hover:bg-white/5',
  },
]

const INDUSTRIES = [
  'Professional Services', 'IT Companies', 'Accounting Firms',
  'Logistics', 'Construction', 'Corporate Offices',
]

export default function Home() {
  return (
    <>
      <Head>
        <title>PeopleCore -- HR & Payroll Software for South African Businesses</title>
        <meta name="description" content="Manage employees, payroll, leave, recruitment and compliance in one secure platform. Built specifically for South African SMEs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden noise">

          {/* Background orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[120px] animate-pulse" style={{ animationDuration: '4s' }}/>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}/>
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}/>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gold/20 bg-gold/5 text-gold text-[12px] font-medium px-4 py-1.5 rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"/>
              Built for South Africa · POPIA · BCEA · SARS Compliant
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
              HR & Payroll Software
              <br/>
              <span className="gold-gradient italic">Built for South African</span>
              <br/>
              Businesses
            </h1>

            <p className="text-[18px] text-white/40 max-w-2xl mx-auto leading-relaxed mb-10">
              Manage employees, payroll, leave, recruitment and compliance in one secure platform.
              Everything a South African SME needs -- nothing it doesn&apos;t.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href={`${APP_URL}/register`}
                className="flex items-center gap-2 bg-gold text-black font-semibold text-[15px] px-8 py-3.5 rounded-xl hover:bg-gold-light transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                Start Free -- No Credit Card
                <ArrowRight size={16}/>
              </a>
              <Link href="/features"
                className="flex items-center gap-2 border border-white/15 text-white/70 font-medium text-[15px] px-8 py-3.5 rounded-xl hover:border-white/30 hover:text-white transition-all">
                See All Features
                <ChevronRight size={16}/>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] text-white/25">
              {['SARS-compliant payroll', 'BCEA leave rules', 'POPIA data protection', 'No setup fees'].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <Check size={12} className="text-gold/60"/>
                  {t}
                </div>
              ))}
            </div>

            {/* App preview -- stylised mockup */}
            <div className="mt-20 relative max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-b from-gold/10 to-transparent rounded-2xl blur-xl"/>
              <div className="relative border border-white/10 rounded-2xl bg-[#111113] overflow-hidden shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0D0D0F]">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"/>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"/>
                  <div className="flex-1 mx-4 bg-white/[0.04] rounded-md py-1 px-3 text-[11px] text-white/20">
                    app.peoplecore.co.za/dashboard
                  </div>
                </div>
                {/* Dashboard mockup */}
                <div className="p-6 grid grid-cols-4 gap-4">
                  {[
                    { label: 'Total Employees', value: '47', color: 'text-blue-400' },
                    { label: 'On Leave Today',  value: '3',  color: 'text-amber-400' },
                    { label: 'Payroll This Month', value: 'R284,500', color: 'text-gold' },
                    { label: 'Open Positions',  value: '5',  color: 'text-green-400' },
                  ].map(s => (
                    <div key={s.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                      <div className="text-[11px] text-white/30 mb-1">{s.label}</div>
                      <div className={`text-[22px] font-bold ${s.color} font-display`}>{s.value}</div>
                    </div>
                  ))}
                  {/* Table preview */}
                  <div className="col-span-4 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
                    <div className="text-[11px] text-white/30 mb-3">Recent Employees</div>
                    <div className="space-y-2">
                      {[
                        ['Sarah M.', 'Senior Developer', 'Active', 'text-green-400'],
                        ['James K.', 'Project Manager',  'Active', 'text-green-400'],
                        ['Thabo N.', 'HR Coordinator',   'On Leave','text-amber-400'],
                      ].map(([name, role, status, color]) => (
                        <div key={name as string} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-[11px] text-gold font-bold">{(name as string)[0]}</div>
                            <div>
                              <div className="text-[12px] font-medium text-white">{name as string}</div>
                              <div className="text-[10px] text-white/30">{role as string}</div>
                            </div>
                          </div>
                          <span className={`text-[10px] font-semibold ${color as string}`}>{status as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Industries strip ─────────────────────────────────────────── */}
        <section className="border-y border-white/[0.05] bg-white/[0.01] py-5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              <span className="text-[11px] text-white/20 uppercase tracking-widest font-medium">Trusted by</span>
              {INDUSTRIES.map(i => (
                <span key={i} className="text-[13px] text-white/30 font-medium">{i}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────────── */}
        <section id="features" className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block text-[11px] font-bold text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Platform</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Everything HR, in one place
              </h2>
              <p className="text-[16px] text-white/35 max-w-xl mx-auto">
                Stop juggling spreadsheets and separate tools. PeopleCore brings your entire HR function into one connected platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURES.map((f, i) => (
                <div key={f.title}
                  className="group card-border rounded-2xl p-6 hover:border-gold/20 hover:bg-gold/[0.02] transition-all duration-300 cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <f.icon size={18} className="text-gold"/>
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-[13px] text-white/35 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/features"
                className="inline-flex items-center gap-2 text-[13px] text-gold/70 hover:text-gold transition-colors">
                Explore all features <ChevronRight size={14}/>
              </Link>
            </div>
          </div>
        </section>

        {/* ── SA Specific callout ──────────────────────────────────────── */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent">
          <div className="max-w-5xl mx-auto">
            <div className="gold-border rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 shimmer pointer-events-none"/>
              <div className="relative">
                <div className="text-5xl mb-6">🇿🇦</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Built specifically for <span className="gold-gradient">South Africa</span>
                </h2>
                <p className="text-[15px] text-white/40 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Unlike generic global HR tools, PeopleCore is built from the ground up for SA compliance.
                  SARS PAYE tables, BCEA leave calculations, UIF contributions and POPIA data protection -- all built in, not bolted on.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'SARS PAYE',  desc: 'Correct tax tables' },
                    { label: 'UIF & SDL',  desc: 'Auto-calculated'    },
                    { label: 'BCEA Leave', desc: '21 days & rules'    },
                    { label: 'POPIA',      desc: 'Data protection'    },
                  ].map(b => (
                    <div key={b.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                      <div className="text-[15px] font-bold text-gold mb-1">{b.label}</div>
                      <div className="text-[12px] text-white/30">{b.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Security ─────────────────────────────────────────────────── */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block text-[11px] font-bold text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-6 uppercase tracking-wider">Security</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  Your employee data,
                  <br/>
                  <span className="gold-gradient italic">locked down tight</span>
                </h2>
                <p className="text-[15px] text-white/40 leading-relaxed mb-8">
                  HR data is some of the most sensitive information your company holds.
                  We take security seriously with enterprise-grade protection on every plan.
                </p>
                <Link href="/security"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-gold border border-gold/30 px-5 py-2.5 rounded-xl hover:bg-gold/5 transition-colors">
                  View security details <ChevronRight size={14}/>
                </Link>
              </div>
              <div className="space-y-3">
                {SECURITY.map(s => (
                  <div key={s.title} className="flex items-start gap-4 card-border rounded-2xl p-5 hover:border-gold/15 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <s.icon size={16} className="text-gold"/>
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-white mb-1">{s.title}</div>
                      <div className="text-[12px] text-white/35 leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────────────────── */}
        <section id="pricing" className="py-28 px-6 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block text-[11px] font-bold text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Pricing</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-[16px] text-white/35">
                No hidden fees. No per-employee surprises. Pay monthly via EFT.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {PLANS.map(plan => (
                <div key={plan.name}
                  className={`relative rounded-2xl border p-8 flex flex-col ${plan.color} ${plan.badge ? 'bg-gold/[0.03]' : 'bg-white/[0.01]'}`}>
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-black bg-gold px-4 py-1 rounded-full">
                      {plan.badge}
                    </div>
                  )}
                  <div className="mb-6">
                    <div className="text-[14px] font-semibold text-white mb-1">{plan.name}</div>
                    <div className="flex items-end gap-1 mb-2">
                      <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && <span className="text-white/30 text-[14px] mb-1">{plan.period}</span>}
                    </div>
                    <div className="text-[12px] text-white/30">{plan.desc}</div>
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] text-white/50">
                        <Check size={13} className="text-gold mt-0.5 flex-shrink-0"/>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={`${APP_URL}/register`}
                    className={`w-full py-3 rounded-xl text-[13px] font-semibold text-center transition-all ${plan.ctaStyle}`}>
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-[12px] text-white/20 mt-8">
              All plans paid monthly via EFT · Cancel anytime · VAT excluded
            </p>
          </div>
        </section>

        {/* ── Trust section ────────────────────────────────────────────── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { value: '100%', label: 'SA Compliant',     sub: 'SARS · BCEA · POPIA' },
                { value: '99.5%', label: 'Uptime Target',    sub: 'Monthly SLA'         },
                { value: '< 1min', label: 'Avg Setup Time',   sub: 'Per employee'        },
                { value: 'Free',  label: 'Starter Plan',     sub: 'Up to 10 employees'  },
              ].map(s => (
                <div key={s.label} className="card-border rounded-2xl p-6">
                  <div className="font-display text-3xl font-bold text-gold mb-1">{s.value}</div>
                  <div className="text-[13px] font-semibold text-white mb-0.5">{s.label}</div>
                  <div className="text-[11px] text-white/25">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────────── */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/[0.05] rounded-3xl blur-3xl"/>
              <div className="relative gold-border rounded-3xl p-14">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  Start managing your workforce
                  <br/>
                  <span className="gold-gradient italic">the smart way</span>
                </h2>
                <p className="text-[16px] text-white/35 mb-10 max-w-lg mx-auto">
                  Join South African businesses already using PeopleCore to simplify their HR and payroll.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={`${APP_URL}/register`}
                    className="flex items-center gap-2 bg-gold text-black font-semibold text-[15px] px-10 py-4 rounded-xl hover:bg-gold-light transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.25)]">
                    Start Free Today
                    <ArrowRight size={16}/>
                  </a>
                </div>
                <p className="mt-5 text-[12px] text-white/20">Free plan · No credit card · Setup in minutes</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
