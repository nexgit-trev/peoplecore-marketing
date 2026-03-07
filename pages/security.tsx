import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Shield, Lock, Eye, FileText, Database, Key, Server, AlertTriangle, ArrowRight } from 'lucide-react'

const APP_URL = 'https://app.peoplecore.co.za'

const ITEMS = [
  { icon: Lock,          title: 'AES-256 Encryption',       desc: 'All sensitive fields (ID numbers, banking details, salary data) are encrypted at rest using AES-256. TLS 1.2+ for all data in transit.' },
  { icon: Key,           title: 'bcrypt Password Hashing',  desc: 'Passwords are never stored in plain text. We use bcrypt with salt rounds -- industry standard for password security.' },
  { icon: Eye,           title: 'Role-Based Access Control',desc: 'Every user only sees what they are authorised to see. Employees access their own records only. Admins see what you grant them.' },
  { icon: FileText,      title: 'Complete Audit Trail',     desc: 'Every action in the system is logged with timestamp, user identity and IP address. Full accountability at all times.' },
  { icon: Shield,        title: 'POPIA Compliance',         desc: "Built for South Africa's Protection of Personal Information Act. We are the Operator -- you are the Responsible Party." },
  { icon: Database,      title: 'Secure Document Vault',    desc: 'Employee contracts, payslips and HR documents stored in an encrypted vault. Access controlled by role and permission.' },
  { icon: Server,        title: 'JWT Authentication',       desc: '15-minute access tokens with refresh token rotation. Sessions can be revoked at any time by administrators.' },
  { icon: AlertTriangle, title: 'Breach Response',          desc: 'In the event of a breach, we notify the Information Regulator within 72 hours and affected parties without undue delay.' },
]

export default function SecurityPage() {
  return (
    <>
      <Head><title>Security -- PeopleCore HR &amp; Payroll</title></Head>
      <Nav/>
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-[11px] font-bold text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Security</div>
            <h1 className="font-display text-5xl font-bold text-white mb-4">
              Enterprise-grade security<br/><span className="gold-gradient italic">on every plan</span>
            </h1>
            <p className="text-[16px] text-white/35 max-w-xl mx-auto">
              HR data is sensitive. We protect it with the same rigour as a bank -- not as an afterthought, but as a foundation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {ITEMS.map(s => (
              <div key={s.title} className="card-border rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <s.icon size={17} className="text-gold"/>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white mb-1.5">{s.title}</div>
                  <div className="text-[13px] text-white/35 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="gold-border rounded-3xl p-10 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-3">Read our full POPIA statement</h2>
            <p className="text-[14px] text-white/35 mb-6 max-w-lg mx-auto">
              Full details of how we collect, process and protect personal information under South African law.
            </p>
            <a href={`${APP_URL}/legal/popia`} className="inline-flex items-center gap-2 border border-gold/30 text-gold font-semibold text-[13px] px-6 py-3 rounded-xl hover:bg-gold/5 transition-colors">
              View POPIA Compliance <ArrowRight size={14}/>
            </a>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
