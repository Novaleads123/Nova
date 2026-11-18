import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  LayoutDashboard,
  Search,
  UsersRound,
  Building2,
  Send,
  CreditCard,
  Settings2,
  Bell,
  ChevronDown,
  MoreHorizontal,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Plus,
  Menu,
  X,
  BadgeCheck,
  MapPin,
  ArrowDownRight,
} from 'lucide-react'
import './styles.css'

const navigation = [
  { name: 'Overview', icon: LayoutDashboard },
  { name: 'Lead Search', icon: Search },
  { name: 'Leads', icon: UsersRound, badge: '148' },
  { name: 'Companies', icon: Building2 },
  { name: 'Outreach', icon: Send },
]

const leads = [
  { name: 'Tunde Bakare', role: 'Founder & CEO', company: 'SolarEase Africa', location: 'Lagos, Nigeria', score: 96, status: 'Hot', initials: 'TB' },
  { name: 'Amina Yusuf', role: 'Head of Growth', company: 'FinSavvy', location: 'Nairobi, Kenya', score: 92, status: 'Hot', initials: 'AY' },
  { name: 'Samuel Mensah', role: 'Managing Director', company: 'Kumasi Tech Hub', location: 'Accra, Ghana', score: 88, status: 'Warm', initials: 'SM' },
  { name: 'Zanele Dlamini', role: 'Marketing Director', company: 'BrightWorks SA', location: 'Johannesburg, SA', score: 84, status: 'Warm', initials: 'ZD' },
]

function Sidebar({ open, setOpen }) {
  const [active, setActive] = useState('Overview')

  return (
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand">
        <div className="brand-mark" aria-hidden="true"><span /></div>
        <div className="brand-name">nova<span>.</span><small>LEADS</small></div>
        <button className="mobile-close" aria-label="Close navigation" onClick={() => setOpen(false)}><X size={19} /></button>
      </div>

      <nav className="nav" aria-label="Main navigation">
        <p className="nav-label">Workspace</p>
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.name}
              className={`nav-item ${active === item.name ? 'active' : ''}`}
              aria-current={active === item.name ? 'page' : undefined}
              onClick={() => { setActive(item.name); setOpen(false) }}
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{item.name}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </button>
          )
        })}
      </nav>

      <div className="sidebar-bottom">
        <button className="nav-item"><CreditCard size={18} strokeWidth={1.8} /><span>Billing</span></button>
        <button className="nav-item"><Settings2 size={18} strokeWidth={1.8} /><span>Settings</span></button>
        <div className="profile">
          <div className="profile-avatar">N</div>
          <div className="profile-copy"><strong>Novaleads</strong><span>Free workspace</span></div>
          <MoreHorizontal size={19} />
        </div>
      </div>
    </aside>
  )
}

function StatCard({ label, value, change, icon: Icon, tone }) {
  return (
    <article className="stat-card">
      <div className="stat-head"><span>{label}</span><div className={`stat-icon ${tone}`}><Icon size={18} strokeWidth={1.8} /></div></div>
      <div className="stat-value">{value}</div>
      <div className="stat-change"><TrendingUp size={13} strokeWidth={2} /><strong>{change}</strong><span> vs last month</span></div>
    </article>
  )
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-shell">
      {sidebarOpen && <button className="backdrop" aria-label="Close menu" onClick={() => setSidebarOpen(false)} />}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <main className="main">
        <header className="topbar">
          <button className="menu-button" aria-label="Open navigation" onClick={() => setSidebarOpen(true)}><Menu size={21} /></button>
          <div className="breadcrumbs">Workspace <span>/</span> Overview</div>
          <div className="topbar-actions">
            <button className="credits"><span className="credit-symbol">✳</span> 240 credits <ChevronDown size={14} /></button>
            <button className="icon-button" aria-label="Notifications"><Bell size={18} strokeWidth={1.8} /><span className="notification-dot" /></button>
          </div>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div><p className="eyebrow"><span className="eyebrow-line" /> MONDAY, 18 NOVEMBER</p><h1>Good morning, Novaleads</h1><p className="welcome-subtitle">Here’s what’s happening with your leads today.</p></div>
            <button className="primary-button"><Plus size={17} strokeWidth={2.2} /> Find new leads</button>
          </section>

          <section className="stats-grid" aria-label="Lead metrics">
            <StatCard label="Total leads" value="148" change="12.5%" icon={UsersRound} tone="teal" />
            <StatCard label="Qualified leads" value="86" change="8.2%" icon={BadgeCheck} tone="green" />
            <StatCard label="Companies" value="64" change="6.4%" icon={Building2} tone="sand" />
            <StatCard label="Outreach sent" value="42" change="18.7%" icon={Send} tone="blue" />
          </section>

          <section className="dashboard-grid">
            <article className="panel pipeline-panel">
              <div className="panel-header"><div><p className="panel-kicker">PIPELINE</p><h2>Lead overview</h2></div><button className="period-button">This month <ChevronDown size={14} /></button></div>
              <div className="pipeline">
                <div className="pipeline-number"><strong>148</strong><span>Total leads</span><div className="pipeline-delta"><TrendingUp size={12} /> 12.5%</div></div>
                <div className="pipeline-chart" aria-label="Lead activity trend">
                  {[38, 55, 45, 70, 52, 62, 46, 79, 64, 92, 72, 84].map((height, index) => <div className="bar-wrap" key={index}><div className={`bar ${index === 9 ? 'bar-highlight' : ''}`} style={{ height: `${height}%` }} /></div>)}
                </div>
              </div>
              <div className="pipeline-legend"><span><i className="legend-new" /> New</span><span><i className="legend-contacted" /> Contacted</span><span><i className="legend-qualified" /> Qualified</span></div>
            </article>

            <article className="panel activity-panel">
              <div className="panel-header"><div><p className="panel-kicker">YOUR WORKSPACE</p><h2>Recent activity</h2></div><button className="text-button">View all</button></div>
              <div className="activity-list">
                <div className="activity-item"><div className="activity-icon teal"><Search size={16} strokeWidth={1.8} /></div><div><strong>Lead search completed</strong><span>24 prospects found in Lagos</span></div><time>12m</time></div>
                <div className="activity-item"><div className="activity-icon green"><Send size={16} strokeWidth={1.8} /></div><div><strong>Outreach draft created</strong><span>For SolarEase Africa</span></div><time>1h</time></div>
                <div className="activity-item"><div className="activity-icon sand"><Building2 size={16} strokeWidth={1.8} /></div><div><strong>Company profile updated</strong><span>FinSavvy · Nairobi</span></div><time>3h</time></div>
              </div>
            </article>
          </section>

          <section className="panel table-panel">
            <div className="panel-header">
              <div><p className="panel-kicker">YOUR PROSPECTS</p><h2>Top leads</h2></div>
              <button className="text-button">View all leads <ArrowUpRight size={15} /></button>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Prospect</th><th>Company</th><th>Location</th><th>Lead score</th><th>Status</th><th><span className="sr-only">Actions</span></th></tr></thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr key={lead.name}><td><div className="person"><div className={`avatar avatar-${index}`}>{lead.initials}</div><div><strong>{lead.name}</strong><span>{lead.role}</span></div></div></td><td className="company-cell">{lead.company}</td><td><span className="location"><MapPin size={13} />{lead.location}</span></td><td><div className="score"><span>{lead.score}</span><div className="score-track"><i style={{ width: `${lead.score}%` }} /></div></div></td><td><span className={`status ${lead.status.toLowerCase()}`}><i />{lead.status}</span></td><td><button className="row-menu" aria-label={`More actions for ${lead.name}`}><MoreHorizontal size={18} /></button></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-footer"><span>Showing <strong>4</strong> of <strong>148</strong> leads</span><button>See all leads <ArrowUpRight size={14} /></button></div>
          </section>

          <footer className="page-footer"><span>Nova Leads</span><span>Built for better conversations.</span></footer>
        </div>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
