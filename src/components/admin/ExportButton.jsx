import { useState } from 'react';
import { Download, FileSpreadsheet, FileText } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

export default function ExportButton({ data, type = 'excel', filename = 'export' }) {
  const [exporting, setExporting] = useState(false);

  const handleExportExcel = () => {
    setExporting(true);
    try {
      // Menyiapkan data (flat)
      const flatData = data.map(item => ({
        ID: item.id,
        Peran: item.role,
        Tanggal: new Date(item.submittedAt).toLocaleDateString(),
        ...item.answers // Mengembangkan kolom jawaban
      }));

      const ws = XLSX.utils.json_to_sheet(flatData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Evaluasi");
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
      const doc = new jsPDF();
      
      // Header Laporan
      doc.setFontSize(18);
      doc.setTextColor(16, 185, 129); // Primary color (emerald)
      doc.text("Laporan Evaluasi Kursus Tartil Al-Qur'an", 14, 22);
      
      doc.setFontSize(11);
      doc.setTextColor(100, 100, 100);
      doc.text(`Tanggal Cetak: ${new Date().toLocaleDateString()}`, 14, 30);
      
      // Garis
      doc.setDrawColor(200, 200, 200);
      doc.line(14, 35, 196, 35);

      // Body (Sederhana untuk demo Fase 12)
      doc.setFontSize(14);
      doc.setTextColor(40, 40, 40);
      doc.text("Ringkasan Eksekutif", 14, 45);
      
      doc.setFontSize(12);
      doc.text(`Total Data Diekspor: ${data.length} Responden`, 14, 55);
      doc.text("Laporan ini berisi rekapitulasi masukan kualitatif responden.", 14, 63);

      let yPos = 75;
      data.slice(0, 5).forEach((item, index) => { // Tampilkan 5 teratas
        if(item.answers.q_p_7) {
            doc.setFontSize(10);
            doc.text(`${index + 1}. ${item.answers.q_p_7}`, 14, yPos);
            yPos += 8;
        }
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
        className="btn btn-outline flex items-center gap-2"
      >
        <FileText size={18} />
        {exporting ? 'Memproses...' : 'Cetak PDF'}
      </button>
    );
  }

  return (
    <button 
      onClick={handleExportExcel}
      disabled={exporting}
      className="btn btn-primary flex items-center gap-2"
    >
      <FileSpreadsheet size={18} />
      {exporting ? 'Memproses...' : 'Export Excel'}
    </button>
  );
}
