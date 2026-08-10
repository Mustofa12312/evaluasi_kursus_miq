import { useState } from 'react';
import { Download, FileSpreadsheet, FileText } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function ExportButton({ data, type = 'excel', filename = 'export', columns = [] }) {
  const [exporting, setExporting] = useState(false);

  const handleExportExcel = () => {
    setExporting(true);
    try {
      const flatData = data.map((item, index) => {
        const row = {
          No: index + 1,
          ID: item.id,
          Peran: item.role,
          Waktu: new Date(item.submittedAt || item.serverTimestamp).toLocaleString()
        };
        if (item.answers) {
          Object.keys(item.answers).forEach(key => {
            row[key] = item.answers[key];
          });
        }
        return row;
      });

      const ws = XLSX.utils.json_to_sheet(flatData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Data Evaluasi");
      XLSX.writeFile(wb, `${filename}.xlsx`);
    } catch (e) {
      console.error("Gagal export excel:", e);
      alert("Gagal melakukan export Excel.");
    } finally {
      setExporting(false);
    }
  };

  const handleExportPdf = () => {
    setExporting(true);
    try {
      const doc = new jsPDF('landscape'); // Landscape is usually better for wide tables
      
      // Header
      doc.setFontSize(18);
      doc.setTextColor(16, 185, 129);
      doc.text("Laporan Evaluasi Kursus", 14, 22);
      
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Waktu Cetak: ${new Date().toLocaleString()}`, 14, 30);
      doc.text(`Total Data: ${data.length} responden`, 14, 36);
      
      // Prepare Table Data
      // By default, just take a few key columns if there are too many
      // But we will dump everything we can find, or at least a subset
      const tableHead = [['No', 'Waktu Submit', 'Peran', ...columns.map(c => c.header)]];
      const tableBody = data.map((item, index) => {
        const row = [
          index + 1, 
          new Date(item.submittedAt || item.serverTimestamp).toLocaleDateString(),
          item.role
        ];
        
        columns.forEach(col => {
          row.push(item.answers?.[col.key] || '-');
        });
        
        return row;
      });

      autoTable(doc, {
        startY: 45,
        head: tableHead,
        body: tableBody,
        theme: 'grid',
        headStyles: { fillColor: [16, 185, 129] }, // Emerald 500
        styles: { fontSize: 8, cellPadding: 3 },
        columnStyles: {
          0: { cellWidth: 15 },
          1: { cellWidth: 25 },
          2: { cellWidth: 25 },
        },
        margin: { top: 40, bottom: 20 },
        showHead: 'everyPage'
      });

      doc.save(`${filename}.pdf`);
    } catch (e) {
      console.error("Gagal export pdf:", e);
      alert("Gagal mencetak PDF.");
    } finally {
      setExporting(false);
    }
  };

  if (type === 'pdf') {
    return (
      <button 
        onClick={handleExportPdf}
        disabled={exporting}
        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors disabled:opacity-50"
      >
        <FileText size={16} />
        {exporting ? 'Memproses...' : 'Cetak PDF'}
      </button>
    );
  }

  return (
    <button 
      onClick={handleExportExcel}
      disabled={exporting}
      className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-lg transition-colors shadow-[0_0_10px_rgba(16,185,129,0.2)] disabled:opacity-50"
    >
      <FileSpreadsheet size={16} />
      {exporting ? 'Memproses...' : 'Export Excel'}
    </button>
  );
}
