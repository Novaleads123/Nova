import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  LayoutDashboard,
  Search,
  Users,
  Building2,
  Mail,
  CreditCard,
  Settings,
  Bell,
  ChevronDown,
  MoreHorizontal,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Plus,
  Menu,
  X,
  Check,
} from 'lucide-react'
import './styles.css'

const navigation = [
  { name: 'Overview', icon: LayoutDashboard },
  { name: 'Lead Search', icon: Search },
  { name: 'Leads', icon: Users, badge: '148' },
  { name: 'Companies', icon: Building2 },
  { name: 'Outreach', icon: Mail },
]

const leads = [
  { name: 'Tunde Bakare', role: 'Founder & CEO', company: 'SolarEase Africa', location: 'Lagos, Nigeria', score: 96, status: 'Hot', initials: 'TB', color: '#7c5cfc' },
  { name: 'Amina Yusuf', role: 'Head of Growth', company: 'FinSavvy', location: 'Nairobi, Kenya', score: 92, status: 'Hot', initials: 'AY', color: '#ea8b48' },
  { name: 'Samuel Mensah', role: 'Managing Director', company: 'Kumasi Tech Hub', location: 'Accra, Ghana', score: 88, status: 'Warm', initials: 'SM', color: '#3aa6a6' },
  { name: 'Zanele Dlamini', role: 'Marketing Director', company: 'BrightWorks SA', location: 'Johannesburg, SA', score: 84, status: 'Warm', initials: 'ZD', color: '#e5a13d' },
]

function Sidebar({ open, setOpen }) {
  const [active, setActive] = useState('Overview')

  return (
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand">
        <div className="brand-mark">N</div>
        <span>NOVA</span>
        <button className="mobile-close" onClick={() => setOpen(false)}><X size={20} /></button>
      </div>

      <nav className="nav">
        <p className="nav-label">Workspace</p>
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.name}
              className={`nav-item ${active === item.name ? 'active' : ''}`}
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
        <button className="nav-item"><CreditCard size={18} /><span>Billing</span></button>
        <button className="nav-item"><Settings size={18} /><span>Settings</span></button>
        <div className="profile">
          <div className="profile-avatar">NO</div>
          <div className="profile-copy"><strong>Novaleads</strong><span>Free workspace</span></div>
          <MoreHorizontal size={18} />
        </div>
      </div>
    </aside>
  )
}

function StatCard({ label, value, change, icon: Icon, tone }) {
  return (
    <article className="stat-card">
      <div className="stat-head"><span>{label}</span><div className={`stat-icon ${tone}`}><Icon size={17} /></div></div>
      <div className="stat-value">{value}</div>
      <div className="stat-change"><TrendingUp size={14} /> <strong>{change}</strong><span> from last month</span></div>
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
          <button className="menu-button" onClick={() => setSidebarOpen(true)}><Menu size={21} /></button>
          <div className="topbar-actions">
            <button className="credits"><span className="credit-dot" /> 240 credits <ChevronDown size={14} /></button>
            <button className="icon-button" aria-label="Notifications"><Bell size={18} /><span className="notification-dot" /></button>
          </div>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div><p className="eyebrow">MONDAY, 18 NOVEMBER</p><h1>Good morning, Novaleads</h1></div>
            <button className="primary-button"><Plus size={18} /> Find new leads</button>
          </section>

          <section className="stats-grid">
            <StatCard label="Total leads" value="148" change="12.5%" icon={Users} tone="purple" />
            <StatCard label="Qualified leads" value="86" change="8.2%" icon={Check} tone="green" />
            <StatCard label="Companies" value="64" change="6.4%" icon={Building2} tone="orange" />
            <StatCard label="Outreach sent" value="42" change="18.7%" icon={Mail} tone="blue" />
          </section>

          <section className="dashboard-grid">
            <article className="panel pipeline-panel">
              <div className="panel-header"><div><p className="panel-kicker">Pipeline</p><h2>Lead overview</h2></div><button className="period-button">This month <ChevronDown size={14} /></button></div>
              <div className="pipeline">
                <div className="pipeline-number"><strong>148</strong><span>Total leads</span></div>
                <div className="pipeline-chart">
                  {[68, 82, 54, 92, 44, 72, 88, 58, 96, 76].map((height, index) => <div className="bar-wrap" key={index}><div className="bar" style={{ height: `${height}%` }} /></div>)}
                </div>
              </div>
              <div className="pipeline-legend"><span><i className="legend-new" /> New</span><span><i className="legend-contacted" /> Contacted</span><span><i className="legend-qualified" /> Qualified</span></div>
            </article>

            <article className="panel activity-panel">
              <div className="panel-header"><div><p className="panel-kicker">Recent</p><h2>AI activity</h2></div><button className="text-button">View all</button></div>
              <div className="activity-list">
                <div className="activity-item"><div className="activity-icon purple"><Sparkles size={16} /></div><div><strong>Lead search completed</strong><span>24 qualified prospects found</span></div><time>12m</time></div>
                <div className="activity-item"><div className="activity-icon green"><Mail size={16} /></div><div><strong>Outreach generated</strong><span>For SolarEase Africa</span></div><time>1h</time></div>
                <div className="activity-item"><div className="activity-icon orange"><Building2 size={16} /></div><div><strong>Company enriched</strong><span>FinSavvy profile updated</span></div><time>3h</time></div>
              </div>
            </article>
          </section>

          <section className="panel table-panel">
            <div class="panel-header">
              <div><p className="panel-kicker">Saved prospects</p><h2>Top leads</h2></div>
              <button className="text-button">View all leads <ArrowUpRight size={15} /></button>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Prospect</th><th>Company</th><th>Location</th><th>Lead score</th><th>Status</th><th /></tr></thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.name}><td><div className="person"><div className="avatar" style={{ background: lead.color }}>{lead.initials}</div><div><strong>{lead.name}</strong><span>{lead.role}</span></div></div></td><td>{lead.company}</td><td>{lead.location}</td><td><div className="score"><span>{lead.score}</span><div className="score-track"><i style={{ width: `${lead.score}%` }} /></div></div></td><td><span className={`status ${lead.status.toLowerCase()}`}>{lead.status}</span></td><td><button className="row-menu"><MoreHorizontal size={17} /></button></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
