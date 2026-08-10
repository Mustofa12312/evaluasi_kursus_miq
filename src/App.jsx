import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/layout/ProtectedRoute';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import Home from './pages/public/Home';
import PesertaForm from './pages/public/PesertaForm';
import PendampingForm from './pages/public/PendampingForm';
import MuallimForm from './pages/public/MuallimForm';
import PanitiaForm from './pages/public/PanitiaForm';
import NotFound from './pages/public/NotFound';
import Login from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import EvaluasiList from './pages/admin/EvaluasiList';
import KritikSaran from './pages/admin/KritikSaran';
import Analisis from './pages/admin/Analisis';
import ActionPlan from './pages/admin/ActionPlan';
import MasterPertanyaan from './pages/admin/MasterPertanyaan';
import MasterData from './pages/admin/MasterData';
import { PeriodProvider } from './context/PeriodContext';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <PeriodProvider>
        <Router>
          <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="evaluasi/peserta" element={<PesertaForm />} />
            <Route path="evaluasi/pendamping" element={<PendampingForm />} />
            <Route path="evaluasi/muallim" element={<MuallimForm />} />
            <Route path="evaluasi/panitia" element={<PanitiaForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin Login Route */}
          <Route path="/admin/login" element={<Login />} />

          {/* Admin Protected Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="evaluasi/peserta" element={<EvaluasiList role="peserta" title="Peserta" />} />
            <Route path="evaluasi/pendamping" element={<EvaluasiList role="pendamping" title="Pendamping" />} />
            <Route path="evaluasi/muallim" element={<EvaluasiList role="muallim" title="Muallim" />} />
            <Route path="evaluasi/panitia" element={<EvaluasiList role="panitia" title="Panitia" />} />
            <Route path="kritik-saran" element={<KritikSaran />} />
            <Route path="analisis" element={<Analisis />} />
            <Route path="master-pertanyaan" element={<MasterPertanyaan />} />
            <Route path="master-data" element={<MasterData />} />
            <Route path="action-plan" element={<ActionPlan />} />
          </Route>
        </Routes>
        </Router>
        </PeriodProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
