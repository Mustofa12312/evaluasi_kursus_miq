import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/layout/ProtectedRoute';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import Home from './pages/public/Home';
import PesertaForm from './pages/public/PesertaForm';
import PendampingForm from './pages/public/PendampingForm';
import MuallimForm from './pages/public/MuallimForm';
import PanitiaForm from './pages/public/PanitiaForm';
import Login from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import EvaluasiPeserta from './pages/admin/EvaluasiPeserta';
import KritikSaran from './pages/admin/KritikSaran';
import Analisis from './pages/admin/Analisis';
import ActionPlan from './pages/admin/ActionPlan';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="evaluasi/peserta" element={<PesertaForm />} />
            <Route path="evaluasi/pendamping" element={<PendampingForm />} />
            <Route path="evaluasi/muallim" element={<MuallimForm />} />
            <Route path="evaluasi/panitia" element={<PanitiaForm />} />
          </Route>

          {/* Admin Login Route */}
          <Route path="/admin/login" element={<Login />} />

          {/* Admin Protected Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="evaluasi/peserta" element={<EvaluasiPeserta />} />
            <Route path="evaluasi/pendamping" element={<div className="py-12 text-center text-muted">Data Evaluasi Pendamping (WIP)</div>} />
            <Route path="kritik-saran" element={<KritikSaran />} />
            <Route path="analisis" element={<Analisis />} />
            <Route path="action-plan" element={<ActionPlan />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
