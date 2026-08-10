export default function SelectCard({ options, selectedId, onSelect, title, loading }) {
  if (loading) {
    return (
      <div className="animate-fade-in text-center py-8 text-muted">
        <p>Memuat data...</p>
      </div>
    );
  }

  if (!options || options.length === 0) {
    return (
      <div className="animate-fade-in text-center py-8 text-muted">
        <p>Tidak ada data tersedia.</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {title && <h3 className="text-xl mb-4 font-semibold">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((opt) => {
          const isSelected = selectedId === opt.id;
          return (
            <div
              key={opt.id}
              onClick={() => onSelect(opt.id, opt)}
              className={`glass-card flex flex-col p-4 border-2 transition-all ${
                isSelected 
                  ? 'border-primary bg-[rgba(16,185,129,0.1)] shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                  : 'border-transparent hover:border-[rgba(255,255,255,0.1)]'
              }`}
            >
              <h4 className={`text-lg font-medium ${isSelected ? 'text-primary' : ''}`}>
                {opt.name}
              </h4>
              {opt.desc && <p className="text-sm text-muted mt-1">{opt.desc}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
