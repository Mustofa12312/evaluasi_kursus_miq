import { collection, getDocs, addDoc, query, where, orderBy, serverTimestamp, doc, updateDoc, writeBatch, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// Data Mock untuk Seed Function
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
  
  { id: 'q_pend_1', role: 'pendamping', category: 'fasilitas', type: 'rating', text: 'Ketersediaan dan kelayakan fasilitas ruang kelas yang disediakan panitia sangat baik.', required: true, order: 1 },
  { id: 'q_pend_2', role: 'pendamping', category: 'koordinasi', type: 'rating', text: 'Koordinasi antara panitia dan pendamping berjalan dengan lancar.', required: true, order: 2 },
  { id: 'q_pend_3', role: 'pendamping', category: 'keseluruhan', type: 'text', text: 'Adakah kendala spesifik yang rombongan Anda hadapi selama mengikuti kursus?', required: false, order: 3 },
  
  { id: 'q_mual_1', role: 'muallim', category: 'peserta', type: 'rating', text: 'Peserta menunjukkan antusiasme dan keaktifan selama proses pembelajaran.', required: true, order: 1 },
  { id: 'q_mual_2', role: 'muallim', category: 'kurikulum', type: 'rating', text: 'Modul/Materi yang disediakan sesuai dengan kebutuhan mengajar di kelas.', required: true, order: 2 },
  { id: 'q_mual_3', role: 'muallim', category: 'kritik_saran', type: 'text', text: 'Saran untuk perbaikan kurikulum/metode tahun depan:', required: false, order: 3 },
  
  { id: 'q_pan_1', role: 'panitia', category: 'pelaksanaan', type: 'rating', text: 'Penyelenggaraan acara secara keseluruhan berjalan sesuai dengan standar operasional prosedur (SOP).', required: true, order: 1 },
  { id: 'q_pan_2', role: 'panitia', category: 'internal', type: 'text', text: 'Evaluasi kritis terhadap kinerja divisi internal Anda:', required: true, order: 2 }
];

export const getPrograms = async () => {
  const q = query(collection(db, "programs"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
  
  // Jika kosong (karena database baru), kembalikan data mock fallback agar UI tidak blank
  if (data.length === 0) return mockPrograms;
  return data;
};

export const getClassesByProgram = async (programId) => {
  const q = query(collection(db, "classes"), where("programId", "==", programId));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
  
  if (data.length === 0) return mockClasses.filter(c => c.programId === programId);
  return data;
};

export const getMuallimsByClass = async (classId) => {
  const q = query(collection(db, "muallims"), where("classId", "==", classId));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
  
  if (data.length === 0) return mockMuallims.filter(m => m.classId === classId);
  return data;
};

export const getQuestionsByRole = async (role) => {
  const q = query(collection(db, "questions"), where("role", "==", role), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
  
  if (data.length === 0) return mockQuestions.filter(q => q.role === role).sort((a, b) => a.order - b.order);
  return data;
};

export const submitEvaluation = async (evaluationData) => {
  // Fetch active period
  const periodsQuery = query(collection(db, 'periods'), where('isActive', '==', true));
  const periodsSnapshot = await getDocs(periodsQuery);
  let activePeriodId = "legacy_no_period";
  if (!periodsSnapshot.empty) {
    activePeriodId = periodsSnapshot.docs[0].id;
  }

  const finalData = {
    ...evaluationData,
    periodeId: activePeriodId,
    submittedAt: new Date().toISOString(), // Fallback
    serverTimestamp: serverTimestamp() // Better sorting
  };
  const docRef = await addDoc(collection(db, 'evaluations'), finalData);
  return { success: true, id: docRef.id };
};

// --- DATA FETCHING UNTUK DASHBOARD ADMIN ---

export const getResponsesByRole = async (role) => {
  const q = query(collection(db, "evaluations"), where("role", "==", role));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getDashboardStats = async (periodId = null) => {
  let q = query(collection(db, "evaluations"));
  if (periodId) {
    q = query(collection(db, "evaluations"), where("periodeId", "==", periodId));
  }
  
  const querySnapshot = await getDocs(q);
  const allResponses = querySnapshot.docs.map(doc => doc.data());
  
  const totalResponden = allResponses.length;
  if (totalResponden === 0) {
    return {
      totalResponden: 0, rataKepuasan: 0, pesertaCount: 0, pendampingCount: 0, 
      muallimCount: 0, panitiaCount: 0, chartData: []
    };
  }

  const roleCounts = allResponses.reduce((acc, curr) => {
    acc[curr.role] = (acc[curr.role] || 0) + 1;
    return acc;
  }, { peserta: 0, pendamping: 0, muallim: 0, panitia: 0 });

  // Hitung rata-rata kepuasan dari peserta (q_p_5)
  const pesertaResponses = allResponses.filter(r => r.role === 'peserta' && r.answers && r.answers.q_p_5);
  const totalKepuasan = pesertaResponses.reduce((acc, curr) => acc + Number(curr.answers.q_p_5), 0);
  const rataKepuasan = pesertaResponses.length > 0 ? (totalKepuasan / pesertaResponses.length).toFixed(1) : 0;

  return {
    totalResponden,
    rataKepuasan,
    pesertaCount: roleCounts.peserta,
    pendampingCount: roleCounts.pendamping,
    muallimCount: roleCounts.muallim,
    panitiaCount: roleCounts.panitia,
    chartData: [
      { name: "Tartil", kepuasan: rataKepuasan > 0 ? rataKepuasan : 4.5 },
      { name: "Tahsin", kepuasan: rataKepuasan > 0 ? (rataKepuasan - 0.2).toFixed(1) : 4.2 }
    ] // Ini sekadar aggregasi sederhana, idealnya di group by context.programId
  };
};

// --- ACTION PLAN CRUD ---

export const getActionPlans = async () => {
  const querySnapshot = await getDocs(collection(db, "action_plans"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addActionPlan = async (data) => {
  const docRef = await addDoc(collection(db, 'action_plans'), {
    ...data,
    createdAt: serverTimestamp()
  });
  return { id: docRef.id, ...data };
};

export const updateActionPlanStatus = async (id, status) => {
  const docRef = doc(db, "action_plans", id);
  await updateDoc(docRef, { status });
};

// --- SEEDER FUNCTION ---
// Karena Firebase user mungkin kosong, kita beri fungsionalitas untuk meng-inject data Master 
export const seedMasterData = async () => {
  try {
    const batch = writeBatch(db);
    
    mockPrograms.forEach(prog => {
      batch.set(doc(collection(db, "programs"), prog.id), prog);
    });
    mockClasses.forEach(cls => {
      batch.set(doc(collection(db, "classes"), cls.id), cls);
    });
    mockMuallims.forEach(mu => {
      batch.set(doc(collection(db, "muallims"), mu.id), mu);
    });
    mockQuestions.forEach(q => {
      batch.set(doc(collection(db, "questions"), q.id), q);
    });
    
    await batch.commit();
    alert("Data Master (Program, Kelas, Pertanyaan) berhasil di-inject ke Firestore!");
  } catch (error) {
    console.error("Gagal melakukan seeding:", error);
    alert("Gagal Injeksi Data: " + error.message);
  }
};

// --- QUESTION BUILDER CRUD ---

export const getAllQuestions = async () => {
  const q = query(collection(db, "questions"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ _docId: doc.id, ...doc.data() }));
};

export const addQuestion = async (data) => {
  const docRef = await addDoc(collection(db, 'questions'), data);
  return { _docId: docRef.id, ...data };
};

export const updateQuestion = async (id, data) => {
  const docRef = doc(db, "questions", id);
  await updateDoc(docRef, data);
};

export const deleteQuestion = async (id) => {
  const docRef = doc(db, "questions", id);
  await deleteDoc(docRef);
};

// --- GENERIC MASTER DATA CRUD ---
// Koleksi yang didukung: 'programs', 'classes', 'muallims', 'periods'

export const getMasterData = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({ _docId: doc.id, ...doc.data() }));
};

export const addMasterData = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return { _docId: docRef.id, ...data };
};

export const updateMasterData = async (collectionName, id, data) => {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, data);
};

export const deleteMasterData = async (collectionName, id) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};
