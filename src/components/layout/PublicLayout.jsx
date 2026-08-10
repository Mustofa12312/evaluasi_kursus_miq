import { Outlet, Link } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <>
      <nav className="navbar">
        <div className="container navbar-content">
          <Link to="/" className="navbar-brand">
            Evaluasi<span>Kursus</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/admin" className="btn btn-outline text-sm">Admin Area</Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} Sistem Evaluasi Kursus Tartil Al-Qur'an se-Madura. All rights reserved.</p>
        <p className="mt-1 text-sm text-muted">Public Evaluation, Private Analysis.</p>
      </footer>
    </>
  );
}
