import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import Home from './pages/public/Home';
import PesertaForm from './pages/public/PesertaForm';
import AdminDashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="evaluasi/peserta" element={<PesertaForm />} />
          <Route path="evaluasi/pendamping" element={<div className="container mt-8 text-center">Form Pendamping (WIP)</div>} />
          <Route path="evaluasi/muallim" element={<div className="container mt-8 text-center">Form Muallim (WIP)</div>} />
          <Route path="evaluasi/panitia" element={<div className="container mt-8 text-center">Form Panitia (WIP)</div>} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="evaluasi/peserta" element={<div>Data Evaluasi Peserta</div>} />
          <Route path="evaluasi/pendamping" element={<div>Data Evaluasi Pendamping</div>} />
          <Route path="kritik-saran" element={<div>Kritik & Saran</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
