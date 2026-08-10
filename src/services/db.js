// Simulasi Service Database untuk Fase 9 (karena belum ada data nyata di Firestore)

const mockPrograms = [
  { id: 'prog_tartil', name: "Tartil Al-Qur'an", desc: 'Program bimbingan bacaan dasar' },
  { id: 'prog_tahsin', name: 'Tahsinul Khot Tulis', desc: 'Seni menulis huruf Arab' },
  { id: 'prog_qiraah', name: "Qira'ah", desc: 'Langgam dan irama bacaan' },
  { id: 'prog_muallim', name: 'Pembinaan Muallim', desc: 'Pelatihan tenaga pengajar' }
];

const mockClasses = [
  { id: 'cls_t_a', programId: 'prog_tartil', name: 'Kelas Tartil A' },
  { id: 'cls_t_b', programId: 'prog_tartil', name: 'Kelas Tartil B' },
  { id: 'cls_k_a', programId: 'prog_tahsin', name: 'Kelas Khot A' },
  { id: 'cls_q_a', programId: 'prog_qiraah', name: 'Kelas Qiraah A' }
];

const mockMuallims = [
  { id: 'mu_1', classId: 'cls_t_a', name: 'Ustadz Ahmad' },
  { id: 'mu_2', classId: 'cls_t_a', name: 'Ustadz Budi' },
  { id: 'mu_3', classId: 'cls_t_b', name: 'Ustadzah Siti' },
  { id: 'mu_4', classId: 'cls_k_a', name: 'Ustadz Hasan' },
  { id: 'mu_5', classId: 'cls_q_a', name: 'Ustadz Zaid' }
];

const mockQuestions = [
  { id: 'q_p_1', role: 'peserta', category: 'materi', type: 'rating', text: 'Materi yang diberikan sesuai dengan tujuan program yang saya ikuti.', required: true, order: 1 },
  { id: 'q_p_2', role: 'peserta', category: 'materi', type: 'rating', text: 'Materi mudah dipahami dan diikuti.', required: true, order: 2 },
  { id: 'q_p_3', role: 'peserta', category: 'muallim', type: 'rating', text: 'Muallim menguasai materi yang disampaikan.', required: true, order: 3 },
  { id: 'q_p_4', role: 'peserta', category: 'muallim', type: 'rating', text: 'Cara Muallim mengajar sesuai dengan kebutuhan peserta.', required: true, order: 4 },
  { id: 'q_p_5', role: 'peserta', category: 'keseluruhan', type: 'rating', text: 'Secara keseluruhan, seberapa puas Anda mengikuti Kursus Tartil Al-Qur\'an se-Madura?', required: true, order: 5 },
  { id: 'q_p_6', role: 'peserta', category: 'kritik_saran', type: 'text', text: 'Apa hal terbaik dari kursus ini yang menurut Anda harus dipertahankan tahun depan?', required: false, order: 6 },
  { id: 'q_p_7', role: 'peserta', category: 'kritik_saran', type: 'text', text: 'Apa hal yang menurut Anda paling perlu diperbaiki?', required: false, order: 7 },
  { id: 'q_p_8', role: 'peserta', category: 'keseluruhan', type: 'boolean', text: 'Jika kursus ini dilaksanakan kembali tahun depan, apakah Anda bersedia mengikuti kembali?', required: true, order: 8 },
  
  // Pertanyaan Pendamping
  { id: 'q_pend_1', role: 'pendamping', category: 'fasilitas', type: 'rating', text: 'Ketersediaan dan kelayakan fasilitas ruang kelas yang disediakan panitia sangat baik.', required: true, order: 1 },
  { id: 'q_pend_2', role: 'pendamping', category: 'koordinasi', type: 'rating', text: 'Koordinasi antara panitia dan pendamping berjalan dengan lancar.', required: true, order: 2 },
  { id: 'q_pend_3', role: 'pendamping', category: 'keseluruhan', type: 'text', text: 'Adakah kendala spesifik yang rombongan Anda hadapi selama mengikuti kursus?', required: false, order: 3 },
  
  // Pertanyaan Muallim
  { id: 'q_mual_1', role: 'muallim', category: 'peserta', type: 'rating', text: 'Peserta menunjukkan antusiasme dan keaktifan selama proses pembelajaran.', required: true, order: 1 },
  { id: 'q_mual_2', role: 'muallim', category: 'kurikulum', type: 'rating', text: 'Modul/Materi yang disediakan sesuai dengan kebutuhan mengajar di kelas.', required: true, order: 2 },
  { id: 'q_mual_3', role: 'muallim', category: 'kritik_saran', type: 'text', text: 'Saran untuk perbaikan kurikulum/metode tahun depan:', required: false, order: 3 },
  
  // Pertanyaan Panitia
  { id: 'q_pan_1', role: 'panitia', category: 'pelaksanaan', type: 'rating', text: 'Penyelenggaraan acara secara keseluruhan berjalan sesuai dengan standar operasional prosedur (SOP).', required: true, order: 1 },
  { id: 'q_pan_2', role: 'panitia', category: 'internal', type: 'text', text: 'Evaluasi kritis terhadap kinerja divisi internal Anda:', required: true, order: 2 }
];

// Simulasi Network Delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getPrograms = async () => {
  await delay(500);
  return mockPrograms;
};

export const getClassesByProgram = async (programId) => {
  await delay(300);
  return mockClasses.filter(c => c.programId === programId);
};

export const getMuallimsByClass = async (classId) => {
  await delay(300);
  return mockMuallims.filter(m => m.classId === classId);
};

export const getQuestionsByRole = async (role) => {
  await delay(400);
  return mockQuestions.filter(q => q.role === role).sort((a, b) => a.order - b.order);
};

export const submitEvaluation = async (evaluationData) => {
  await delay(800);
  console.log("Mock Submit Success:", evaluationData);
  // Di masa depan, kode ini akan diganti dengan:
  // await addDoc(collection(db, 'responses'), { ...evaluationData, timestamp: serverTimestamp() })
  return { success: true, id: 'mock_doc_id_' + Date.now() };
};

// --- MOCK ADMIN DATA & FUNCTIONS ---
const mockResponses = [
  { id: 'res_1', role: 'peserta', submittedAt: '2026-08-01T10:00:00Z', answers: { q_p_5: 5, q_p_6: 'Materi sangat jelas', q_p_7: 'AC kurang dingin' } },
  { id: 'res_2', role: 'peserta', submittedAt: '2026-08-02T11:00:00Z', answers: { q_p_5: 4, q_p_6: 'Ustadz sabar', q_p_7: 'Waktu terlalu singkat' } },
  { id: 'res_3', role: 'pendamping', submittedAt: '2026-08-02T14:00:00Z', answers: { q_p_5: 5, q_p_6: 'Panitia responsif', q_p_7: 'Papan petunjuk kurang' } },
  { id: 'res_4', role: 'peserta', submittedAt: '2026-08-03T09:00:00Z', answers: { q_p_5: 3, q_p_6: 'Modul bagus', q_p_7: 'Parkir sempit' } }
];

export const getDashboardStats = async () => {
  await delay(600);
  return {
    totalResponden: 145,
    rataKepuasan: 4.6,
    pesertaCount: 110,
    pendampingCount: 15,
    muallimCount: 12,
    panitiaCount: 8,
    chartData: [
      { name: "Tartil", kepuasan: 4.8 },
      { name: "Tahsin", kepuasan: 4.5 },
      { name: "Qira'ah", kepuasan: 4.7 },
      { name: "Muallim", kepuasan: 4.9 }
    ]
  };
};

export const getResponsesByRole = async (role) => {
  await delay(500);
  return mockResponses.filter(r => r.role === role);
};
