export default function AdminDashboard() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-display mb-2">Dashboard Evaluasi</h1>
      <p className="text-muted mb-8">Ringkasan data evaluasi akan ditampilkan di sini.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="glass-panel text-center p-6">
          <h3 className="text-4xl text-primary font-bold mb-2">0</h3>
          <p className="text-sm text-muted">Total Responden</p>
        </div>
        <div className="glass-panel text-center p-6">
          <h3 className="text-4xl text-primary font-bold mb-2">0.0</h3>
          <p className="text-sm text-muted">Rata-rata Kepuasan</p>
        </div>
      </div>
    </div>
  );
}
