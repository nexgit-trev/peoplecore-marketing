import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Users, Calculator, Calendar, Briefcase, UserCheck, Package, BarChart3, Zap, Check, ArrowRight } from 'lucide-react'

const APP_URL = 'https://app.peoplecore.co.za'

const MODULES = [
  {
    icon: Users, title: 'Employee Management', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    desc: 'A complete record of every employee from day one to their last.',
    features: ['Employee profiles with full employment history','Org chart with reporting lines','Document vault (contracts, IDs, certificates)','Custom fields for your business needs','Employment status tracking','Role & department management'],
  },
  {
    icon: Calculator, title: 'Payroll & Payslips', color: 'text-gold bg-gold/10 border-gold/20',
    desc: 'SARS-compliant payroll that does the hard work for you.',
    features: ['PAYE tax calculations (2024/25 tables)','UIF and SDL contributions','Automated payslip generation & distribution','Multiple pay frequencies','Payroll journal exports','SARS EMP201 report'],
  },
  {
    icon: Calendar, title: 'Leave & Attendance', color: 'text-green-400 bg-green-500/10 border-green-500/20',
    desc: 'BCEA-compliant leave management with zero manual tracking.',
    features: ['BCEA annual leave (21 days)','Sick, family responsibility, maternity leave','Multi-level approval workflows','Real-time leave calendar','Attendance tracking','Leave balance reporting'],
  },
  {
    icon: Briefcase, title: 'Recruitment ATS', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    desc: 'From job post to offer letter in one system.',
    features: ['Job posting management','Kanban candidate pipeline','CV & document collection','Interview scheduling','Offer letter generation','Candidate communication history'],
  },
  {
    icon: UserCheck, title: 'Onboarding Automation', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    desc: 'Get new hires up to speed without the admin headache.',
    features: ['Automated onboarding checklists','Document collection workflows','New hire self-service portal','Task assignment to HR and managers','Email notifications at each step','Onboarding completion tracking'],
  },
  {
    icon: Package, title: 'Asset Management', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    desc: 'Know exactly what company property is where.',
    features: ['Asset registry by category','Employee assignment & history','Check-in / check-out logging','Asset condition tracking','Return workflow on resignation','Full audit trail'],
  },
  {
    icon: BarChart3, title: 'HR Analytics', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    desc: 'Data-driven insights for better workforce decisions.',
    features: ['Headcount & growth trends','Leave pattern analysis','Payroll cost breakdown','Turnover & retention metrics','Department-level reports','Export to Excel / PDF'],
  },
  {
    icon: Zap, title: 'Workflow Automation', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    desc: 'Automate repetitive HR tasks so your team can focus on people.',
    features: ['Event-based trigger rules','Email & notification actions','Multi-step approval chains','Probation & contract reminders','Custom workflow builder','Audit log of all automations'],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Head><title>Features -- PeopleCore HR & Payroll</title></Head>
      <Nav/>
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block text-[11px] font-bold text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">All Features</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              One platform.<br/><span className="gold-gradient italic">Every HR function.</span>
            </h1>
            <p className="text-[17px] text-white/35 max-w-xl mx-auto">
              Stop switching between tools. PeopleCore covers your entire HR operation -- built for South African businesses.
            </p>
          </div>
          <div className="space-y-6">
            {MODULES.map((m, i) => (
              <div key={m.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center card-border rounded-3xl p-10 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center gap-2.5 border px-3 py-1.5 rounded-full mb-5 ${m.color}`}>
                    <m.icon size={14}/>
                    <span className="text-[12px] font-semibold">{m.title}</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white mb-3">{m.desc}</h2>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {m.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] text-white/50">
                        <Check size={13} className="text-gold mt-0.5 flex-shrink-0"/>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href={`${APP_URL}/register`}
              className="inline-flex items-center gap-2 bg-gold text-black font-semibold text-[15px] px-10 py-4 rounded-xl hover:bg-gold-light transition-all">
              Start Free Today <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
