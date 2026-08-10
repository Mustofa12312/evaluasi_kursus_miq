import { Outlet, Link } from 'react-router-dom';
import { Shield, Home, LayoutDashboard, Users, UserCheck, MessageSquare } from 'lucide-react';

export default function AdminLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar - Simple inline styles since it's just admin */}
      <aside style={{ width: '250px', backgroundColor: 'var(--color-surface)', borderRight: '1px solid var(--color-border)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
        <div className="navbar-brand mb-8">
          <Shield size={24} color="var(--color-primary)" /> Admin<span>Area</span>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <Link to="/admin" className="btn btn-outline" style={{ justifyContent: 'flex-start' }}><LayoutDashboard size={18} /> Dashboard</Link>
          <Link to="/admin/evaluasi/peserta" className="btn btn-outline" style={{ justifyContent: 'flex-start' }}><Users size={18} /> Evaluasi Peserta</Link>
          <Link to="/admin/evaluasi/pendamping" className="btn btn-outline" style={{ justifyContent: 'flex-start' }}><UserCheck size={18} /> Ev. Pendamping</Link>
          <Link to="/admin/kritik-saran" className="btn btn-outline" style={{ justifyContent: 'flex-start' }}><MessageSquare size={18} /> Kritik & Saran</Link>
        </nav>

        <Link to="/" className="btn btn-outline mt-auto" style={{ justifyContent: 'flex-start' }}><Home size={18} /> Kembali ke Publik</Link>
      </aside>

      {/* Main Admin Content */}
      <main style={{ flex: 1, padding: '2rem', backgroundColor: 'var(--color-background)' }}>
        <div className="container" style={{ maxWidth: '100%' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
