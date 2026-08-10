# PRD — Sistem Evaluasi Kursus Tartil Al-Qur'an se-Madura

## FASE 1 — Fondasi & Tujuan Sistem

### 1. Identitas Proyek

**Nama Sistem:**
**Sistem Evaluasi Kursus Tartil Al-Qur'an se-Madura**

**Platform:** Website

**Jenis Sistem:** Public Evaluation & Internal Analysis System

**Teknologi yang direncanakan:**

- React
- Vite
- Tailwind CSS
- Firebase Firestore
- React Router
- Recharts

**Backend:** Firebase langsung, tanpa Laravel.

---

## 2. Latar Belakang

Kursus Tartil Al-Qur'an se-Madura merupakan kegiatan yang terdiri dari **11 sesi** dan memiliki beberapa program pembinaan:

1. **Tartil Al-Qur'an**
2. **Tahsinul Khot / Khot Tulis**
3. **Qira'ah**
4. **Pembinaan Muallim**

Setelah seluruh rangkaian kegiatan selesai, diperlukan sebuah sistem evaluasi yang mampu mengumpulkan pengalaman, penilaian, kritik, dan saran dari berbagai pihak yang terlibat.

Evaluasi tidak hanya dilihat dari sudut pandang peserta, tetapi juga dari perspektif **pendamping, Muallim, dan panitia**.

Hasil evaluasi tersebut akan digunakan sebagai bahan pertimbangan dalam melakukan perbaikan dan pengembangan **Kursus Tartil Al-Qur'an pada tahun berikutnya**.

---

# 3. Tujuan Sistem

### Tujuan utama

Membangun sistem digital untuk mengumpulkan dan mengolah evaluasi menyeluruh terhadap pelaksanaan Kursus Tartil Al-Qur'an se-Madura.

### Tujuan khusus

Sistem harus mampu:

1. Mengumpulkan evaluasi dari peserta.
2. Mengumpulkan evaluasi dari pendamping.
3. Mengumpulkan evaluasi dari Muallim.
4. Mengumpulkan evaluasi dari panitia.
5. Mengevaluasi kualitas masing-masing program.
6. Mengevaluasi Muallim secara individual.
7. Menghasilkan evaluasi Muallim secara keseluruhan.
8. Mengumpulkan kritik dan saran secara aman.
9. Menghasilkan statistik evaluasi.
10. Membantu panitia menentukan prioritas perbaikan.
11. Menjadi dokumentasi evaluasi kegiatan.
12. Menjadi dasar perencanaan Kursus tahun berikutnya.

---

# 4. Waktu Penggunaan

Evaluasi dilakukan **satu kali setelah seluruh 11 sesi selesai**.

Tidak terdapat evaluasi per sesi.

### Alur kegiatan

```text
Sesi 1
  ↓
Sesi 2
  ↓
Sesi 3
  ↓
...
  ↓
Sesi 11
  ↓
KURSUS SELESAI
  ↓
EVALUASI MENYELURUH
  ↓
ANALISIS
  ↓
LAPORAN
  ↓
PERBAIKAN TAHUN BERIKUTNYA
```

Dengan demikian, responden menilai **pengalaman keseluruhan**, bukan hanya pengalaman pada satu sesi.

---

# 5. Prinsip Sistem

## 5.1 Sederhana

Responden dapat mengisi evaluasi dengan mudah melalui HP maupun komputer.

Target waktu pengisian:

> **±5–10 menit**

Form tidak boleh terlalu panjang sehingga responden mengisi secara asal.

---

## 5.2 Tanpa Login Responden

Semua responden dapat langsung mengakses formulir.

Tidak diperlukan:

- username;
- password;
- akun;
- kode peserta;
- nomor peserta.

### Alur:

```text
Buka Website
     ↓
Pilih Peran
     ↓
Isi Evaluasi
     ↓
Kirim
```

---

# 6. Prinsip Privasi

Sistem **tidak menjadi database peserta**.

Tidak perlu menyimpan:

- Nama peserta
- NIK
- Nomor HP
- Alamat
- Nomor peserta
- Data pribadi lainnya

Data yang digunakan cukup untuk kepentingan analisis:

```text
Jenis Responden
Program
Kelas/Kelompok
Muallim
Jawaban Evaluasi
```

Identitas pribadi tidak menjadi bagian dari data utama sistem.

---

# 7. Empat Perspektif Evaluasi

Sistem memiliki empat jenis responden.

### 7.1 Peserta

Peserta memberikan evaluasi berdasarkan pengalaman langsung selama mengikuti kursus.

Fokus:

- Program
- Muallim
- Materi
- Metode
- Fasilitas
- Waktu
- Panitia
- Pengalaman keseluruhan
- Kritik
- Saran

---

### 7.2 Pendamping

Pendamping memberikan evaluasi berdasarkan pengalaman **mendampingi dan mengurus peserta/rombongan**.

Fokus:

- Informasi
- Koordinasi
- Pelayanan
- Pengelolaan peserta
- Program
- Fasilitas
- Jadwal
- Hubungan dengan panitia
- Kendala pendampingan
- Saran

---

### 7.3 Muallim

Muallim memberikan evaluasi dari perspektif pengajar.

Fokus:

- Peserta
- Materi
- Metode
- Waktu
- Kelas
- Fasilitas
- Koordinasi
- Panitia
- Pelaksanaan program
- Kendala pembelajaran
- Saran

Muallim juga dapat memberikan **self-evaluation** apabila fitur tersebut disetujui pada fase berikutnya.

---

### 7.4 Panitia

Panitia memberikan evaluasi internal terhadap penyelenggaraan.

Fokus:

- Persiapan
- Pelaksanaan
- Koordinasi
- Pembagian tugas
- Pelayanan
- Program
- Fasilitas
- Ketepatan waktu
- Kendala
- Solusi
- Rekomendasi

---

# 8. Struktur Program

Sistem mengenali empat program utama:

```text
PROGRAM
│
├── Tartil Al-Qur'an
├── Tahsinul Khot / Khot Tulis
├── Qira'ah
└── Pembinaan Muallim
```

Keempat program **berlangsung secara bersamaan** dalam rangkaian 11 sesi.

Program tidak digunakan sebagai identitas peserta, tetapi sebagai **kategori evaluasi**.

---

# 9. Struktur Kelas

Sistem menggunakan:

> **Program → Kelas/Kelompok → Muallim**

Contoh:

```text
Tartil Al-Qur'an
│
├── Kelas A
│   └── Muallim A
│
├── Kelas B
│   └── Muallim B
│
└── Kelas C
    └── Muallim C
```

Data kelas dan Muallim digunakan untuk memungkinkan evaluasi secara lebih terarah tanpa harus menyimpan identitas peserta.

---

# 10. Evaluasi Muallim

Sistem menyediakan dua tingkat evaluasi.

### A. Individual

Contoh:

> Program: Tartil Al-Qur'an
> Kelas: A
> Muallim: Ustadz A

Responden dapat memberikan evaluasi terhadap Muallim tertentu.

### B. Keseluruhan

Sistem menggabungkan seluruh penilaian untuk menghasilkan:

> **Nilai keseluruhan Muallim dalam program tertentu**

Contoh:

```text
Tartil Al-Qur'an
Evaluasi keseluruhan Muallim
4,65 / 5
```

Hasil individual digunakan untuk **analisis internal**.

---

# 11. Kebijakan Kerahasiaan

Sistem menerapkan prinsip:

> **Public Evaluation, Private Analysis**

### Publik

Dapat melihat informasi umum seperti:

- jumlah responden;
- nilai kepuasan keseluruhan;
- hasil umum program;
- statistik agregat;
- ringkasan evaluasi.

### Internal

Hanya tim inti yang dapat melihat:

- kritik dan saran detail;
- evaluasi individual Muallim;
- komentar;
- analisis berdasarkan kelas;
- data evaluasi mentah.

---

# 12. Perlindungan Anonimitas

Untuk menjaga kerahasiaan responden, hasil individual tidak boleh ditampilkan apabila jumlah responden terlalu sedikit.

### Aturan awal:

> **Minimal 5 responden**

Jika kurang dari 5:

```text
Jumlah responden: 3

Hasil individual:
🔒 Belum tersedia
```

Jika sudah mencapai minimal 5:

```text
Jumlah responden: 27

Nilai:
4,72 / 5
```

Aturan ini akan dikaji kembali pada fase keamanan dan analisis.

---

# 13. Jenis Data Evaluasi

Sistem menggunakan kombinasi:

### Rating

Contoh:

> ⭐ 1–5

### Pilihan

Contoh:

> Sangat Baik
> Baik
> Cukup
> Kurang
> Sangat Kurang

### Pilihan Ya/Tidak

Untuk pertanyaan tertentu.

### Jawaban terbuka

Untuk:

- Kritik
- Saran
- Kendala
- Ide
- Hal yang perlu dipertahankan
- Hal yang perlu diperbaiki

---

# 14. Prinsip Analisis

Sistem tidak hanya menghitung **nilai rata-rata**.

Dashboard nantinya juga dapat menganalisis:

- jumlah responden;
- distribusi nilai;
- nilai rata-rata;
- nilai per program;
- nilai per kelas;
- nilai Muallim;
- evaluasi berdasarkan jenis responden;
- aspek tertinggi;
- aspek terendah;
- kritik dan saran;
- prioritas perbaikan.

Tujuannya adalah menghasilkan informasi yang dapat digunakan untuk **pengambilan keputusan**.

---

# 15. Output Utama

Pada akhir periode evaluasi, sistem diharapkan menghasilkan:

### Dashboard

Menampilkan kondisi evaluasi secara real-time.

### Statistik

Menampilkan hasil berdasarkan:

- program;
- kelas;
- Muallim;
- jenis responden;
- aspek evaluasi.

### Kritik & Saran

Menampilkan masukan responden secara terstruktur.

### Laporan

Laporan evaluasi tahunan yang dapat digunakan sebagai bahan rapat dan perencanaan kegiatan berikutnya.

---

# 16. Batasan Sistem Fase 1

Sistem **tidak bertujuan untuk**:

- menggantikan SIAKAD;
- menjadi database peserta;
- mengelola absensi;
- mengelola nilai akademik;
- mengelola pembayaran;
- mengelola pendaftaran kursus;
- mengelola administrasi peserta.

Fokus sistem hanya:

> **EVALUASI → ANALISIS → REKOMENDASI**

---

# 17. Prinsip Utama Produk

Sistem ini dibangun berdasarkan satu prinsip:

> **"Bukan sekadar mengumpulkan kritik dan saran, tetapi mengubah pengalaman peserta, pendamping, Muallim, dan panitia menjadi data yang dapat digunakan untuk memperbaiki Kursus Tartil Al-Qur'an pada tahun berikutnya."**

---

## Status Fase 1

**Fondasi:** ✅
**Tujuan:** ✅
**Responden:** ✅
**Program:** ✅
**Privasi:** ✅
**Konsep evaluasi:** ✅
**Akses publik:** ✅
**Analisis internal:** ✅

# PRD — Sistem Evaluasi Kursus Tartil Al-Qur'an se-Madura

# FASE 2 — Struktur Responden & Alur Sistem

## 1. Tujuan Fase 2

Fase ini menentukan struktur pengguna/responden, hubungan antara program, kelas, dan Muallim, serta alur pengisian evaluasi.

Prinsip utama:

> **Satu website, empat perspektif evaluasi, tanpa akun dan tanpa database pribadi responden.**

Empat perspektif tersebut adalah:

1. Peserta
2. Pendamping
3. Muallim
4. Panitia

---

# 2. Struktur Utama Sistem

Sistem memiliki dua sisi:

```text
SISI PUBLIK
│
├── Peserta
├── Pendamping
├── Muallim
└── Panitia
        │
        ▼
   Form Evaluasi
        │
        ▼
     Firestore
```

dan:

```text
SISI INTERNAL
│
└── Dashboard Evaluasi
        │
        ├── Statistik
        ├── Analisis Program
        ├── Analisis Kelas
        ├── Analisis Muallim
        ├── Kritik & Saran
        └── Laporan
```

Responden tidak membutuhkan akun.

Dashboard internal merupakan area terpisah dan harus memiliki pengamanan tersendiri.

---

# 3. Empat Jenis Responden

## 3.1 Peserta

Peserta merupakan orang yang mengikuti salah satu atau beberapa program kursus.

Peserta memberikan evaluasi berdasarkan pengalaman langsung selama mengikuti rangkaian 11 sesi.

### Fokus evaluasi

- Program yang diikuti
- Kelas
- Muallim
- Materi
- Metode pembelajaran
- Fasilitas
- Jadwal
- Pelayanan panitia
- Pengalaman keseluruhan
- Kritik
- Saran

### Identitas

Tidak diperlukan.

Tidak meminta:

- Nama
- Nomor HP
- NIK
- Alamat
- Nomor peserta

---

# 4. Struktur Peserta

Peserta dikaitkan dengan:

```text
Program
   ↓
Kelas
   ↓
Muallim
```

Contoh:

```text
Tartil Al-Qur'an
    ↓
Kelas A
    ↓
Muallim A
```

Peserta tidak diminta memasukkan hubungan tersebut secara manual apabila data pilihan sudah tersedia di sistem.

---

# 5. Alur Peserta

```text
Beranda
   ↓
Pilih "Peserta"
   ↓
Pilih Program
   ↓
Pilih Kelas
   ↓
Pilih Muallim
   ↓
Evaluasi Program
   ↓
Evaluasi Muallim
   ↓
Evaluasi Umum Kursus
   ↓
Kritik & Saran
   ↓
Konfirmasi
   ↓
Kirim
   ↓
Halaman Terima Kasih
```

Jika seorang peserta hanya mengikuti satu program, alurnya tetap sederhana.

Jika pada pelaksanaan ternyata peserta dapat mengikuti lebih dari satu program, sistem dapat mengakomodasi pilihan beberapa program tanpa mengubah konsep dasar.

---

# 6. Pendamping

Pendamping merupakan pihak yang bertanggung jawab mendampingi dan mengurus peserta dalam suatu rombongan/lembaga.

Pendamping bukan diperlakukan sebagai peserta biasa.

Perspektif pendamping diperlukan karena mereka melihat kegiatan dari sisi:

- pengelolaan peserta;
- komunikasi;
- koordinasi;
- pelayanan;
- fasilitas;
- jadwal;
- hubungan antara peserta dan penyelenggara.

---

# 7. Data Pendamping

Sistem tidak perlu menyimpan nama pendamping.

Informasi yang dibutuhkan cukup berupa:

```text
Jenis Responden
Program/Kegiatan yang didampingi
Kelas/Kelompok
Jumlah peserta yang didampingi
Jawaban evaluasi
```

Jumlah peserta yang didampingi dapat digunakan sebagai data analisis, tanpa menyimpan identitas peserta.

---

# 8. Alur Pendamping

```text
Beranda
   ↓
Pilih "Pendamping"
   ↓
Pilih Program/Kelompok yang didampingi
   ↓
Pilih Kelas/Kelompok
   ↓
Evaluasi Pendampingan
   ↓
Evaluasi Program
   ↓
Evaluasi Panitia
   ↓
Evaluasi Fasilitas & Pelayanan
   ↓
Kendala
   ↓
Kritik & Saran
   ↓
Kirim
```

---

# 9. Muallim

Muallim merupakan pengajar/pembimbing dalam program kursus.

Muallim memiliki dua fungsi dalam sistem:

### A. Sebagai objek evaluasi

Muallim dapat dinilai oleh peserta dan/atau pendamping.

### B. Sebagai responden

Muallim juga dapat memberikan evaluasi terhadap:

- peserta;
- materi;
- metode;
- waktu;
- kelas;
- fasilitas;
- panitia;
- koordinasi;
- pelaksanaan program.

---

# 10. Struktur Muallim

Muallim dikaitkan dengan:

```text
Program
   ↓
Kelas
   ↓
Muallim
```

Contoh:

```text
Tartil Al-Qur'an
│
├── Kelas A
│   └── Muallim A
│
├── Kelas B
│   └── Muallim B
│
└── Kelas C
    └── Muallim C
```

Nama Muallim digunakan karena evaluasi individual memang menjadi salah satu tujuan sistem.

Namun nama tersebut merupakan **data penyelenggaraan**, bukan data identitas responden.

---

# 11. Alur Muallim

```text
Beranda
   ↓
Pilih "Muallim"
   ↓
Pilih Program
   ↓
Pilih Kelas
   ↓
Evaluasi Peserta
   ↓
Evaluasi Materi
   ↓
Evaluasi Metode
   ↓
Evaluasi Waktu
   ↓
Evaluasi Fasilitas
   ↓
Evaluasi Koordinasi
   ↓
Evaluasi Panitia
   ↓
Kendala
   ↓
Kritik & Saran
   ↓
Kirim
```

Self-evaluation Muallim dapat dimasukkan sebagai bagian khusus pada Fase 3 apabila diperlukan.

---

# 12. Panitia

Panitia memiliki perspektif paling luas karena terlibat dalam persiapan dan pelaksanaan kegiatan.

Panitia melakukan evaluasi internal.

### Fokus:

- Persiapan
- Perencanaan
- Pembagian tugas
- Koordinasi
- Komunikasi
- Pelayanan
- Program
- Fasilitas
- Ketepatan waktu
- Penanganan masalah
- Evaluasi keseluruhan

---

# 13. Alur Panitia

```text
Beranda
   ↓
Pilih "Panitia"
   ↓
Evaluasi Persiapan
   ↓
Evaluasi Pelaksanaan
   ↓
Evaluasi Program
   ↓
Evaluasi Koordinasi
   ↓
Evaluasi Pelayanan
   ↓
Evaluasi Fasilitas
   ↓
Kendala
   ↓
STOP
START
CONTINUE
   ↓
Kritik & Saran
   ↓
Kirim
```

---

# 14. Empat Program

Program yang tersedia:

```text
1. Tartil Al-Qur'an
2. Tahsinul Khot / Khot Tulis
3. Qira'ah
4. Pembinaan Muallim
```

Keempat program berlangsung bersamaan dalam 11 sesi.

Program digunakan sebagai kategori evaluasi.

---

# 15. Hubungan Program, Kelas dan Muallim

Struktur data konseptual:

```text
PROGRAM
   │
   ├── Kelas 1
   │     └── Muallim
   │
   ├── Kelas 2
   │     └── Muallim
   │
   └── Kelas 3
         └── Muallim
```

Struktur ini memungkinkan sistem menghasilkan analisis:

### Tingkat 1 — Keseluruhan

> Semua program

### Tingkat 2 — Program

> Tartil
> Tahsinul Khot
> Qira'ah
> Pembinaan Muallim

### Tingkat 3 — Kelas

> Tartil — Kelas A

### Tingkat 4 — Muallim

> Tartil — Kelas A — Muallim A

---

# 16. Evaluasi Muallim Individual

Peserta atau pihak yang relevan dapat memilih Muallim yang ingin dievaluasi.

Contoh:

```text
Program:
[ Tartil Al-Qur'an ]

Kelas:
[ Kelas A ]

Muallim:
[ Ustadz Ahmad ]
```

Kemudian sistem menampilkan pertanyaan khusus untuk Muallim tersebut.

Hasil akan dihitung secara agregat.

---

# 17. Evaluasi Muallim Keseluruhan

Selain individual, sistem menghitung nilai keseluruhan Muallim dalam suatu program.

Contoh:

```text
PROGRAM TARTIL AL-QUR'AN

Evaluasi seluruh Muallim
4,65 / 5
```

Kemudian:

```text
Muallim A
4,72 / 5

Muallim B
4,61 / 5

Muallim C
4,58 / 5
```

Hasil individual hanya tersedia pada dashboard internal.

---

# 18. Prinsip Anonimitas

Sistem tidak menghubungkan jawaban dengan identitas pribadi responden.

Data evaluasi disimpan sebagai:

```text
Jenis Responden
Program
Kelas
Muallim
Jawaban
Waktu Pengiriman
```

Tidak ada:

```text
Nama
Nomor HP
NIK
Alamat
```

---

# 19. Pengaturan Jumlah Responden

Untuk melindungi anonimitas, evaluasi individual Muallim menggunakan batas minimal responden.

### Aturan awal:

```text
< 5 responden
→ hasil individual disembunyikan

≥ 5 responden
→ hasil individual dapat dianalisis
```

Aturan ini berlaku terutama untuk tampilan dashboard dan laporan.

Data tetap dapat tersimpan untuk keperluan pengolahan internal sesuai kebijakan akses.

---

# 20. Akses Hasil Evaluasi

## Publik

Tidak dapat melihat data mentah.

Publik hanya dapat melihat apabila panitia memilih untuk mempublikasikan:

- jumlah responden;
- tingkat kepuasan;
- statistik umum;
- ringkasan hasil.

## Tim Inti

Dapat melihat:

- statistik;
- evaluasi program;
- evaluasi kelas;
- evaluasi Muallim;
- kritik;
- saran;
- komentar;
- data analisis.

## Responden

Setelah mengirim evaluasi, responden tidak dapat membuka kembali data evaluasinya.

---

# 21. Prinsip "Public Evaluation, Private Analysis"

Konsep sistem:

```text
            WEBSITE PUBLIK
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
    Peserta    Pendamping  Muallim
                  │
                  ▼
               Panitia
                  │
                  ▼
              FIRESTORE
                  │
                  ▼
          DASHBOARD INTERNAL
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
    Statistik   Analisis   Kritik
```

Artinya:

> **Pengisian mudah dan terbuka, tetapi hasil sensitif tetap terlindungi.**

---

# 22. Halaman Publik

Struktur halaman awal:

```text
/
│
├── Beranda
│
├── Pilih Peran
│   ├── Peserta
│   ├── Pendamping
│   ├── Muallim
│   └── Panitia
│
├── Form Evaluasi
│
├── Terima Kasih
│
└── Informasi
```

---

# 23. Halaman Dashboard Internal

Struktur awal:

```text
/admin
│
├── Dashboard
│
├── Program
│
├── Kelas
│
├── Muallim
│
├── Evaluasi
│   ├── Peserta
│   ├── Pendamping
│   ├── Muallim
│   └── Panitia
│
├── Statistik
│
├── Kritik & Saran
│
└── Laporan
```

Detail dashboard akan dirancang pada Fase 6.

---

# 24. Prinsip Pengalaman Pengguna

Website harus:

- mobile-first;
- mudah digunakan;
- cepat dibuka;
- tombol cukup besar;
- bahasa sederhana;
- tidak menggunakan istilah teknis;
- memiliki progress indicator;
- memberikan validasi sebelum pengiriman;
- memberikan konfirmasi setelah evaluasi berhasil dikirim.

Contoh:

```text
Evaluasi Anda

●━━━━━━○━━━━━━○━━━━━━○
Data     Program   Evaluasi   Selesai
```

Responden dapat mengetahui posisi mereka dalam proses pengisian.

---

# 25. Kesimpulan Fase 2

Struktur sistem ditetapkan sebagai:

```text
KURSUS
│
├── Program
│   ├── Tartil Al-Qur'an
│   ├── Tahsinul Khot
│   ├── Qira'ah
│   └── Pembinaan Muallim
│
├── Kelas/Kelompok
│
└── Muallim
```

Dengan empat perspektif:

```text
Peserta
Pendamping
Muallim
Panitia
```

Tidak ada database pribadi peserta.

Sistem hanya menggunakan data yang diperlukan untuk mengelompokkan hasil evaluasi.

### Prinsip utama Fase 2:

> **"Responden tidak perlu dikenal oleh sistem; yang perlu diketahui sistem adalah konteks evaluasinya."**

Konteks tersebut berupa **siapa sebagai peran, program apa, kelas mana, dan Muallim mana** yang relevan dengan evaluasi.

---

## Status Fase 2

| Komponen                     | Status |
| ---------------------------- | ------ |
| Peserta                      | ✅     |
| Pendamping                   | ✅     |
| Muallim                      | ✅     |
| Panitia                      | ✅     |
| 4 Program                    | ✅     |
| Struktur Kelas               | ✅     |
| Evaluasi Muallim Individual  | ✅     |
| Evaluasi Muallim Keseluruhan | ✅     |
| Tanpa database peserta       | ✅     |
| Tanpa login responden        | ✅     |
| Privasi                      | ✅     |
| Dashboard internal           | ✅     |

**Fase berikutnya: FASE 3 — Perancangan Form & Pertanyaan Evaluasi.**

Fase 3 akan menjadi bagian paling detail karena kita akan menentukan **pertanyaan satu per satu**, termasuk jenis jawaban, skala 1–5, pertanyaan wajib/opsional, pertanyaan khusus masing-masing program, dan pertanyaan kritik-saran.

# PRD — Sistem Evaluasi Kursus Tartil Al-Qur'an se-Madura

# FASE 3 — Perancangan Form & Pertanyaan Evaluasi

## 1. Tujuan Fase 3

Fase ini menentukan seluruh struktur formulir evaluasi yang akan digunakan oleh:

1. Peserta
2. Pendamping
3. Muallim
4. Panitia

Evaluasi dilakukan **satu kali setelah seluruh 11 sesi selesai**.

Pertanyaan dirancang untuk menghasilkan dua jenis data:

### Data kuantitatif

Digunakan untuk menghitung:

- Nilai rata-rata
- Persentase kepuasan
- Perbandingan program
- Perbandingan kelas
- Evaluasi Muallim
- Prioritas perbaikan

### Data kualitatif

Digunakan untuk memahami:

- Kritik
- Saran
- Kendala
- Pengalaman
- Hal yang perlu dipertahankan
- Hal yang perlu diperbaiki
- Ide untuk tahun berikutnya

---

# 2. Prinsip Formulir

Formulir harus:

- sederhana;
- mudah dipahami;
- mobile-first;
- tidak terlalu panjang;
- menggunakan bahasa yang sopan;
- tidak memaksa responden memberikan identitas;
- memiliki pertanyaan yang benar-benar berguna.

Target waktu pengisian:

> **5–10 menit untuk peserta dan pendamping.**

Form Muallim dan Panitia dapat sedikit lebih panjang karena sifat evaluasinya lebih mendalam.

---

# 3. Skala Penilaian Utama

Untuk sebagian besar pertanyaan penilaian digunakan skala:

| Nilai | Keterangan    |
| ----- | ------------- |
| 1     | Sangat Kurang |
| 2     | Kurang        |
| 3     | Cukup         |
| 4     | Baik          |
| 5     | Sangat Baik   |

Pada tampilan website dapat menggunakan:

**★ 1 — Sangat Kurang**
**★ 2 — Kurang**
**★ 3 — Cukup**
**★ 4 — Baik**
**★ 5 — Sangat Baik**

---

# 4. FORM PESERTA

## Bagian A — Konteks Evaluasi

### A1. Program yang diikuti

**Jenis:** Pilihan

> Program yang Anda ikuti:

- Tartil Al-Qur'an
- Tahsinul Khot / Khot Tulis
- Qira'ah
- Pembinaan Muallim

Jika peserta dapat mengikuti lebih dari satu program, sistem memungkinkan **multi-select**.

### A2. Kelas/Kelompok

**Jenis:** Pilihan

Peserta memilih kelas/kelompok yang diikuti.

### A3. Muallim

**Jenis:** Pilihan

Sistem menampilkan Muallim sesuai program dan kelas yang dipilih.

---

# 5. Evaluasi Program Peserta

Pertanyaan berikut menggunakan skala 1–5.

### P1. Kesesuaian Materi

> Materi yang diberikan sesuai dengan tujuan program yang saya ikuti.

### P2. Kejelasan Materi

> Materi mudah dipahami dan diikuti.

### P3. Metode Pembelajaran

> Metode pembelajaran yang digunakan membantu saya memahami dan meningkatkan kemampuan.

### P4. Praktik

> Porsi praktik selama kursus sudah memadai.

### P5. Waktu

> Waktu yang tersedia untuk pembelajaran sudah cukup.

### P6. Kelas

> Pembagian kelas/kelompok sudah sesuai dengan kebutuhan peserta.

### P7. Fasilitas

> Fasilitas yang disediakan mendukung proses pembelajaran.

### P8. Kesesuaian Harapan

> Kursus ini sesuai dengan harapan saya sebelum mengikuti kegiatan.

---

# 6. Evaluasi Muallim oleh Peserta

Peserta memberikan penilaian terhadap **Muallim yang dipilih sebelumnya**.

### M1. Penguasaan Materi

> Muallim menguasai materi yang disampaikan.

### M2. Kejelasan

> Muallim menjelaskan materi dengan jelas dan mudah dipahami.

### M3. Bimbingan

> Muallim memberikan bimbingan dan koreksi yang membantu perkembangan saya.

### M4. Kesabaran

> Muallim sabar dalam membimbing peserta.

### M5. Interaksi

> Muallim membangun interaksi yang baik dengan peserta.

### M6. Metode

> Cara Muallim mengajar sesuai dengan kebutuhan peserta.

### M7. Pengelolaan Kelas

> Muallim mampu mengelola kelas dengan baik.

### M8. Keteladanan

> Muallim memberikan contoh dan sikap yang baik selama kegiatan.

### M9. Penilaian Keseluruhan

> Secara keseluruhan, saya puas dengan pembelajaran yang diberikan Muallim ini.

---

# 7. Evaluasi Panitia oleh Peserta

### PA1. Informasi

> Informasi mengenai kegiatan disampaikan dengan jelas.

### PA2. Pelayanan

> Panitia memberikan pelayanan yang baik kepada peserta.

### PA3. Respons

> Panitia merespons kebutuhan atau permasalahan peserta dengan baik.

### PA4. Ketepatan Waktu

> Kegiatan berjalan sesuai dengan jadwal yang telah ditentukan.

### PA5. Koordinasi

> Koordinasi selama kegiatan berjalan dengan baik.

### PA6. Fasilitas

> Fasilitas umum yang disediakan sudah memadai.

### PA7. Konsumsi

> Konsumsi yang disediakan sudah sesuai dengan kebutuhan peserta.

### PA8. Kenyamanan

> Lingkungan dan tempat kegiatan mendukung kenyamanan peserta.

---

# 8. Evaluasi Keseluruhan Peserta

### K1. Kepuasan

> Secara keseluruhan, seberapa puas Anda mengikuti Kursus Tartil Al-Qur'an se-Madura?

**Skala 1–5**

### K2. Manfaat

> Kursus ini memberikan manfaat bagi saya.

**Skala 1–5**

### K3. Rekomendasi

> Seberapa besar kemungkinan Anda merekomendasikan kursus ini kepada orang lain?

**Skala 0–10**

### K4. Keikutsertaan Kembali

> Jika kursus ini dilaksanakan kembali tahun depan, apakah Anda bersedia mengikuti kembali?

- Sangat bersedia
- Bersedia
- Masih mempertimbangkan
- Tidak bersedia

---

# 9. Kritik dan Saran Peserta

Bagian ini menggunakan jawaban bebas.

### KS1. Hal yang perlu dipertahankan

> Apa hal terbaik dari kursus ini yang menurut Anda harus dipertahankan tahun depan?

### KS2. Hal yang perlu diperbaiki

> Apa hal yang menurut Anda paling perlu diperbaiki?

### KS3. Hal yang perlu ditambahkan

> Apa yang belum ada dan menurut Anda perlu ditambahkan pada kursus berikutnya?

### KS4. Saran utama

> Jika Anda hanya boleh memberikan satu saran untuk kursus tahun depan, apa saran Anda?

---

# 10. FORM PENDAMPING

Pendamping memiliki formulir berbeda karena sudut pandangnya adalah **mengurus dan mendampingi peserta**.

## A. Konteks

- Program/Kelompok yang didampingi
- Kelas/Kelompok
- Jumlah peserta yang didampingi

### Jumlah peserta

Pilihan:

- 1–5
- 6–10
- 11–15
- 16–20
- Lebih dari 20

---

# 11. Evaluasi Pendampingan

### PD1. Informasi

> Informasi kegiatan mudah diperoleh dan dipahami.

### PD2. Jadwal

> Jadwal kegiatan mudah dipahami dan dilaksanakan.

### PD3. Koordinasi

> Koordinasi antara pendamping dan panitia berjalan dengan baik.

### PD4. Pelayanan

> Panitia memberikan pelayanan yang baik kepada peserta yang saya dampingi.

### PD5. Penanganan Masalah

> Permasalahan peserta dapat ditangani dengan baik oleh panitia.

### PD6. Fasilitas

> Fasilitas yang diberikan kepada peserta sudah memadai.

### PD7. Program

> Program yang diikuti peserta berjalan sesuai dengan tujuan yang diharapkan.

### PD8. Pengelolaan Peserta

> Sistem pengelolaan peserta selama kegiatan sudah baik.

---

# 12. Evaluasi Program dari Pendamping

### PD9.

> Materi program sesuai dengan kebutuhan peserta.

### PD10.

> Pembagian kelas/kelompok sudah tepat.

### PD11.

> Waktu pembelajaran sudah memadai.

### PD12.

> Muallim memberikan pelayanan pembelajaran yang baik kepada peserta.

---

# 13. Evaluasi Panitia dari Pendamping

### PP1.

> Panitia mudah dihubungi ketika membutuhkan bantuan.

### PP2.

> Informasi perubahan atau pengumuman disampaikan dengan baik.

### PP3.

> Panitia mampu menangani kebutuhan peserta dengan baik.

### PP4.

> Koordinasi antara panitia dan pendamping berjalan efektif.

---

# 14. Pertanyaan Terbuka Pendamping

### PDK1.

> Apa kendala terbesar yang Anda alami selama mendampingi peserta?

### PDK2.

> Apa yang perlu diperbaiki dalam sistem pendampingan?

### PDK3.

> Apa yang perlu dipertahankan dari pelayanan panitia?

### PDK4.

> Apa saran Anda untuk penyelenggaraan tahun depan?

---

# 15. FORM MUALLIM

Muallim mengevaluasi kegiatan dari perspektif pengajar.

## A. Konteks

- Program yang diampu
- Kelas/Kelompok yang diampu

Tidak perlu nama Muallim sebagai identitas responden.

Nama Muallim hanya digunakan apabila sistem membutuhkan pemetaan evaluasi berdasarkan kelas dan Muallim.

---

# 16. Evaluasi Peserta oleh Muallim

### MU1.

> Kemampuan peserta secara umum sesuai dengan karakteristik kelas yang ditempatkan.

### MU2.

> Peserta mengikuti pembelajaran dengan baik.

### MU3.

> Peserta aktif selama proses pembelajaran.

### MU4.

> Peserta memiliki kedisiplinan yang baik.

### MU5.

> Peserta mendapatkan perkembangan selama mengikuti kursus.

### MU6.

> Jumlah peserta dalam kelas masih ideal untuk proses pembelajaran.

---

# 17. Evaluasi Materi oleh Muallim

### MM1.

> Materi yang diberikan sesuai dengan tujuan program.

### MM2.

> Urutan materi sudah baik.

### MM3.

> Tingkat kesulitan materi sesuai dengan kemampuan peserta.

### MM4.

> Waktu yang tersedia cukup untuk menyampaikan materi.

### MM5.

> Porsi praktik sudah memadai.

---

# 18. Evaluasi Metode dan Pelaksanaan

### MP1.

> Metode pembelajaran yang digunakan efektif.

### MP2.

> Sistem pembagian kelas mendukung proses pembelajaran.

### MP3.

> Sarana pembelajaran sudah memadai.

### MP4.

> Jadwal pembelajaran dapat dilaksanakan dengan baik.

### MP5.

> Koordinasi antara Muallim dan panitia berjalan dengan baik.

### MP6.

> Panitia memberikan dukungan yang cukup terhadap proses pembelajaran.

---

# 19. Self-Evaluation Muallim

Bagian ini bersifat **opsional**.

### SE1.

> Saya mampu menyampaikan materi sesuai dengan tujuan pembelajaran.

### SE2.

> Saya mampu membimbing peserta dengan baik.

### SE3.

> Saya mampu mengelola waktu pembelajaran dengan baik.

### SE4.

> Saya mampu menyesuaikan metode dengan kondisi peserta.

### SE5.

> Secara keseluruhan, saya puas dengan proses pembelajaran yang saya lakukan.

Tujuannya bukan untuk "menghakimi" Muallim, tetapi membantu refleksi internal.

---

# 20. Kritik dan Saran Muallim

### MK1.

> Apa kendala terbesar yang Anda alami selama mengajar?

### MK2.

> Apa yang perlu diperbaiki dari materi atau metode pembelajaran?

### MK3.

> Apa yang perlu diperbaiki dari sistem kelas?

### MK4.

> Apa dukungan yang menurut Anda perlu ditambahkan?

### MK5.

> Apa saran utama Anda untuk kursus tahun depan?

---

# 21. FORM PANITIA

Form Panitia dibuat lebih mendalam karena digunakan untuk evaluasi internal.

## A. Evaluasi Persiapan

### PN1.

> Persiapan kegiatan dilakukan dengan baik.

### PN2.

> Pembagian tugas panitia sudah jelas.

### PN3.

> Koordinasi sebelum kegiatan berjalan baik.

### PN4.

> Kebutuhan kegiatan dipersiapkan dengan cukup.

### PN5.

> Informasi kepada pihak yang terlibat disampaikan dengan baik.

---

# 22. Evaluasi Pelaksanaan

### PL1.

> Pelaksanaan kegiatan berjalan sesuai rencana.

### PL2.

> Jadwal kegiatan dapat dilaksanakan dengan baik.

### PL3.

> Koordinasi antarbagian berjalan efektif.

### PL4.

> Permasalahan selama kegiatan dapat ditangani dengan baik.

### PL5.

> Pelayanan kepada peserta berjalan dengan baik.

### PL6.

> Pelayanan kepada Muallim berjalan dengan baik.

### PL7.

> Fasilitas kegiatan mendukung pelaksanaan program.

---

# 23. Evaluasi 4 Program

Panitia memberikan penilaian terhadap:

### Tartil Al-Qur'an

- Pelaksanaan
- Materi
- Pengelolaan
- Waktu
- Koordinasi

### Tahsinul Khot

- Pelaksanaan
- Materi
- Pengelolaan
- Waktu
- Koordinasi

### Qira'ah

- Pelaksanaan
- Materi
- Pengelolaan
- Waktu
- Koordinasi

### Pembinaan Muallim

- Pelaksanaan
- Materi
- Pengelolaan
- Waktu
- Koordinasi

---

# 24. Evaluasi Internal Panitia

Bagian ini menggunakan konsep:

## STOP

> Apa yang sebaiknya dihentikan pada kegiatan tahun depan?

## START

> Apa yang belum dilakukan dan sebaiknya mulai dilakukan tahun depan?

## CONTINUE

> Apa yang sudah berjalan baik dan harus dipertahankan?

## IMPROVE

> Apa yang sudah dilakukan tetapi perlu ditingkatkan?

Konsep **STOP–START–CONTINUE–IMPROVE** menjadi salah satu sumber utama rekomendasi internal.

---

# 25. Kendala Panitia

### KN1.

> Apa kendala terbesar yang terjadi selama pelaksanaan?

### KN2.

> Apa penyebab utama kendala tersebut?

### KN3.

> Bagaimana kendala tersebut ditangani?

### KN4.

> Apa yang perlu dilakukan agar masalah tersebut tidak terulang tahun depan?

---

# 26. Evaluasi Keseluruhan Panitia

### PK1.

> Seberapa puas Anda terhadap pelaksanaan kegiatan secara keseluruhan?

**Skala 1–5**

### PK2.

> Seberapa efektif koordinasi panitia selama kegiatan?

**Skala 1–5**

### PK3.

> Seberapa siap panitia jika kegiatan serupa dilaksanakan kembali?

**Skala 1–5**

---

# 27. Pertanyaan Prioritas Perbaikan

Semua jenis responden dapat diberikan satu pertanyaan penting:

> **Menurut Anda, aspek apa yang paling perlu diperbaiki pada kursus tahun depan?**

Pilihan:

- Materi
- Muallim
- Metode pembelajaran
- Waktu/jadwal
- Kelas/kelompok
- Fasilitas
- Konsumsi
- Pelayanan panitia
- Informasi/komunikasi
- Pendampingan
- Lainnya

Jika memilih **Lainnya**, muncul kolom:

> Jelaskan.

---

# 28. Pertanyaan Terakhir

Semua responden dapat diberikan:

> **Apakah ada hal lain yang ingin Anda sampaikan kepada penyelenggara?**

Jawaban:

**Opsional / bebas.**

---

# 29. Logika Form Dinamis

Form tidak menampilkan semua pertanyaan kepada semua orang.

Contoh:

```text id="v30h7s"
Pilih:
PESERTA
   ↓
Pilih Program
   ↓
Pilih Kelas
   ↓
Pilih Muallim
   ↓
Pertanyaan Peserta
   ↓
Evaluasi Program
   ↓
Evaluasi Muallim
   ↓
Evaluasi Panitia
   ↓
Kritik & Saran
```

Sedangkan:

```text id="h42c2z"
Pilih:
MUALLIM
   ↓
Program
   ↓
Kelas
   ↓
Evaluasi Peserta
   ↓
Materi
   ↓
Metode
   ↓
Panitia
   ↓
Self-Evaluation
   ↓
Kritik & Saran
```

Dengan sistem dinamis, responden hanya melihat pertanyaan yang relevan.

---

# 30. Pertanyaan Khusus Berdasarkan Program

Karena empat program memiliki karakteristik berbeda, pada tahap berikutnya sistem dapat memiliki pertanyaan khusus.

## Tartil Al-Qur'an

Fokus:

- Kelancaran membaca
- Tajwid
- Makharijul huruf
- Sifat huruf
- Praktik
- Koreksi bacaan

## Tahsinul Khot / Khot Tulis

Fokus:

- Materi tulisan
- Metode latihan
- Contoh tulisan
- Praktik
- Bimbingan
- Alat dan fasilitas

## Qira'ah

Fokus:

- Materi qira'ah
- Teknik
- Irama
- Praktik
- Bimbingan
- Pengembangan kemampuan

## Pembinaan Muallim

Fokus:

- Materi pembinaan
- Metode
- Kompetensi mengajar
- Pengelolaan kelas
- Praktik mengajar
- Pengembangan kompetensi Muallim

Pertanyaan khusus ini akan disusun lebih detail setelah struktur pertanyaan umum disetujui.

---

# 31. Prinsip Wajib dan Opsional

Tidak semua pertanyaan harus wajib.

### Wajib

- Jenis responden
- Program yang relevan
- Kelas yang relevan
- Pertanyaan utama evaluasi
- Penilaian keseluruhan

### Opsional

- Kritik
- Saran
- Identitas tambahan jika suatu saat diperlukan
- Pertanyaan yang tidak relevan bagi responden

Tujuannya agar responden tidak merasa dipaksa memberikan informasi pribadi atau jawaban yang tidak mereka ketahui.

---

# 32. Validasi

Sebelum dikirim, sistem memeriksa:

- Program sudah dipilih.
- Kelas sudah dipilih.
- Muallim sudah dipilih jika diperlukan.
- Pertanyaan wajib sudah dijawab.
- Rating berada pada rentang yang valid.
- Jawaban teks tidak melebihi batas karakter.

Jika belum lengkap:

> **"Masih ada beberapa pertanyaan yang belum dijawab."**

Sistem menunjukkan bagian yang harus dilengkapi.

---

# 33. Konfirmasi Sebelum Pengiriman

Sebelum data disimpan:

> **Apakah Anda yakin ingin mengirim evaluasi ini?**

Kemudian:

**[Kembali]**

**[Kirim Evaluasi]**

Setelah berhasil:

> **Terima kasih atas evaluasi Anda.**

> Masukan Anda akan menjadi bahan evaluasi dan pengembangan Kursus Tartil Al-Qur'an se-Madura pada kegiatan berikutnya.

---

# 34. Prinsip Pengolahan Jawaban

Rating 1–5 akan disimpan sebagai angka:

```text
1 = Sangat Kurang
2 = Kurang
3 = Cukup
4 = Baik
5 = Sangat Baik
```

Dengan demikian Firebase dapat menghitung:

```text
Rata-rata
Persentase
Distribusi
Perbandingan
```

Contoh:

```text
Muallim
4.72 / 5

Materi
4.51 / 5

Fasilitas
4.20 / 5
```

---

# 35. Kategori Prioritas

Hasil evaluasi nantinya dapat dikelompokkan:

### 🟢 Kekuatan

Nilai tinggi dan konsisten.

### 🟡 Perlu Perhatian

Nilai sedang atau terdapat banyak masukan.

### 🔴 Prioritas Perbaikan

Nilai rendah atau banyak kritik yang berulang.

Sistem tidak mengambil keputusan secara mutlak berdasarkan angka saja. Data komentar tetap perlu dibaca oleh tim evaluasi.

---

# 36. Prinsip Etika Evaluasi

Sistem harus memberikan informasi kepada responden bahwa:

> Evaluasi digunakan sebagai bahan perbaikan dan pengembangan kegiatan.

> Responden tidak diwajibkan mencantumkan identitas pribadi.

> Kritik dan saran diharapkan disampaikan secara objektif, sopan, dan konstruktif.

> Data evaluasi digunakan untuk kepentingan evaluasi kegiatan.

---

# 37. Ringkasan Form

| Responden  | Fokus Utama                          | Perkiraan Durasi |
| ---------- | ------------------------------------ | ---------------: |
| Peserta    | Program, Muallim, panitia, fasilitas |        5–8 menit |
| Pendamping | Pendampingan, pelayanan, koordinasi  |        5–8 menit |
| Muallim    | Peserta, materi, metode, panitia     |       7–10 menit |
| Panitia    | Persiapan, pelaksanaan, koordinasi   |       8–12 menit |

Durasi tersebut merupakan target desain dan dapat disesuaikan setelah uji coba.

---

# 38. Catatan Penting

Jumlah pertanyaan pada PRD ini **belum dianggap sebagai jumlah final yang harus tampil sekaligus**.

Sistem akan menggunakan:

> **Conditional Form / Dynamic Form**

Sehingga pertanyaan yang muncul menyesuaikan:

**Jenis responden → Program → Kelas → Muallim → konteks evaluasi.**

Hal ini menjaga agar formulir tetap ringan meskipun sistem memiliki banyak aspek evaluasi.

---

# 39. Output Fase 3

Setelah Fase 3 selesai, sistem telah memiliki:

- Struktur form Peserta
- Struktur form Pendamping
- Struktur form Muallim
- Struktur form Panitia
- Skala penilaian
- Pertanyaan terbuka
- Evaluasi individual Muallim
- Evaluasi keseluruhan
- Pertanyaan program
- STOP–START–CONTINUE–IMPROVE
- Validasi form
- Conditional form
- Prinsip anonimitas
- Dasar perhitungan statistik

## Status Fase 3

**Struktur pertanyaan:** ✅
**Peserta:** ✅
**Pendamping:** ✅
**Muallim:** ✅
**Panitia:** ✅
**Evaluasi individual Muallim:** ✅
**Evaluasi program:** ✅
**Kritik & saran:** ✅
**Skala penilaian:** ✅
**Form dinamis:** ✅
**Validasi:** ✅
**Prinsip privasi:** ✅

# PRD — Sistem Evaluasi Kursus Tartil Al-Qur'an se-Madura

# FASE 4 — UI/UX & USER FLOW

## 1. Tujuan Fase

Fase 4 bertujuan merancang pengalaman pengguna dan struktur halaman website berdasarkan empat jenis responden:

1. Peserta
2. Pendamping
3. Muallim
4. Panitia

Website harus:

- modern;
- elegan;
- responsif;
- mobile-first;
- ringan;
- mudah digunakan;
- tidak membingungkan;
- memiliki identitas Islami yang profesional;
- nyaman digunakan pada smartphone.

---

# 2. Konsep Desain

Konsep visual:

> **Modern Islamic • Clean • Elegant • Professional**

Website tidak dibuat terlalu ramai dengan ornamen Islami.

Kesan yang ingin dibangun:

**Resmi → terpercaya → tenang → modern → mudah digunakan.**

---

# 3. Identitas Visual

## Warna Utama

Palet warna menggunakan nuansa:

- Emerald / Hijau Islami
- Putih
- Slate / Abu-abu gelap
- Gold sebagai aksen kecil

Contoh:

```text id="e4svb7"
Primary
Emerald

Background
White / Slate-50

Text
Slate-900

Secondary
Slate-500

Accent
Gold
```

Gold hanya digunakan sebagai aksen, bukan warna dominan.

---

# 4. Tipografi

Gunakan font yang mudah dibaca.

### Heading

Font modern dan tegas.

### Body

Font sederhana dengan tingkat keterbacaan tinggi.

Untuk teks Arab:

> Gunakan font Arab yang mendukung **RTL dan Unicode dengan baik**.

Teks Arab dapat digunakan pada elemen identitas seperti:

> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

Namun jangan terlalu banyak agar website tetap modern.

---

# 5. Struktur Website

Website dibagi menjadi dua area utama:

```text id="j1e7pr"
PUBLIC
│
├── Landing Page
├── Pemilihan Peran
├── Form Evaluasi
├── Review
└── Success
```

dan:

```text id="e5x3hs"
INTERNAL
│
└── Dashboard
    ├── Overview
    ├── Program
    ├── Kelas
    ├── Muallim
    ├── Evaluasi
    ├── Kritik & Saran
    └── Laporan
```

---

# 6. Landing Page

URL:

```text id="2rcd1e"
/
```

Landing page menjadi halaman pertama ketika seseorang membuka website.

## Struktur

### Header

Logo:

> **Kursus Tartil Al-Qur'an se-Madura**

Navigasi sederhana:

- Beranda
- Tentang Evaluasi
- Mulai Evaluasi

---

## Hero Section

Contoh:

> **Suara Anda untuk Perbaikan Kursus**

Subjudul:

> Evaluasi seluruh rangkaian Kursus Tartil Al-Qur'an se-Madura sebagai bahan perbaikan dan pengembangan kegiatan di tahun berikutnya.

Tombol utama:

**Mulai Evaluasi**

Tombol sekunder:

**Tentang Evaluasi**

---

# 7. Informasi Evaluasi

Di bawah hero:

### 11 Sesi

> Evaluasi dilakukan setelah seluruh rangkaian kegiatan selesai.

### 4 Program

> Tartil • Tahsinul Khot • Qira'ah • Pembinaan Muallim

### 4 Perspektif

> Peserta • Pendamping • Muallim • Panitia

---

# 8. Pesan Privasi

Landing page harus menampilkan informasi singkat:

> **Privasi Anda Kami Jaga**

> Evaluasi ini tidak memerlukan login dan tidak meminta data pribadi seperti nama, NIK, atau nomor telepon.

Ini penting untuk meningkatkan keberanian responden memberikan kritik secara jujur.

---

# 9. Halaman Pemilihan Peran

URL:

```text id="8t5m86"
/evaluasi
```

Judul:

> **Anda mengikuti kegiatan sebagai apa?**

Empat kartu:

```text id="j8v2r5"
┌──────────────────────┐
│ 👨‍🎓                 │
│ Peserta              │
│ Berikan evaluasi     │
│ pengalaman Anda      │
└──────────────────────┘

┌──────────────────────┐
│ 👥                   │
│ Pendamping           │
│ Evaluasi pengalaman  │
│ mendampingi peserta  │
└──────────────────────┘

┌──────────────────────┐
│ 👨‍🏫                 │
│ Muallim              │
│ Evaluasi dari sisi   │
│ pengajar             │
└──────────────────────┘

┌──────────────────────┐
│ 🧑‍💼                 │
│ Panitia              │
│ Evaluasi pelaksanaan │
│ kegiatan             │
└──────────────────────┘
```

Pengguna cukup memilih satu.

---

# 10. Halaman Konteks Evaluasi

Setelah memilih peran, sistem menentukan data yang diperlukan.

Contoh Peserta:

```text id="29i5hd"
Program
[ Pilih program ▼ ]

Kelas
[ Pilih kelas ▼ ]

Muallim
[ Pilih Muallim ▼ ]
```

Dropdown bersifat dinamis.

Jika:

> Program = Tartil

maka kelas yang muncul hanya kelas Tartil.

Jika:

> Kelas = A

maka Muallim yang muncul hanya Muallim kelas A.

---

# 11. Dynamic Selection

Hubungan:

```text id="3m96k7"
Program
   ↓
Kelas
   ↓
Muallim
```

Contoh:

```text id="xq0a7g"
Tartil
   ↓
Kelas A
   ↓
Ustadz Ahmad
```

Sistem tidak menampilkan pilihan yang tidak relevan.

---

# 12. Progress Indicator

Pada halaman form terdapat progress bar.

Contoh:

```text id="g5g9e3"
Evaluasi Anda

●━━━━━━━━○━━━━━━━━○━━━━━━━━○

Konteks    Program    Muallim    Umum
```

Progress berubah sesuai jenis responden.

Tujuannya agar responden mengetahui:

> "Saya sudah sampai mana?"

---

# 13. Struktur Form Peserta

Peserta melihat:

```text id="3r4l6q"
1. Konteks
2. Evaluasi Program
3. Evaluasi Muallim
4. Evaluasi Panitia
5. Evaluasi Keseluruhan
6. Kritik & Saran
7. Review
8. Selesai
```

Setiap bagian dapat dibuat sebagai **step form**, bukan satu halaman yang sangat panjang.

---

# 14. Tampilan Pertanyaan Rating

Jangan menggunakan dropdown.

Gunakan pilihan visual:

```text id="6a8vkm"
Bagaimana kualitas materi?

   1       2       3       4       5
   ○       ○       ○       ○       ○

Sangat    Kurang  Cukup    Baik   Sangat
Kurang                         Baik
```

Pada smartphone:

```text id="x2ynxq"
        ★
        1

        ★
        2

        ★
        3

        ★
        4

        ★
        5
```

Namun layout horizontal lebih ideal jika layar cukup lebar.

---

# 15. UX Rating

Ketika pengguna memilih:

**5**

tampilan pilihan berubah menjadi aktif.

Sistem memberikan feedback visual.

Pengguna tidak perlu menekan tombol tambahan setelah setiap pertanyaan.

---

# 16. Pertanyaan Teks

Untuk kritik dan saran:

```text id="t8x8io"
Apa yang menurut Anda paling perlu
diperbaiki?

┌──────────────────────────────────┐
│                                  │
│                                  │
│                                  │
└──────────────────────────────────┘

0 / 500 karakter
```

Batas karakter dapat diterapkan untuk menjaga kualitas data.

---

# 17. Navigasi Form

Bagian bawah:

```text id="m5v6th"
[ ← Kembali ]              [ Lanjut → ]
```

Pada halaman terakhir:

```text id="4cx8ax"
[ ← Kembali ]          [ Review Evaluasi ]
```

---

# 18. Halaman Review

Sebelum dikirim, responden melihat ringkasan:

> **Periksa kembali evaluasi Anda**

Contoh:

```text id="brh4tx"
Program
Tartil Al-Qur'an

Kelas
A

Muallim
Ustadz Ahmad

Evaluasi Program
████████████ 4.6 / 5

Evaluasi Muallim
████████████ 4.8 / 5
```

Tidak perlu menampilkan seluruh jawaban satu per satu jika terlalu panjang.

Namun dapat disediakan:

> **Periksa jawaban**

---

# 19. Konfirmasi Pengiriman

Saat menekan:

**Kirim Evaluasi**

muncul dialog:

> **Kirim evaluasi sekarang?**

> Setelah dikirim, jawaban tidak dapat diubah kembali.

Tombol:

**Batal**

**Kirim Evaluasi**

---

# 20. Success Page

Setelah berhasil:

```text id="p7c8d2"
       ✓

Terima Kasih

Evaluasi Anda telah berhasil dikirim.

Masukan Anda akan menjadi bahan evaluasi
dan pengembangan Kursus Tartil Al-Qur'an
se-Madura pada kegiatan berikutnya.

[ Kembali ke Beranda ]
```

Tidak perlu menampilkan data evaluasi.

---

# 21. Form Pendamping

Flow:

```text id="a4g7x3"
Beranda
 ↓
Pendamping
 ↓
Program/Kelompok
 ↓
Kelas
 ↓
Evaluasi Pendampingan
 ↓
Evaluasi Program
 ↓
Evaluasi Panitia
 ↓
Kendala
 ↓
Kritik & Saran
 ↓
Review
 ↓
Selesai
```

---

# 22. Form Muallim

Flow:

```text id="j8v1b2"
Beranda
 ↓
Muallim
 ↓
Program
 ↓
Kelas
 ↓
Evaluasi Peserta
 ↓
Evaluasi Materi
 ↓
Evaluasi Metode
 ↓
Evaluasi Panitia
 ↓
Self Evaluation
 ↓
Kritik & Saran
 ↓
Review
 ↓
Selesai
```

---

# 23. Form Panitia

Flow:

```text id="m2k9a7"
Beranda
 ↓
Panitia
 ↓
Evaluasi Persiapan
 ↓
Evaluasi Pelaksanaan
 ↓
Evaluasi Program
 ↓
Evaluasi Koordinasi
 ↓
STOP
 ↓
START
 ↓
CONTINUE
 ↓
IMPROVE
 ↓
Review
 ↓
Selesai
```

---

# 24. Mobile First

Sebagian besar responden kemungkinan menggunakan smartphone.

Karena itu desain harus diprioritaskan:

```text id="5b6z1n"
Mobile
  ↓
Tablet
  ↓
Desktop
```

Bukan sebaliknya.

Target:

- tombol minimal nyaman disentuh;
- input tidak terlalu kecil;
- teks mudah dibaca;
- tidak perlu zoom;
- navigasi sederhana.

---

# 25. Desktop Layout

Pada desktop, form dapat menggunakan:

```text id="k0j8s4"
┌─────────────────────────────────────────────┐
│ Logo                             Progress   │
├─────────────────────────────────────────────┤
│                                             │
│             Pertanyaan                     │
│                                             │
│      ┌──────────────────────────┐           │
│      │                          │           │
│      │       Pilihan            │           │
│      │                          │           │
│      └──────────────────────────┘           │
│                                             │
├─────────────────────────────────────────────┤
│ Kembali                         Lanjut       │
└─────────────────────────────────────────────┘
```

---

# 26. Dashboard Internal

Dashboard mempunyai desain berbeda dari website publik.

Konsep:

> **Administrative Dashboard**

Layout:

```text id="x4h6r2"
┌──────────────┬─────────────────────────────┐
│              │                             │
│    LOGO      │        Dashboard            │
│              │                             │
│ Dashboard    │   Statistik                 │
│ Program      │                             │
│ Kelas        │   ┌────┐ ┌────┐ ┌────┐     │
│ Muallim      │   │327 │ │4.6 │ │ 4  │     │
│ Evaluasi     │   └────┘ └────┘ └────┘     │
│ Kritik       │                             │
│ Laporan      │        Grafik               │
│              │                             │
└──────────────┴─────────────────────────────┘
```

---

# 27. Dashboard Overview

Card utama:

### Total Responden

> 327

### Kepuasan Keseluruhan

> 4.62 / 5

### Program

> 4

### Evaluasi Masuk

> 327

### Kritik & Saran

> 86

---

# 28. Grafik Dashboard

Grafik utama:

### Kepuasan berdasarkan program

```text id="3m7w9p"
Tartil          █████████████ 4.72
Tahsinul Khot   ████████████  4.55
Qira'ah         ████████████  4.60
Pembinaan       █████████████ 4.70
```

### Berdasarkan jenis responden

```text id="7q3g4h"
Peserta       4.61
Pendamping    4.72
Muallim       4.55
Panitia       4.60
```

---

# 29. Dashboard Program

Ketika administrator memilih:

> **Tartil Al-Qur'an**

muncul:

- jumlah responden;
- rata-rata kepuasan;
- evaluasi materi;
- evaluasi metode;
- evaluasi fasilitas;
- evaluasi Muallim;
- kritik;
- saran.

---

# 30. Dashboard Muallim

Daftar:

| Muallim  | Program | Kelas | Nilai | Responden |
| -------- | ------- | ----- | ----: | --------: |
| Ustadz A | Tartil  | A     |  4.72 |        27 |
| Ustadz B | Tartil  | B     |  4.61 |        31 |
| Ustadz C | Qira'ah | A     |  4.80 |        22 |

Jika responden < 5:

> **Hasil belum ditampilkan**

---

# 31. Detail Muallim

Administrator dapat melihat:

### Nilai keseluruhan

> 4.72 / 5

### Aspek

- Penguasaan materi — 4.80
- Kejelasan — 4.70
- Bimbingan — 4.75
- Kesabaran — 4.85
- Interaksi — 4.60
- Pengelolaan kelas — 4.65

### Komentar

Ditampilkan secara hati-hati dan hanya kepada pengguna internal yang memiliki hak akses.

---

# 32. Dashboard Kritik & Saran

Kritik tidak hanya ditampilkan sebagai daftar panjang.

Dapat diberikan filter:

```text id="s6q9l2"
Semua
Peserta
Pendamping
Muallim
Panitia
```

Filter tambahan:

```text id="5g4v9c"
Program
Kelas
Kategori
```

Kategori:

- Materi
- Muallim
- Fasilitas
- Jadwal
- Panitia
- Konsumsi
- Pendampingan
- Lainnya

---

# 33. Prioritas Perbaikan

Dashboard dapat menampilkan:

## 🔴 Prioritas Tinggi

Aspek dengan nilai rendah atau banyak kritik.

## 🟡 Perlu Perhatian

Aspek yang belum optimal.

## 🟢 Dipertahankan

Aspek dengan nilai tinggi dan komentar positif.

Tujuannya membuat hasil evaluasi lebih mudah dipahami oleh pengambil keputusan.

---

# 34. Responsive Dashboard

Dashboard harus tetap dapat digunakan pada:

- Desktop
- Laptop
- Tablet

Mobile dashboard dapat dibuat lebih sederhana.

Untuk pekerjaan analisis serius, desktop menjadi tampilan utama.

---

# 35. Navigasi Dashboard

Sidebar:

```text id="n8v7t2"
Dashboard
│
├── Ringkasan
├── Program
├── Kelas
├── Muallim
├── Responden
├── Kritik & Saran
├── Analisis
└── Laporan
```

---

# 36. Komponen UI

Komponen yang digunakan:

- Button
- Card
- Select
- Radio
- Rating
- Textarea
- Progress Bar
- Modal
- Toast
- Alert
- Table
- Chart
- Badge
- Tabs
- Dropdown
- Empty State
- Loading State
- Error State

Semua komponen dibuat reusable.

---

# 37. Loading State

Ketika Firebase sedang mengambil data:

```text id="5i8w4m"
Memuat data evaluasi...
```

Dashboard tidak boleh terlihat rusak atau kosong tanpa penjelasan.

---

# 38. Empty State

Jika belum ada evaluasi:

> **Belum ada data evaluasi**

> Data akan muncul setelah responden mulai mengisi formulir.

---

# 39. Error State

Jika terjadi masalah:

> **Terjadi kesalahan**

> Data belum dapat dimuat. Silakan coba kembali.

Tombol:

**Coba Lagi**

---

# 40. Accessibility

Website harus memperhatikan:

- kontras warna;
- ukuran teks;
- keyboard navigation;
- label input;
- aria-label;
- fokus elemen;
- ukuran tombol;
- pesan error yang jelas.

---

# 41. Prinsip UX Terpenting

Jangan membuat responden berpikir:

> "Ini formulirnya panjang sekali."

Sebaliknya:

> "Oh, ternyata cepat selesai."

Karena itu pertanyaan harus ditampilkan secara bertahap.

---

# 42. Arsitektur Halaman

Struktur route yang direncanakan:

```text id="n6u4l8"
/                         → Landing Page
/tentang                  → Informasi Evaluasi
/evaluasi                 → Pilih Peran
/evaluasi/peserta         → Form Peserta
/evaluasi/pendamping      → Form Pendamping
/evaluasi/muallim         → Form Muallim
/evaluasi/panitia         → Form Panitia
/evaluasi/review          → Review
/evaluasi/selesai         → Success

/admin                    → Dashboard
/admin/program            → Program
/admin/kelas              → Kelas
/admin/muallim            → Muallim
/admin/evaluasi           → Evaluasi
/admin/kritik             → Kritik & Saran
/admin/analisis           → Analisis
/admin/laporan            → Laporan
```

---

# 43. State Form

Data form sementara tidak langsung dikirim ke Firebase pada setiap pertanyaan.

Konsep:

```text id="q7x2h3"
User mengisi
     ↓
Local Form State
     ↓
Review
     ↓
Submit
     ↓
Firebase
```

Hal ini mengurangi data setengah jadi di database.

---

# 44. Anti Double Submit

Setelah tombol:

> Kirim Evaluasi

ditekan:

```text id="f4m7n2"
Kirim Evaluasi...
```

Tombol dinonaktifkan sementara.

Tujuannya mencegah satu responden mengirim data dua kali karena double-click atau koneksi lambat.

---

# 45. Halaman Berhasil

Setelah Firebase berhasil menyimpan:

```text id="k5m8p2"
✓ Evaluasi berhasil dikirim

Terima kasih telah memberikan
masukan untuk pengembangan
Kursus Tartil Al-Qur'an se-Madura.

[ Kembali ke Beranda ]
```

---

# 46. Prinsip Desain Keseluruhan

Website harus terasa:

**Resmi**

karena digunakan untuk evaluasi kegiatan besar.

**Islami**

tetapi tidak berlebihan.

**Modern**

karena merupakan sistem digital.

**Sederhana**

karena digunakan banyak orang dengan tingkat kemampuan teknologi yang berbeda.

**Terpercaya**

karena responden memberikan kritik dan evaluasi.

**Privat**

karena sebagian data bersifat sensitif.

---

# 47. Output Fase 4

Setelah fase ini, rancangan UI/UX memiliki:

- Landing Page
- Halaman informasi
- Pemilihan peran
- Pemilihan program
- Pemilihan kelas
- Pemilihan Muallim
- Dynamic Form
- Progress indicator
- Rating UI
- Textarea
- Review
- Confirmation
- Success Page
- Dashboard
- Statistik
- Grafik
- Analisis Muallim
- Kritik & Saran
- Responsive Design
- Loading State
- Error State
- Empty State

---

# 48. Status Fase 4

| Komponen                  | Status |
| ------------------------- | ------ |
| Landing Page              | ✅     |
| Pemilihan Peran           | ✅     |
| Form Peserta              | ✅     |
| Form Pendamping           | ✅     |
| Form Muallim              | ✅     |
| Form Panitia              | ✅     |
| Dynamic Form              | ✅     |
| Progress Indicator        | ✅     |
| Review                    | ✅     |
| Success Page              | ✅     |
| Dashboard                 | ✅     |
| Grafik                    | ✅     |
| Analisis Muallim          | ✅     |
| Kritik & Saran            | ✅     |
| Responsive                | ✅     |
| Accessibility             | ✅     |
| Loading/Error/Empty State | ✅     |

---

# 49. Prinsip Akhir Fase 4

> **"Responden cukup fokus memberikan evaluasi; sistem yang bekerja mengatur, menyimpan, menghitung, dan menyajikan hasilnya."**

Fase 4 menjadi jembatan antara **pertanyaan evaluasi** dan **implementasi teknis**.

---

# FASE BERIKUTNYA

## FASE 5 — Firebase & Struktur Data

Pada fase berikutnya kita akan menentukan secara detail:

- Struktur Firestore
- Collection
- Document
- Field
- Relasi Program → Kelas → Muallim
- Struktur jawaban evaluasi
- Struktur kritik & saran
- Struktur statistik
- Firebase Authentication untuk admin
- Firestore Security Rules
- Anti-spam
- Pencegahan manipulasi data
- Timestamp
- Struktur yang efisien agar Firebase tidak boros read/write

Fase 5 ini penting karena kita sudah sepakat **tidak menggunakan Laravel dan langsung menggunakan Firebase**.

# PRD — Sistem Evaluasi Kursus Tartil Al-Qur'an se-Madura

# FASE 5 — FIREBASE & STRUKTUR DATA

## 1. Tujuan Fase

Fase 5 menentukan arsitektur backend menggunakan Firebase secara langsung.

Sistem tidak menggunakan:

- Laravel
- PHP Backend
- MySQL
- Supabase

Arsitektur utama:

```text
React + Vite
      │
      ▼
Firebase SDK
      │
      ├── Firebase Authentication
      │       └── Admin Dashboard
      │
      ├── Cloud Firestore
      │       ├── Program
      │       ├── Kelas
      │       ├── Muallim
      │       ├── Evaluasi
      │       └── Kritik & Saran
      │
      └── Security Rules
```

---

# 2. Prinsip Arsitektur

Sistem dibagi menjadi dua jalur.

## Jalur Responden

```text
Responden
   ↓
Website Publik
   ↓
Firebase
   ↓
Submit Evaluasi
```

Responden:

- tidak login;
- tidak membaca database;
- tidak dapat melihat evaluasi orang lain;
- hanya mengirim data yang diperlukan.

## Jalur Admin

```text
Admin
   ↓
Login Firebase Authentication
   ↓
Dashboard
   ↓
Firestore
   ↓
Analisis
```

Admin dapat membaca data sesuai hak akses.

---

# 3. Firebase Services

Firebase yang digunakan:

### Firebase Authentication

Untuk:

> **Admin Dashboard**

Bukan untuk peserta.

### Cloud Firestore

Untuk:

- konfigurasi program;
- kelas;
- Muallim;
- pertanyaan;
- evaluasi;
- kritik dan saran;
- konfigurasi sistem.

### Firebase Hosting / Vercel

Frontend React dapat dideploy ke:

- Vercel; atau
- Firebase Hosting.

Untuk proyek ini **Vercel tetap dapat digunakan**, sedangkan Firebase menjadi backend.

---

# 4. Struktur Firestore

Struktur awal:

```text id="g9c5n1"
Firestore
│
├── programs
│
├── classes
│
├── muallims
│
├── questions
│
├── evaluations
│
├── feedback
│
└── settings
```

---

# 5. Collection: `programs`

Collection ini menyimpan empat program kursus.

Contoh:

```text id="3x2j5f"
programs
│
├── tartil
├── tahsin-khot
├── qoriah
└── pembinaan-muallim
```

Document:

```text id="q9k3l1"
{
  name: "Tartil Al-Qur'an",
  code: "TARTIL",
  description: "Program pembelajaran Tartil Al-Qur'an",
  isActive: true,
  order: 1
}
```

---

# 6. Collection: `classes`

Collection ini menyimpan kelas/kelompok.

Contoh:

```text id="4f8m2r"
classes
│
├── class-001
├── class-002
├── class-003
└── ...
```

Field:

```text id="6j9q3c"
{
  programId: "tartil",
  name: "Kelas A",
  code: "T-A",
  muallimIds: ["muallim-001"],
  isActive: true
}
```

Hubungan:

```text id="k7x8v1"
Program
   ↓
Class
   ↓
Muallim
```

---

# 7. Collection: `muallims`

Data Muallim yang digunakan sebagai data master.

Contoh:

```text id="m2k8p4"
{
  name: "Ustadz Ahmad",
  programIds: ["tartil"],
  classIds: ["class-001"],
  isActive: true
}
```

Data ini diperlukan karena peserta perlu memilih Muallim yang dievaluasi.

---

# 8. Catatan Privasi Muallim

Nama Muallim memang disimpan.

Namun:

> **Nama Muallim bukan identitas responden.**

Data ini adalah data penyelenggaraan yang diperlukan untuk analisis.

Sementara responden tetap tidak memiliki:

- nama;
- nomor HP;
- email;
- nomor peserta.

---

# 9. Collection: `questions`

Pertanyaan evaluasi dapat disimpan secara terstruktur.

Contoh:

```text id="q1"
{
  code: "P-MAT-01",
  role: "peserta",
  category: "program",
  question: "Materi yang diberikan sesuai dengan tujuan program.",
  type: "rating",
  required: true,
  order: 1,
  isActive: true
}
```

Keuntungan:

- pertanyaan dapat diubah tanpa mengubah kode aplikasi;
- admin dapat mengaktifkan/nonaktifkan pertanyaan;
- pertanyaan dapat dikelompokkan;
- sistem lebih fleksibel.

---

# 10. Kategori Pertanyaan

Kategori awal:

```text id="v5f2s8"
program
muallim
panitia
pendampingan
peserta
materi
metode
fasilitas
waktu
koordinasi
keseluruhan
kritik
saran
self-evaluation
```

---

# 11. Collection: `evaluations`

Ini merupakan collection utama.

Setiap pengiriman formulir menghasilkan **satu dokumen evaluasi**.

Contoh:

```text id="y3k8m2"
evaluations
│
├── evaluation-001
├── evaluation-002
├── evaluation-003
└── ...
```

Contoh document:

```text id="z7p4x9"
{
  role: "peserta",

  programId: "tartil",

  classId: "class-001",

  muallimId: "muallim-001",

  submittedAt: Timestamp,

  answers: {
    "P-MAT-01": 5,
    "P-MAT-02": 4,
    "M-01": 5,
    "PA-01": 4
  }
}
```

---

# 12. Struktur Jawaban

Jawaban disimpan berdasarkan `questionId` atau `questionCode`.

Contoh:

```text id="q8n5c2"
answers: {
  "P-MAT-01": 5,
  "P-MAT-02": 4,
  "P-MAT-03": 5,
  "M-01": 5,
  "M-02": 4
}
```

Keuntungannya:

> Tidak perlu membuat field database baru untuk setiap pertanyaan.

Jika pertanyaan berubah, struktur database tetap dapat digunakan.

---

# 13. Jawaban Teks

Contoh:

```text id="h7m3v1"
answers: {
  "KS-01": "Waktu praktik sebaiknya ditambah.",
  "KS-02": "Fasilitas sudah baik."
}
```

---

# 14. Collection: `feedback`

Kritik dan saran dapat dipisahkan dari evaluasi utama agar lebih mudah dikelola.

Contoh:

```text id="b5q9x2"
feedback
│
├── feedback-001
├── feedback-002
└── feedback-003
```

Document:

```text id="r6m4z8"
{
  role: "peserta",

  programId: "tartil",

  classId: "class-001",

  category: "fasilitas",

  type: "saran",

  message: "Sebaiknya ruang belajar diperluas.",

  submittedAt: Timestamp
}
```

---

# 15. Mengapa Feedback Dipisahkan?

Karena dashboard nantinya membutuhkan fitur:

- filter kritik;
- filter saran;
- filter program;
- filter responden;
- pencarian;
- kategorisasi.

Pemisahan membuat pengelolaan data lebih mudah.

---

# 16. Data yang Tidak Disimpan

Sistem tidak menyimpan:

```text id="7s2p4m"
❌ Nama peserta
❌ Nomor peserta
❌ NIK
❌ Nomor HP
❌ Email peserta
❌ Alamat
❌ Akun peserta
❌ Password peserta
```

Yang disimpan hanya konteks evaluasi dan jawabannya.

---

# 17. Timestamp

Setiap evaluasi memiliki:

```text id="f5k8x2"
submittedAt
```

Menggunakan Firebase Server Timestamp.

Contoh:

```text id="v8j3m6"
submittedAt: serverTimestamp()
```

Tujuannya agar waktu tidak berasal dari jam perangkat pengguna.

---

# 18. Status Evaluasi

Setiap evaluasi dapat memiliki:

```text id="m7c2q9"
status: "submitted"
```

Status awal yang digunakan:

```text id="h4p9x7"
submitted
reviewed
archived
```

Namun responden hanya akan menghasilkan status:

> `submitted`

Status lain digunakan untuk pengelolaan internal.

---

# 19. Collection: `settings`

Digunakan untuk konfigurasi global.

Contoh:

```text id="x5k8m1"
settings/general
```

Data:

```text id="w2q7n4"
{
  eventName: "Kursus Tartil Al-Qur'an se-Madura",
  year: 2026,
  evaluationOpen: true,
  minResponsesForIndividualResult: 5
}
```

---

# 20. Konfigurasi Evaluasi

Dengan settings, admin dapat menentukan:

### Evaluasi dibuka

```text
evaluationOpen: true
```

### Evaluasi ditutup

```text
evaluationOpen: false
```

Jika ditutup:

> **Evaluasi telah ditutup.**

Form tidak dapat dikirim.

---

# 21. Periode Evaluasi

Sistem dapat menggunakan:

```text id="k7m2v5"
evaluationStart
evaluationEnd
```

Contoh:

```text id="j5x8p3"
evaluationStart: 2026-08-15
evaluationEnd: 2026-08-25
```

Website dapat otomatis:

> membuka formulir ketika periode dimulai;

dan:

> menutup formulir ketika periode berakhir.

---

# 22. Admin Authentication

Admin menggunakan:

> **Firebase Authentication**

Metode yang disarankan:

**Email + Password**

Responden tidak menggunakan Authentication.

---

# 23. Struktur Admin

Pada tahap awal:

```text id="c6m9r2"
Admin
│
└── Firebase Authentication
        │
        ▼
     Dashboard
```

Jika nantinya dibutuhkan beberapa tingkatan admin, sistem dapat dikembangkan menjadi:

```text id="p7x3k8"
Super Admin
   │
   ├── Admin Evaluasi
   └── Viewer
```

Namun implementasi role tersebut dapat dilakukan setelah kebutuhan akses final ditetapkan.

---

# 24. Firestore Security Rules

Prinsip utama:

## Public

Boleh:

> **CREATE evaluation**

Tidak boleh:

> READ evaluations

Tidak boleh:

> UPDATE evaluations

Tidak boleh:

> DELETE evaluations

---

# 25. Konsep Security Rules

Secara konseptual:

```text id="q4v7m9"
evaluations

CREATE → Public ✓
READ   → Admin ✓
UPDATE → Admin ✓
DELETE → Admin ✓
```

Untuk responden:

```text id="m8x2p5"
Public
   ↓
CREATE
   ↓
Firestore
```

Tidak ada jalur:

```text id="k5r9n3"
Public
   ↓
READ
   ↓
Semua Evaluasi
```

---

# 26. Feedback Security

Prinsip yang sama:

```text id="n6p3v8"
feedback

CREATE → Public ✓
READ   → Admin ✓
UPDATE → Admin ✓
DELETE → Admin ✓
```

---

# 27. Master Data Security

Untuk:

- programs
- classes
- muallims
- questions
- settings

Public hanya boleh membaca data yang memang diperlukan oleh formulir.

Contoh:

```text id="s7k2m5"
Public
  ↓
READ programs ✓
READ classes ✓
READ muallims ✓
```

Tetapi tidak boleh mengubah.

```text id="c9x4p1"
Public
  ↓
WRITE programs ✕
WRITE classes ✕
WRITE muallims ✕
```

---

# 28. Admin Master Data

Admin dapat:

```text id="j2m8q6"
Create
Read
Update
Delete
```

untuk data master sesuai hak akses.

Contoh:

Admin menambahkan Muallim baru:

```text id="v5x7n3"
Nama:
Ustadz Abdullah

Program:
Tartil

Kelas:
B
```

---

# 29. Anti-Spam

Karena form publik tidak login, sistem harus memiliki perlindungan spam.

Lapisan yang direncanakan:

### 1. Firebase App Check

Digunakan untuk membantu memastikan request berasal dari aplikasi yang sah.

### 2. Validasi client

Memeriksa:

- field wajib;
- rating valid;
- program valid;
- kelas valid;
- Muallim valid.

### 3. Security Rules

Memastikan pengguna publik hanya dapat membuat dokumen evaluasi.

### 4. Rate Limiting

Jika diperlukan, dapat ditambahkan mekanisme pembatasan pengiriman.

---

# 30. Catatan Penting tentang Anonimitas

Walaupun sistem tidak menyimpan nama peserta, Firebase secara teknis dapat memiliki metadata layanan tertentu.

Karena itu informasi kepada responden harus menggunakan bahasa yang tepat:

> "Formulir ini tidak meminta atau menyimpan identitas pribadi seperti nama, nomor HP, NIK, atau nomor peserta."

Jangan memberikan klaim:

> "100% tidak dapat dilacak"

karena itu terlalu absolut.

---

# 31. Pencegahan Manipulasi

Masalah yang mungkin terjadi:

> Satu orang mengisi formulir berkali-kali.

Karena tidak ada login, kita **tidak dapat menjamin satu orang = satu respons** secara sempurna.

Oleh karena itu dashboard harus menggunakan istilah:

> **Jumlah respons**

bukan:

> **Jumlah peserta**

kecuali data peserta memang diketahui dari sumber lain.

---

# 32. Deteksi Respons Tidak Wajar

Sistem dapat menyimpan metadata non-identitas untuk analisis teknis, misalnya:

```text id="w8m2k5"
submittedAt
appVersion
formVersion
```

Tidak perlu menyimpan informasi pribadi.

Jika ditemukan pola tidak wajar, admin dapat melakukan pemeriksaan statistik.

---

# 33. Versi Form

Setiap evaluasi sebaiknya memiliki:

```text id="r7p4n2"
formVersion: "2026.1"
```

Tujuannya:

Jika pertanyaan berubah, kita masih mengetahui evaluasi tersebut menggunakan versi pertanyaan yang mana.

---

# 34. Versi Pertanyaan

Pertanyaan juga dapat memiliki:

```text id="c8m3x7"
questionVersion: 1
```

Jika pertanyaan diperbarui di masa depan, data lama tidak menjadi ambigu.

---

# 35. Struktur Final Konseptual

```text id="a8k5q2"
FIRESTORE
│
├── programs
│   ├── tartil
│   ├── tahsin-khot
│   ├── qoriah
│   └── pembinaan-muallim
│
├── classes
│   ├── class-001
│   ├── class-002
│   └── ...
│
├── muallims
│   ├── muallim-001
│   ├── muallim-002
│   └── ...
│
├── questions
│   ├── question-001
│   ├── question-002
│   └── ...
│
├── evaluations
│   ├── evaluation-001
│   ├── evaluation-002
│   └── ...
│
├── feedback
│   ├── feedback-001
│   └── ...
│
└── settings
    └── general
```

---

# 36. Alur Data Peserta

```text id="p4x7m2"
Peserta
   ↓
Pilih Program
   ↓
Pilih Kelas
   ↓
Pilih Muallim
   ↓
Isi Form
   ↓
Local State
   ↓
Review
   ↓
Submit
   ↓
Firestore
   ↓
evaluations/{id}
```

---

# 37. Alur Data Kritik/Saran

```text id="m9k3v5"
Responden
   ↓
Kritik/Saran
   ↓
Submit
   ↓
Firestore
   ↓
feedback/{id}
```

---

# 38. Alur Dashboard

```text id="x6p8n2"
Admin
   ↓
Firebase Authentication
   ↓
Dashboard
   ↓
Firestore
   ↓
Query Data
   ↓
Analisis
   ↓
Chart / Table / Report
```

---

# 39. Strategi Query

Dashboard tidak boleh setiap kali membuka halaman membaca seluruh database jika jumlah data sudah besar.

Query akan dibatasi berdasarkan:

- program;
- kelas;
- Muallim;
- role;
- periode;
- kategori.

Contoh:

```text id="q5m8x3"
evaluations
WHERE
programId == "tartil"
```

atau:

```text id="v2k7p9"
evaluations
WHERE
muallimId == "muallim-001"
```

---

# 40. Agregasi Statistik

Untuk jumlah data yang masih kecil sampai menengah, statistik dapat dihitung dari Firestore.

Namun jika jumlah respons sudah besar, sistem dapat menggunakan data agregat.

Contoh:

```text id="z4n8m1"
statistics
│
├── overall
├── programs
├── classes
└── muallims
```

Tujuannya mengurangi Firestore reads pada dashboard.

---

# 41. Statistik Muallim

Contoh data agregat:

```text id="k7p2m9"
muallimStats/muallim-001
{
  totalResponses: 27,
  averageScore: 4.72,
  materialScore: 4.80,
  clarityScore: 4.70,
  guidanceScore: 4.75,
  interactionScore: 4.60
}
```

Namun statistik agregat tidak harus dibuat sejak awal.

Untuk MVP, sistem dapat menghitung dari evaluasi mentah terlebih dahulu.

---

# 42. Aturan Minimal Responden

Konfigurasi:

```text id="m3x8q5"
minResponsesForIndividualResult: 5
```

Logika:

```text id="y6p2v9"
totalResponses < 5
        ↓
Hasil individual disembunyikan

totalResponses >= 5
        ↓
Hasil individual ditampilkan
```

---

# 43. Backup

Data evaluasi merupakan data penting.

Sistem perlu memiliki strategi backup.

Minimal:

- export berkala;
- backup Firestore;
- export laporan;
- penyimpanan arsip evaluasi tahunan.

Setiap tahun dapat dibuat arsip:

```text id="p8m3x7"
Evaluasi 2026
Evaluasi 2027
Evaluasi 2028
...
```

---

# 44. Pemisahan Tahun

Meskipun sistem awal digunakan untuk tahun 2026, struktur sebaiknya mendukung tahun berikutnya.

Tambahkan:

```text id="v5k9n2"
eventYear: 2026
```

pada evaluasi.

Dengan demikian:

```text id="h7m3q8"
2026
├── Evaluasi
└── Statistik

2027
├── Evaluasi
└── Statistik
```

Sistem dapat digunakan kembali tanpa membuat aplikasi baru.

---

# 45. Form Tahun Berikutnya

Pada tahun berikutnya:

```text id="x2p8m5"
Event
   ↓
2026
   ↓
2027
```

Admin cukup membuat konfigurasi event baru dan data master baru bila diperlukan.

---

# 46. Struktur yang Direkomendasikan

Untuk versi pertama:

```text id="n4k7q2"
programs
classes
muallims
questions
evaluations
feedback
settings
```

Struktur ini sengaja dibuat sederhana.

Tidak perlu membuat database terlalu kompleks karena tujuan aplikasi adalah evaluasi, bukan sistem akademik.

---

# 47. Teknologi Frontend

```text id="m8p3x6"
React
Vite
Tailwind CSS
React Router
Firebase SDK
Recharts
```

Tambahan yang dapat digunakan:

- Firebase App Check
- React Hook Form
- Zod

React Hook Form dan Zod dapat digunakan untuk mempermudah validasi form.

---

# 48. Teknologi Firebase

```text id="q5x8m3"
Firebase Authentication
Cloud Firestore
Firebase App Check
Firebase Hosting (opsional)
```

Tidak menggunakan Cloud Functions pada MVP kecuali memang diperlukan.

---

# 49. Prinsip Biaya

Karena Firebase menggunakan sistem penggunaan resource, aplikasi dirancang agar hemat.

Hindari:

- membaca seluruh collection berkali-kali;
- listener realtime yang tidak diperlukan;
- query tanpa filter;
- menyimpan data duplikat secara berlebihan;
- memuat seluruh kritik sekaligus.

Untuk formulir publik:

> **Write sekali ketika submit.**

Untuk dashboard:

> **Query sesuai kebutuhan.**

---

# 50. Kesimpulan Fase 5

Backend menggunakan:

> **Firebase langsung tanpa Laravel.**

Responden:

> **Tanpa login.**

Admin:

> **Firebase Authentication.**

Database:

> **Cloud Firestore.**

Struktur utama:

```text id="r6m2x9"
Programs
Classes
Muallims
Questions
Evaluations
Feedback
Settings
```

Prinsip keamanan:

> **Public can submit, public cannot read.**

Prinsip privasi:

> **Tidak menyimpan identitas pribadi responden.**

Prinsip analisis:

> **Data mentah disimpan, hasil analisis dihitung dan ditampilkan secara agregat.**

Prinsip jangka panjang:

> **Sistem dirancang untuk dapat digunakan kembali setiap tahun.**

---

# Status Fase 5

| Komponen              | Status |
| --------------------- | ------ |
| Firebase              | ✅     |
| Firestore             | ✅     |
| Authentication Admin  | ✅     |
| Tanpa login responden | ✅     |
| Programs              | ✅     |
| Classes               | ✅     |
| Muallims              | ✅     |
| Questions             | ✅     |
| Evaluations           | ✅     |
| Feedback              | ✅     |
| Settings              | ✅     |
| Security Rules        | ✅     |
| Anti-spam             | ✅     |
| Form Version          | ✅     |
| Tahun kegiatan        | ✅     |
| Minimal responden     | ✅     |
| Backup                | ✅     |
| Efisiensi Firestore   | ✅     |

---

# PRD — Sistem Evaluasi Kursus se-Madura

# FASE 6 — DASHBOARD, ANALISIS & LAPORAN EVALUASI

## 1. Tujuan Fase 6

Fase ini merancang bagaimana data yang dikumpulkan dari:

- Peserta
- Pendamping
- Muallim
- Panitia

diubah menjadi informasi yang dapat digunakan untuk:

1. Mengetahui keberhasilan pelaksanaan kursus.
2. Mengetahui aspek yang paling disukai.
3. Mengetahui aspek yang paling banyak dikeluhkan.
4. Mengetahui kualitas pembelajaran.
5. Mengevaluasi Muallim.
6. Mengevaluasi setiap program.
7. Mengetahui kendala pendamping.
8. Mengetahui kendala panitia.
9. Menentukan prioritas perbaikan.
10. Menjadi bahan penyusunan Kursus tahun berikutnya.

---

# 2. Prinsip Dashboard

Dashboard tidak hanya menampilkan:

> "Ada 500 jawaban."

Tetapi harus menjawab:

> **"Apa yang sebenarnya terjadi dalam kegiatan ini?"**

Dan yang lebih penting:

> **"Apa yang harus kita perbaiki tahun depan?"**

---

# 3. Struktur Dashboard

Dashboard utama:

```text
Dashboard
│
├── Ringkasan
├── Program
├── Kelas
├── Muallim
├── Responden
├── Kritik & Saran
├── Prioritas Perbaikan
├── Analisis
└── Laporan
```

---

# 4. Dashboard Ringkasan

Halaman pertama setelah admin login.

## KPI Cards

### Total Respons

Contoh:

> **428**

Respons masuk dari seluruh jenis responden.

---

### Peserta

> **312**

---

### Pendamping

> **48**

---

### Muallim

> **46**

---

### Panitia

> **22**

---

### Kepuasan Keseluruhan

> **4,62 / 5**

---

# 5. Persentase Respons

Dashboard menampilkan distribusi:

```text
Peserta       72.9%
Pendamping    11.2%
Muallim       10.7%
Panitia        5.2%
```

Tujuannya untuk mengetahui sumber data evaluasi.

---

# 6. Kepuasan Berdasarkan Program

Grafik:

```text
Tartil Al-Qur'an       4.72
Tahsinul Khot          4.55
Qira'ah                4.60
Pembinaan Muallim      4.70
```

Tampilan dapat berupa:

- Bar Chart
- Horizontal Bar Chart

Horizontal lebih mudah dibaca jika nama program panjang.

---

# 7. Evaluasi Berdasarkan Aspek

Dashboard menampilkan:

| Aspek        | Nilai |
| ------------ | ----: |
| Materi       |  4.70 |
| Muallim      |  4.75 |
| Metode       |  4.54 |
| Fasilitas    |  4.20 |
| Jadwal       |  4.31 |
| Panitia      |  4.61 |
| Pendampingan |  4.56 |

Kemudian sistem mengurutkan dari:

**Tertinggi → Terendah**

---

# 8. Identifikasi Kekuatan

Sistem otomatis mengambil aspek dengan nilai tinggi.

Contoh:

> 🟢 **Kekuatan utama**

1. Kualitas Muallim — 4,75
2. Materi pembelajaran — 4,70
3. Pelayanan panitia — 4,61

Namun label "kekuatan" sebaiknya berdasarkan threshold yang ditentukan admin, misalnya:

```text
≥ 4.50 = Kekuatan
4.00–4.49 = Baik
3.50–3.99 = Perlu perhatian
< 3.50 = Prioritas perbaikan
```

Threshold dibuat configurable di `settings`.

---

# 9. Identifikasi Prioritas Perbaikan

Contoh:

> 🔴 **Prioritas Perbaikan**

1. Fasilitas — 4,20
2. Jadwal — 4,31
3. Metode pembelajaran — 4,54

Tetapi sistem **tidak boleh hanya melihat nilai rata-rata**.

Aspek juga harus mempertimbangkan:

- jumlah responden;
- jumlah kritik;
- frekuensi masalah;
- distribusi rating.

---

# 10. Distribution Rating

Misalnya:

```text
Materi

★★★★★  68%
★★★★☆  22%
★★★☆☆   7%
★★☆☆☆   2%
★☆☆☆☆   1%
```

Ini lebih informatif daripada hanya:

> 4,70 / 5.

Karena rata-rata yang sama dapat memiliki distribusi yang berbeda.

---

# 11. Evaluasi 4 Program

Halaman:

> **Program**

Menampilkan empat kartu:

### Tartil Al-Qur'an

```text
Respons
120

Nilai
4.72 / 5

Kepuasan
94.4%
```

### Tahsinul Khot

```text
Respons
96

Nilai
4.55 / 5
```

### Qira'ah

```text
Respons
102

Nilai
4.60 / 5
```

### Pembinaan Muallim

```text
Respons
110

Nilai
4.70 / 5
```

---

# 12. Detail Program

Ketika admin memilih:

> Tartil Al-Qur'an

dashboard berubah menjadi:

```text
Tartil Al-Qur'an
│
├── Ringkasan
├── Materi
├── Metode
├── Muallim
├── Kelas
├── Fasilitas
├── Jadwal
├── Kritik
└── Saran
```

---

# 13. Evaluasi Kelas

Dashboard kelas menampilkan:

| Kelas | Respons | Nilai |
| ----- | ------: | ----: |
| A     |      32 |  4.75 |
| B     |      28 |  4.62 |
| C     |      35 |  4.58 |
| D     |      27 |  4.71 |

Admin dapat melihat:

- jumlah respons;
- nilai rata-rata;
- aspek terendah;
- aspek tertinggi.

---

# 14. Perlindungan Data Kelas

Jika jumlah responden pada suatu kelas terlalu sedikit:

> **Data belum dapat ditampilkan secara individual.**

Contoh:

```text
Respons: 3

Hasil:
Terlalu sedikit untuk ditampilkan.
```

Minimum default:

> **5 respons**

Nilai ini dapat diubah melalui Settings.

---

# 15. Evaluasi Muallim

Halaman:

> **Muallim**

Menampilkan:

| Muallim  | Program | Kelas | Respons | Nilai |
| -------- | ------- | ----- | ------: | ----: |
| Ustadz A | Tartil  | A     |      27 |  4.72 |
| Ustadz B | Tartil  | B     |      31 |  4.61 |
| Ustadz C | Qira'ah | A     |      22 |  4.80 |

---

# 16. Jangan Menggunakan "Ranking Muallim"

Secara desain, dashboard **tidak sebaiknya menampilkan kata "Ranking Muallim"**.

Tujuannya bukan kompetisi.

Gunakan:

> **Evaluasi Muallim**

atau:

> **Profil Evaluasi Muallim**

Dengan demikian hasil digunakan untuk pengembangan, bukan mempermalukan individu.

---

# 17. Profil Evaluasi Muallim

Contoh:

## Ustadz Ahmad

**Program:** Tartil Al-Qur'an
**Kelas:** A
**Jumlah Respons:** 27

### Nilai keseluruhan

> **4,72 / 5**

### Aspek

```text
Penguasaan Materi     4.80
Kejelasan              4.70
Bimbingan              4.75
Kesabaran              4.85
Interaksi              4.60
Pengelolaan Kelas      4.65
```

---

# 18. Distribusi Evaluasi Muallim

Contoh:

```text
Sangat Baik    72%
Baik           20%
Cukup           6%
Kurang          2%
Sangat Kurang   0%
```

Ini lebih objektif daripada hanya menampilkan satu nilai.

---

# 19. Komentar untuk Muallim

Komentar dapat ditampilkan secara anonim.

Contoh:

> "Penjelasannya sangat mudah dipahami."

> "Semoga waktu praktik bisa ditambah."

> "Sangat sabar ketika mengoreksi bacaan."

Komentar negatif tidak diubah atau dihilangkan hanya karena negatif, selama tidak melanggar aturan moderasi.

---

# 20. Moderasi Komentar

Karena evaluasi dapat berisi komentar bebas, dashboard memiliki opsi:

- tampilkan;
- tandai;
- sembunyikan dari laporan publik;
- arsipkan.

Komentar yang mengandung:

- penghinaan;
- informasi pribadi;
- fitnah;
- konten tidak relevan;

dapat ditandai untuk ditinjau admin.

---

# 21. Evaluasi Berdasarkan Jenis Responden

Dashboard:

```text
Peserta       4.62
Pendamping    4.70
Muallim       4.55
Panitia       4.61
```

Ini membantu melihat perbedaan perspektif.

---

# 22. Contoh Analisis Perspektif

Misalnya:

### Peserta

> Fasilitas = 4,10

### Pendamping

> Fasilitas = 4,05

### Muallim

> Fasilitas = 3,80

### Panitia

> Fasilitas = 4,20

Sistem dapat menandai:

> ⚠️ **Fasilitas merupakan aspek yang perlu diperhatikan karena memperoleh nilai relatif rendah dari beberapa kelompok responden.**

Ini lebih berguna daripada sekadar angka.

---

# 23. Evaluasi Pendamping

Dashboard khusus:

```text
Pendamping
│
├── Kepuasan
├── Koordinasi
├── Pelayanan
├── Pengelolaan Peserta
├── Kendala
└── Saran
```

---

# 24. Analisis Kendala Pendamping

Jawaban dapat dikelompokkan berdasarkan kategori:

- Informasi
- Jadwal
- Peserta
- Kelas
- Konsumsi
- Fasilitas
- Koordinasi
- Lainnya

Contoh:

```text
Koordinasi       18
Jadwal           14
Peserta           9
Fasilitas         7
Informasi         5
```

---

# 25. Evaluasi Muallim terhadap Program

Dashboard menampilkan:

```text
Materi            4.60
Waktu             4.15
Peserta           4.30
Fasilitas         4.05
Koordinasi        4.40
```

Hal ini penting karena Muallim mengalami proses pembelajaran secara langsung.

---

# 26. Evaluasi Panitia

Dashboard:

```text
Persiapan
Pelaksanaan
Koordinasi
Pelayanan
Fasilitas
Program
Kendala
```

Panitia juga dapat memberikan evaluasi internal.

---

# 27. STOP–START–CONTINUE–IMPROVE

Ini menjadi salah satu fitur analisis utama.

Dashboard:

## STOP

> Hal yang sebaiknya dihentikan.

## START

> Hal baru yang perlu dimulai.

## CONTINUE

> Hal baik yang harus dipertahankan.

## IMPROVE

> Hal yang sudah ada tetapi perlu diperbaiki.

---

# 28. Tampilan S-C-C-I

Contoh:

```text
┌─────────────┬─────────────┐
│    STOP     │    START    │
│             │             │
│  12 masukan │  27 masukan │
└─────────────┴─────────────┘

┌─────────────┬─────────────┐
│  CONTINUE   │   IMPROVE   │
│             │             │
│  38 masukan │  31 masukan │
└─────────────┴─────────────┘
```

---

# 29. Tema Kritik & Saran

Sistem dapat memberikan kategori manual melalui admin.

Contoh:

> 27 kritik berkaitan dengan jadwal.

> 19 kritik berkaitan dengan fasilitas.

> 16 saran berkaitan dengan waktu praktik.

Untuk MVP, kategorisasi dapat dilakukan **manual oleh admin** agar tidak membutuhkan AI terlebih dahulu.

---

# 30. Word/Keyword Analysis

Sebagai fitur tambahan, dashboard dapat menampilkan kata yang sering muncul.

Contoh:

```text
praktik
waktu
materi
kelas
fasilitas
muallim
konsumsi
jadwal
```

Fitur ini bersifat tambahan dan bukan dasar utama pengambilan keputusan.

---

# 31. Analisis Prioritas

Sistem menggunakan konsep:

### Impact × Frequency

Misalnya:

| Aspek     | Nilai | Kritik | Prioritas |
| --------- | ----: | -----: | --------- |
| Fasilitas |  4.10 |     42 | 🔴 Tinggi |
| Jadwal    |  4.25 |     35 | 🔴 Tinggi |
| Materi    |  4.70 |      8 | 🟢 Rendah |
| Muallim   |  4.75 |      5 | 🟢 Rendah |

Dengan demikian:

> aspek dengan nilai sedikit rendah tetapi banyak dikeluhkan dapat menjadi prioritas.

---

# 32. Matriks Prioritas

Dashboard dapat menggunakan empat kuadran:

```text
                 FREKUENSI KRITIK
                     TINGGI
                       ↑
                       │
     PERHATIKAN        │       PRIORITAS
                       │
                       │
     PERTAHANKAN       │       INVESTASI
                       │
                       └────────────────→
                              NILAI
```

Konsep ini akan dikembangkan setelah data nyata tersedia.

---

# 33. Analisis Kepuasan

Sistem menghitung:

```text
Skor Kepuasan =
Total Nilai / Total Jawaban
```

Kemudian:

```text
Persentase Kepuasan =
Skor / 5 × 100
```

Contoh:

```text
4.62 / 5 × 100
= 92.4%
```

---

# 34. NPS / Rekomendasi

Karena peserta memiliki pertanyaan:

> "Seberapa besar kemungkinan Anda merekomendasikan kursus ini?"

dengan skala:

**0–10**

dashboard dapat menghitung NPS.

Kategori:

```text
0–6   = Detractor
7–8   = Passive
9–10  = Promoter
```

Kemudian:

```text
NPS = % Promoter - % Detractor
```

Contoh:

```text
Promoter     72%
Passive      20%
Detractor     8%

NPS = 64
```

---

# 35. Dashboard NPS

Tampilan:

> **NPS: +64**

Dengan keterangan:

> Tingkat rekomendasi peserta terhadap kegiatan.

NPS ditampilkan sebagai indikator tambahan, bukan satu-satunya ukuran keberhasilan.

---

# 36. Trend Antar Tahun

Karena sistem dirancang untuk digunakan setiap tahun, dashboard dapat membandingkan:

```text
2026    4.62
2027    4.70
2028    4.76
```

Contoh:

> **Kepuasan meningkat 3,5% dibanding tahun sebelumnya.**

Fitur ini baru aktif jika sudah tersedia data lebih dari satu tahun.

---

# 37. Perbandingan Program Antar Tahun

Contoh:

| Program           | 2026 | 2027 | Perubahan |
| ----------------- | ---: | ---: | --------: |
| Tartil            | 4.72 | 4.80 |     +0.08 |
| Tahsinul Khot     | 4.55 | 4.61 |     +0.06 |
| Qira'ah           | 4.60 | 4.54 |     -0.06 |
| Pembinaan Muallim | 4.70 | 4.78 |     +0.08 |

Sistem memberikan indikator:

🟢 meningkat
🔴 menurun
⚪ relatif tetap

---

# 38. Filter Dashboard

Semua analisis utama memiliki filter:

### Tahun

```text
2026
2027
2028
```

### Program

```text
Semua
Tartil
Tahsinul Khot
Qira'ah
Pembinaan Muallim
```

### Responden

```text
Semua
Peserta
Pendamping
Muallim
Panitia
```

### Kelas

```text
Semua
Kelas A
Kelas B
...
```

### Muallim

```text
Semua
Muallim A
Muallim B
...
```

---

# 39. Filter Global

Filter utama diletakkan di bagian atas dashboard:

```text
Tahun [2026 ▼]

Program [Semua ▼]

Responden [Semua ▼]

Kelas [Semua ▼]

Muallim [Semua ▼]
```

Ketika filter berubah, grafik dan tabel mengikuti filter tersebut.

---

# 40. Export Laporan

Dashboard menyediakan:

### Export PDF

Untuk laporan resmi.

### Export Excel

Untuk analisis lebih lanjut.

### Export CSV

Untuk data mentah yang diperbolehkan.

---

# 41. Laporan PDF

Laporan tahunan dapat memiliki struktur:

```text
LAPORAN EVALUASI
KURSUS SE-MADURA

Tahun 2026

1. Pendahuluan
2. Gambaran Responden
3. Evaluasi Program
4. Evaluasi Muallim
5. Evaluasi Pendampingan
6. Evaluasi Panitia
7. Kritik & Saran
8. Prioritas Perbaikan
9. STOP–START–CONTINUE–IMPROVE
10. Kesimpulan
11. Rekomendasi Tahun Berikutnya
```

---

# 42. Executive Summary

Bagian paling awal laporan harus memberikan ringkasan.

Contoh:

> **Secara umum pelaksanaan Kursus se-Madura memperoleh tingkat kepuasan 4,62 dari 5. Aspek yang memperoleh penilaian tertinggi adalah kualitas Muallim dan materi pembelajaran. Sementara itu, aspek yang paling banyak mendapatkan masukan adalah fasilitas dan pengaturan waktu praktik.**

Dengan demikian pimpinan tidak harus membaca seluruh laporan untuk memahami hasil utama.

---

# 43. Rekomendasi Otomatis

Sistem dapat membantu membuat rekomendasi berbasis data.

Contoh:

### Temuan

> Nilai fasilitas 4,10.

### Frekuensi

> 42 komentar berkaitan dengan fasilitas.

### Rekomendasi

> **Prioritas perbaikan fasilitas perlu dipertimbangkan pada penyelenggaraan berikutnya, terutama pada ruang belajar dan sarana pendukung praktik.**

Rekomendasi tetap bersifat:

> **data-assisted**

bukan keputusan otomatis.

---

# 44. Human Review

Semua rekomendasi yang dihasilkan dashboard harus dapat diperiksa oleh tim.

Admin dapat memberikan:

> **Catatan Evaluator**

Contoh:

> "Perbaikan fasilitas akan diprioritaskan pada kelas dengan jumlah peserta tinggi."

Catatan tersebut dapat masuk ke laporan akhir.

---

# 45. Kesimpulan Dashboard

Di bagian akhir dashboard:

> **Kesimpulan Evaluasi**

Admin dapat menulis kesimpulan manual.

Contoh:

```text
Secara umum pelaksanaan kegiatan berjalan baik.
Beberapa aspek yang perlu diperhatikan untuk
tahun berikutnya adalah pengaturan waktu praktik,
fasilitas kelas, dan koordinasi pendamping.
```

---

# 46. Rekomendasi Tahun Berikutnya

Admin dapat membuat daftar:

### Prioritas 1

> Penambahan waktu praktik.

### Prioritas 2

> Perbaikan fasilitas kelas.

### Prioritas 3

> Penyempurnaan sistem koordinasi pendamping.

### Prioritas 4

> Penguatan koordinasi panitia.

---

# 47. Action Plan

Fitur lanjutan:

| Masalah              | Solusi              | Prioritas | Status       |
| -------------------- | ------------------- | --------- | ------------ |
| Waktu praktik kurang | Tambah sesi praktik | Tinggi    | Direncanakan |
| Fasilitas            | Tambah perlengkapan | Tinggi    | Diproses     |
| Koordinasi           | SOP baru            | Sedang    | Belum        |

Status:

- Belum ditindaklanjuti
- Direncanakan
- Diproses
- Selesai

Dengan demikian evaluasi tidak berhenti menjadi laporan.

---

# 48. Tujuan Akhir Sistem

Siklus sistem:

```text
KURSUS
   ↓
EVALUASI
   ↓
DATA
   ↓
ANALISIS
   ↓
TEMUAN
   ↓
PRIORITAS
   ↓
REKOMENDASI
   ↓
PERBAIKAN
   ↓
KURSUS TAHUN BERIKUTNYA
```

Ini adalah inti dari seluruh sistem.

---

# 49. Prinsip Penting

Sistem tidak boleh membuat keputusan seperti:

> "Muallim A buruk."

Tetapi:

> "Aspek bimbingan memperoleh skor 3,8 dari 27 respons dan perlu menjadi perhatian dalam evaluasi internal."

Bahasa dashboard harus:

- objektif;
- konstruktif;
- tidak menghakimi;
- berbasis data.

---

# 50. Dashboard yang Direkomendasikan

Struktur final:

```text
┌─────────────────────────────────────────────┐
│ Evaluasi Kursus se-Madura        Tahun 2026 │
├─────────────────────────────────────────────┤
│                                             │
│  428       4.62       92.4%       4 Program │
│  Respons   Kepuasan   Kepuasan     Aktif    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ Kepuasan per Program                        │
│                                             │
│ Tartil          █████████████ 4.72          │
│ Tahsinul Khot   ████████████  4.55          │
│ Qira'ah         ████████████  4.60          │
│ Pembinaan       █████████████ 4.70          │
│                                             │
├──────────────────────┬──────────────────────┤
│ Kekuatan             │ Prioritas Perbaikan  │
│                      │                      │
│ Muallim              │ Fasilitas            │
│ Materi               │ Jadwal               │
│ Pelayanan            │ Metode               │
├──────────────────────┴──────────────────────┤
│                                             │
│ Kritik & Saran Teratas                      │
│                                             │
│ 1. Waktu praktik                            │
│ 2. Fasilitas                                │
│ 3. Koordinasi                               │
│                                             │
├─────────────────────────────────────────────┤
│ Rekomendasi Tahun Berikutnya                │
└─────────────────────────────────────────────┘
```

---

# 51. Status Fase 6

| Modul                       | Status |
| --------------------------- | ------ |
| Dashboard Utama             | ✅     |
| KPI                         | ✅     |
| Evaluasi Program            | ✅     |
| Evaluasi Kelas              | ✅     |
| Evaluasi Muallim            | ✅     |
| Evaluasi Pendamping         | ✅     |
| Evaluasi Panitia            | ✅     |
| Analisis Responden          | ✅     |
| Distribusi Rating           | ✅     |
| Kritik & Saran              | ✅     |
| STOP–START–CONTINUE–IMPROVE | ✅     |
| Prioritas Perbaikan         | ✅     |
| NPS                         | ✅     |
| Filter                      | ✅     |
| Perbandingan Tahun          | ✅     |
| Export PDF                  | ✅     |
| Export Excel                | ✅     |
| Export CSV                  | ✅     |
| Executive Summary           | ✅     |
| Action Plan                 | ✅     |

---

# 52. Output Fase 6

Setelah Fase 6 selesai, website tidak lagi hanya menjadi:

> **"Formulir survei."**

Tetapi berubah menjadi:

> **"Sistem evaluasi dan pengambilan keputusan untuk pengembangan Kursus se-Madura."**

Data yang dikumpulkan tahun ini dapat menjadi dasar penyelenggaraan tahun berikutnya.

---# PRD — SISTEM EVALUASI KURSUS SE-MADURA

# FASE 7 — IMPLEMENTASI, TESTING, SECURITY & DEPLOYMENT

## 1. Tujuan Fase 7

Fase 7 adalah tahap implementasi seluruh rancangan menjadi website yang siap digunakan.

Target akhir:

> Website evaluasi Kursus se-Madura yang modern, aman, mudah digunakan, responsif di HP, tidak membutuhkan login bagi responden, menggunakan Firebase sebagai backend, dan mampu menghasilkan laporan evaluasi yang dapat digunakan untuk penyelenggaraan tahun berikutnya.

---

# 2. Stack Teknologi Final

## Frontend

```text
React
Vite
JavaScript / TypeScript
Tailwind CSS
React Router
```

## Backend / Database

```text
Firebase
├── Firestore
├── Authentication
└── App Check
```

## Visualisasi

```text
Recharts
```

## Form

```text
React Hook Form
Zod
```

## Export

```text
jsPDF
XLSX
```

## Deployment

```text
Vercel
```

Firebase tetap menjadi backend.

---

# 3. Arsitektur Sistem

```text
                         INTERNET
                             │
                             ▼
                    ┌─────────────────┐
                    │     WEBSITE     │
                    │ React + Vite    │
                    └────────┬────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
      ┌───────────────┐             ┌────────────────┐
      │ PUBLIC FORM   │             │ ADMIN DASHBOARD│
      │ Tanpa Login   │             │ Login Firebase │
      └───────┬───────┘             └────────┬───────┘
              │                              │
              └──────────────┬───────────────┘
                             ▼
                     ┌──────────────┐
                     │   FIREBASE   │
                     │              │
                     │  Firestore   │
                     │  Auth        │
                     │  App Check   │
                     └──────────────┘
```

---

# 4. Struktur Website

Website memiliki dua area utama.

## Public

```text
/
├── /
├── /evaluasi
├── /evaluasi/sukses
└── /informasi
```

## Admin

```text
/admin
├── /login
├── /dashboard
├── /evaluasi
├── /program
├── /kelas
├── /muallim
├── /pertanyaan
├── /kritik-saran
├── /laporan
├── /action-plan
└── /pengaturan
```

---

# 5. Halaman Landing Page

Landing page bukan sekadar halaman pembuka.

Tujuannya memberikan pemahaman kepada responden sebelum mengisi evaluasi.

Isi:

### Header

> Evaluasi Kursus se-Madura

### Deskripsi

> Evaluasi pelaksanaan Kursus se-Madura sebagai bahan perbaikan dan pengembangan penyelenggaraan pada tahun berikutnya.

### Informasi

```text
✓ Tidak membutuhkan login
✓ Tidak meminta identitas pribadi
✓ Evaluasi dilakukan setelah seluruh kegiatan selesai
✓ Pendapat Anda menjadi bahan perbaikan
```

### Tombol

> **Mulai Evaluasi**

---

# 6. Halaman Informasi Privasi

Sebelum formulir dimulai, tampilkan informasi:

> Evaluasi ini tidak meminta nama, nomor peserta, nomor HP, atau data pribadi lainnya.

Kemudian:

> Jawaban akan digunakan sebagai bahan evaluasi penyelenggaraan Kursus se-Madura.

Checkbox:

```text
☐ Saya memahami dan bersedia memberikan evaluasi.
```

Tombol:

> Lanjutkan

---

# 7. Pemilihan Responden

Responden memilih:

```text
Saya adalah:

○ Peserta
○ Pendamping
○ Muallim
○ Panitia
```

Pilihan ini menentukan pertanyaan berikutnya.

---

# 8. Pemilihan Program

Jika responden memilih program:

```text
Program:

○ Tartil Al-Qur'an
○ Tahsinul Khot Tulis
○ Qira'ah
○ Pembinaan Muallim
```

---

# 9. Pemilihan Kelas

Jika relevan:

```text
Kelas:

[ Pilih kelas ▼ ]
```

Kelas berasal dari Firestore.

---

# 10. Pemilihan Muallim

Jika evaluasi membutuhkan Muallim:

```text
Muallim yang dievaluasi:

[ Pilih Muallim ▼ ]
```

Data Muallim difilter berdasarkan:

- program;
- kelas.

Sehingga responden tidak melihat Muallim dari kelas/program lain.

---

# 11. Form Dinamis

Pertanyaan tidak ditulis secara permanen di kode.

Form mengambil pertanyaan dari:

```text
questions
```

Contoh:

```text
Question
↓
Role
↓
Program
↓
Category
↓
Question
↓
Type
```

Dengan demikian:

> Admin dapat mengubah pertanyaan tanpa mengubah source code.

---

# 12. Jenis Pertanyaan

Sistem mendukung:

### Rating

```text
1 2 3 4 5
```

### Pilihan tunggal

```text
○ Sangat Baik
○ Baik
○ Cukup
○ Kurang
○ Sangat Kurang
```

### Pilihan ganda

```text
☐ Fasilitas
☐ Jadwal
☐ Materi
☐ Koordinasi
```

### Textarea

Untuk:

> Kritik dan saran.

### NPS

```text
0 1 2 3 4 5 6 7 8 9 10
```

---

# 13. Progress Indicator

Karena form dapat cukup panjang, tampilkan:

```text
Evaluasi Program

████████████░░░░░ 75%
```

atau:

> Bagian 4 dari 5

Tujuannya agar responden mengetahui progres pengisian.

---

# 14. Navigasi Form

Tombol:

```text
← Kembali
Lanjut →
```

Pada halaman terakhir:

> **Kirim Evaluasi**

---

# 15. Review Sebelum Submit

Sebelum data dikirim, tampilkan:

> **Periksa kembali jawaban Anda**

Responden dapat melihat ringkasan.

Contoh:

```text
Jenis Responden
Peserta

Program
Tartil Al-Qur'an

Kelas
A

Muallim
Ustadz Ahmad

Jumlah pertanyaan
24
```

Tombol:

> Kembali Mengubah

dan:

> Kirim Evaluasi

---

# 16. Konfirmasi Submit

Ketika pengguna menekan:

> Kirim Evaluasi

muncul:

> Apakah Anda yakin ingin mengirim evaluasi?

```text
Batal       Kirim
```

Tujuannya menghindari submit tidak sengaja.

---

# 17. Halaman Sukses

Setelah berhasil:

```text
✓
Evaluasi Berhasil Dikirim
```

Pesan:

> Terima kasih atas waktu dan masukan Anda. Evaluasi ini akan menjadi bagian dari bahan perbaikan Kursus se-Madura pada penyelenggaraan berikutnya.

Tombol:

> Kembali ke Halaman Utama

---

# 18. Pencegahan Double Submit

Saat tombol diklik:

```text
Mengirim...
```

Tombol dinonaktifkan.

Setelah berhasil:

> tidak dapat dikirim ulang dari proses yang sama.

Ini mencegah:

- double click;
- koneksi lambat;
- duplicate request.

---

# 19. Validasi Form

Sebelum submit:

```text
Required field
↓
Validation
↓
Valid?
├── Tidak → tampilkan pesan
└── Ya → Submit
```

Contoh:

> "Silakan pilih kelas terlebih dahulu."

---

# 20. Validasi Rating

Rating hanya boleh:

```text
1
2
3
4
5
```

Tidak boleh:

```text
0
6
10
null
```

kecuali pertanyaan tersebut memang menggunakan skala NPS 0–10.

---

# 21. Validasi Program

Program yang dikirim harus benar-benar ada di database.

Sistem tidak menerima sembarang:

```text
programId: "abc"
```

jika program tersebut tidak tersedia.

---

# 22. Validasi Muallim

Hal yang sama berlaku untuk Muallim.

Muallim yang dipilih harus:

- aktif;
- sesuai program;
- sesuai kelas.

---

# 23. Firebase App Check

Firebase App Check digunakan untuk menambah perlindungan terhadap request palsu.

Tujuan:

> Membatasi akses otomatis dari aplikasi/script yang bukan berasal dari website resmi.

Ini bukan pengganti Security Rules, tetapi lapisan tambahan.

---

# 24. Firestore Security Rules

Prinsip:

### Public

```text
READ evaluations    ❌
UPDATE evaluations  ❌
DELETE evaluations  ❌

CREATE evaluations  ✅
```

### Admin

```text
READ       ✅
CREATE     ✅
UPDATE     ✅
DELETE     ✅
```

---

# 25. Master Data Rules

Untuk:

```text
programs
classes
muallims
questions
```

Public:

```text
READ     ✅
WRITE    ❌
```

Admin:

```text
READ     ✅
WRITE    ✅
```

Namun public hanya perlu membaca field yang dibutuhkan formulir.

---

# 26. Settings Rules

Settings publik tertentu boleh dibaca.

Contoh:

```text
eventName
evaluationOpen
year
```

Tetapi:

> Public tidak boleh mengubah Settings.

---

# 27. Admin Route Protection

Semua URL:

```text
/admin/*
```

harus diperiksa authentication.

Jika belum login:

```text
/admin/dashboard
```

akan diarahkan ke:

```text
/admin/login
```

---

# 28. Admin Login

Tampilan:

```text
┌───────────────────────────┐
│       ADMIN LOGIN         │
│                           │
│ Email                     │
│ [_______________________] │
│                           │
│ Password                  │
│ [_______________________] │
│                           │
│       [ MASUK ]           │
└───────────────────────────┘
```

Tidak ada registrasi publik.

Admin dibuat melalui Firebase Console atau mekanisme admin khusus.

---

# 29. Logout

Dashboard memiliki:

> Keluar

Ketika logout:

```text
Firebase Auth signOut()
↓
Redirect /admin/login
```

---

# 30. Responsive Design

Website harus nyaman digunakan pada:

### Smartphone

```text
320px+
```

### Tablet

```text
768px+
```

### Desktop

```text
1024px+
```

Prioritas utama:

> **Smartphone**

karena sebagian besar responden kemungkinan mengisi evaluasi melalui HP.

---

# 31. UI Public

Karakter desain:

- bersih;
- islami tetapi modern;
- tidak terlalu banyak ornamen;
- mudah dibaca;
- tombol besar;
- whitespace cukup;
- typography jelas.

Hindari:

- animasi berlebihan;
- background terlalu ramai;
- terlalu banyak warna;
- form yang terlihat seperti aplikasi administrasi.

---

# 32. UI Dashboard

Dashboard menggunakan:

- sidebar;
- top navigation;
- card;
- chart;
- table;
- filter;
- modal;
- toast notification.

Contoh:

```text
┌──────────────┬─────────────────────────────────┐
│ Dashboard    │ Evaluasi Kursus se-Madura      │
│              │                                 │
│ Ringkasan    │ 428 Respons    4.62 Kepuasan   │
│ Program      │                                 │
│ Kelas        │ ┌─────────────────────────────┐ │
│ Muallim      │ │ Grafik Evaluasi             │ │
│ Kritik       │ │                             │ │
│ Laporan      │ └─────────────────────────────┘ │
│              │                                 │
│ Pengaturan   │ Prioritas Perbaikan             │
└──────────────┴─────────────────────────────────┘
```

---

# 33. Loading State

Setiap pengambilan data harus memiliki loading state.

Contoh:

```text
Memuat data evaluasi...
```

atau skeleton.

Tidak boleh halaman terlihat kosong ketika data sedang dimuat.

---

# 34. Empty State

Jika belum ada data:

> Belum ada evaluasi yang masuk.

Bukan:

> Error.

---

# 35. Error Handling

Jika Firebase gagal:

> Terjadi gangguan saat memuat data. Silakan coba kembali.

Untuk responden:

> Evaluasi belum dapat dikirim. Jangan tutup halaman dan silakan coba kembali.

Pesan error teknis Firebase tidak ditampilkan langsung kepada pengguna.

---

# 36. Offline Handling

Karena evaluasi membutuhkan koneksi internet, sistem tetap memberikan informasi:

```text
⚠ Koneksi internet tidak stabil.
```

Jika submit gagal:

> Data belum berhasil dikirim.

Jangan menampilkan:

> Evaluasi berhasil

sebelum Firestore benar-benar mengonfirmasi penyimpanan.

---

# 37. Autosave

Untuk MVP:

> **Tidak wajib autosave ke Firestore.**

Jawaban sementara disimpan di:

```text
React State
```

atau:

```text
sessionStorage
```

Jika browser direfresh, sistem dapat mencoba memulihkan jawaban sementara.

---

# 38. Jangan Menyimpan Jawaban Sementara ke Database

Karena tujuan sistem menjaga privasi dan efisiensi:

```text
Jawaban belum submit
        ↓
Browser
```

Bukan:

```text
Jawaban belum submit
        ↓
Firestore
```

Firestore hanya menerima:

> evaluasi final.

---

# 39. Testing Form

Minimal pengujian:

### Peserta

```text
Pilih peserta
↓
Pilih program
↓
Pilih kelas
↓
Pilih Muallim
↓
Isi evaluasi
↓
Submit
```

### Pendamping

```text
Pilih pendamping
↓
Isi evaluasi
↓
Submit
```

### Muallim

```text
Pilih Muallim
↓
Isi evaluasi
↓
Submit
```

### Panitia

```text
Pilih panitia
↓
Isi evaluasi
↓
Submit
```

---

# 40. Testing Admin

Pengujian:

```text
Login
↓
Dashboard
↓
Filter
↓
Program
↓
Kelas
↓
Muallim
↓
Kritik
↓
Laporan
↓
Export
↓
Logout
```

---

# 41. Security Testing

Harus diuji:

### Public mencoba membaca evaluations

Hasil:

> DENIED

### Public mencoba menghapus evaluations

Hasil:

> DENIED

### Public mencoba mengubah program

Hasil:

> DENIED

### Admin membaca evaluasi

Hasil:

> ALLOWED

---

# 42. Testing Privasi

Pastikan database tidak menyimpan:

```text
nama peserta
nomor peserta
nomor HP
email peserta
alamat
```

kecuali suatu saat ada kebutuhan yang benar-benar disetujui.

---

# 43. Testing Anonimitas

Pastikan hasil dashboard tidak menunjukkan:

> "Siapa yang memberikan nilai 2?"

Dashboard hanya menunjukkan:

> Distribusi jawaban.

Contoh:

```text
★★★★★ 68%
★★★★☆ 22%
★★★☆☆ 7%
★★☆☆☆ 2%
★☆☆☆☆ 1%
```

---

# 44. Testing Muallim

Jika jumlah evaluasi:

```text
4
```

maka:

> Profil individual belum ditampilkan.

Jika:

```text
5+
```

maka:

> Profil evaluasi dapat ditampilkan.

Tujuannya mencegah hasil yang terlalu mudah dikaitkan dengan individu.

---

# 45. Testing Cross Device

Minimal diuji pada:

### Android

- Chrome
- Browser bawaan

### iPhone

- Safari

### Desktop

- Chrome
- Firefox
- Edge

---

# 46. Testing Ukuran Layar

```text
320 × 640
375 × 667
390 × 844
768 × 1024
1366 × 768
1920 × 1080
```

Form tidak boleh:

- horizontal scroll;
- tombol terpotong;
- teks terlalu kecil;
- chart keluar layar.

---

# 47. Performance Testing

Target:

> Halaman utama cepat dibuka.

Optimasi:

- lazy loading dashboard;
- code splitting;
- optimasi gambar;
- query Firestore terbatas;
- pagination;
- tidak membaca collection besar sekaligus.

---

# 48. Firestore Query Optimization

Jangan melakukan:

```text
get all evaluations
```

untuk setiap halaman.

Gunakan:

```text
where()
orderBy()
limit()
```

dan pagination bila diperlukan.

---

# 49. Index Firestore

Jika query membutuhkan kombinasi:

```text
programId
classId
submittedAt
```

Firebase mungkin meminta Composite Index.

Index dibuat berdasarkan query aktual.

Tidak perlu membuat semua kombinasi index sejak awal.

---

# 50. Backup

Sebelum kegiatan resmi:

> Pastikan strategi backup sudah diuji.

Minimal:

```text
Firestore
   ↓
Export
   ↓
Penyimpanan Backup
```

Backup tahunan diberi nama:

```text
evaluasi-kursus-2026
evaluasi-kursus-2027
```

---

# 51. Deployment

Frontend:

> **Vercel**

Backend:

> **Firebase**

Domain:

```text
evaluasi.[domain-organisasi].com
```

atau:

```text
evaluasikursus.[domain].com
```

Nama domain dapat ditentukan kemudian.

---

# 52. Environment Variables

Firebase config tidak ditulis sembarangan di source code.

Gunakan:

```text
.env
```

Contoh:

```text
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Catatan penting:

Firebase Web API key **bukan password rahasia**. Keamanan tetap bergantung pada Authentication, App Check, dan Firestore Security Rules.

---

# 53. Environment Development

Gunakan Firebase project terpisah untuk testing jika memungkinkan:

```text
Development
      ↓
Firebase Dev

Production
      ↓
Firebase Production
```

Jangan menguji Security Rules dengan data produksi.

---

# 54. Production Checklist

Sebelum website dibuka:

```text
☐ Firebase Production aktif
☐ Firestore Rules benar
☐ Authentication aktif
☐ App Check aktif
☐ Admin sudah dibuat
☐ Program sudah dimasukkan
☐ Kelas sudah dimasukkan
☐ Muallim sudah dimasukkan
☐ Pertanyaan sudah dimasukkan
☐ Settings sudah benar
☐ Tahun kegiatan benar
☐ Periode evaluasi benar
☐ Form sudah diuji
☐ Dashboard sudah diuji
☐ Export PDF diuji
☐ Export Excel diuji
☐ Backup diuji
☐ Domain aktif
☐ Mobile testing selesai
☐ Security testing selesai
```

---

# 55. Sebelum Link Disebar

Admin harus melakukan simulasi:

```text
HP 1
↓
Peserta
↓
Submit

HP 2
↓
Pendamping
↓
Submit

HP 3
↓
Muallim
↓
Submit

Laptop
↓
Panitia
↓
Submit
```

Kemudian:

```text
Admin
↓
Dashboard
↓
Pastikan 4 data masuk
```

---

# 56. QR Code

Setelah website siap, link evaluasi dapat dibuat menjadi QR Code.

Contoh:

```text
┌───────────────────┐
│ ▓ ▓▓ ▓ ▓▓▓ ▓ ▓▓ │
│ ▓▓  ▓▓ ▓  ▓▓ ▓▓ │
│ ▓ ▓▓▓  ▓▓ ▓ ▓▓  │
│ ▓▓ ▓ ▓▓ ▓▓  ▓▓  │
│ ▓ ▓▓ ▓ ▓ ▓▓ ▓▓  │
└───────────────────┘

SCAN UNTUK EVALUASI
```

QR dapat ditempel:

- di lokasi kursus;
- grup WhatsApp;
- banner;
- meja registrasi;
- layar penutupan.

---

# 57. Link Khusus Peran

Walaupun semua tetap tanpa login, dapat dibuat URL:

```text
/evaluasi?role=peserta
/evaluasi?role=pendamping
/evaluasi?role=muallim
/evaluasi?role=panitia
```

Sehingga panitia dapat memberikan QR berbeda.

Contoh:

### QR Peserta

```text
Scan → Form Peserta
```

### QR Pendamping

```text
Scan → Form Pendamping
```

### QR Muallim

```text
Scan → Form Muallim
```

### QR Panitia

```text
Scan → Form Panitia
```

Ini **bukan sistem keamanan**, hanya mempermudah pengalaman pengguna.

---

# 58. QR Program

Jika diperlukan, bahkan dapat dibuat QR berdasarkan program:

```text
Tartil
↓
QR Tartil

Tahsinul Khot
↓
QR Tahsinul Khot

Qira'ah
↓
QR Qira'ah

Pembinaan Muallim
↓
QR Pembinaan Muallim
```

Namun sistem tetap dapat menggunakan satu link utama.

---

# 59. Rekomendasi MVP

Agar pembangunan tidak terlalu berat, versi pertama sebaiknya fokus pada:

### Wajib

```text
Landing Page
Form Evaluasi
4 Jenis Responden
4 Program
Kelas
Muallim
Rating
Kritik & Saran
Firebase
Admin Login
Dashboard
Filter
Evaluasi Muallim
Export
Security Rules
```

### Tahap berikutnya

```text
NPS
Action Plan
Trend Tahunan
Keyword Analysis
Rekomendasi Otomatis
Advanced Analytics
```

---

# 60. Urutan Pengerjaan Developer

Implementasi dilakukan dengan urutan:

```text
1. Setup React + Vite
        ↓
2. Setup Tailwind
        ↓
3. Setup Firebase
        ↓
4. Firestore Structure
        ↓
5. Security Rules
        ↓
6. Master Data
        ↓
7. Public Landing
        ↓
8. Form Engine
        ↓
9. Submit Evaluation
        ↓
10. Admin Authentication
        ↓
11. Dashboard
        ↓
12. Analytics
        ↓
13. Kritik & Saran
        ↓
14. Export
        ↓
15. Testing
        ↓
16. Security Audit
        ↓
17. Deployment
        ↓
18. Production Test
```

---

# 61. Struktur Folder

Struktur yang direkomendasikan:

```text
src/
│
├── assets/
│
├── components/
│   ├── ui/
│   ├── form/
│   ├── dashboard/
│   ├── charts/
│   └── layout/
│
├── pages/
│   ├── public/
│   └── admin/
│
├── routes/
│
├── firebase/
│   ├── config.js
│   ├── auth.js
│   ├── firestore.js
│   └── appCheck.js
│
├── services/
│   ├── evaluationService.js
│   ├── programService.js
│   ├── classService.js
│   ├── muallimService.js
│   └── reportService.js
│
├── hooks/
│
├── utils/
│
├── schemas/
│
├── constants/
│
├── App.jsx
└── main.jsx
```

---

# 62. Pemisahan Service

Jangan memasukkan semua query Firebase langsung ke komponen.

Hindari:

```text
Dashboard.jsx
↓
100 baris query Firebase
```

Gunakan:

```text
Dashboard
↓
evaluationService
↓
Firestore
```

Keuntungannya:

- kode lebih bersih;
- mudah dirawat;
- mudah diuji;
- lebih mudah dikembangkan.

---

# 63. Form Engine

Karena pertanyaan bersifat dinamis:

```text
Firestore
↓
Questions
↓
Form Engine
↓
Render berdasarkan type
```

Contoh:

```text
type = rating
→ RatingInput

type = textarea
→ TextareaInput

type = single_choice
→ RadioInput

type = multiple_choice
→ CheckboxInput

type = nps
→ NPSInput
```

Ini membuat sistem sangat fleksibel.

---

# 64. Versi Pertanyaan

Setiap kegiatan memiliki:

```text
formVersion
```

Contoh:

```text
2026.1
```

Jika tahun depan pertanyaan berubah:

```text
2027.1
```

Data tahun 2026 tetap dapat dianalisis tanpa tercampur dengan pertanyaan baru.

---

# 65. Final Architecture

```text
                  ┌──────────────────────┐
                  │      RESPONDEN       │
                  │                      │
                  │ Peserta              │
                  │ Pendamping           │
                  │ Muallim              │
                  │ Panitia              │
                  └──────────┬───────────┘
                             │
                             ▼
                    ┌────────────────┐
                    │ PUBLIC WEBSITE │
                    │ React + Vite   │
                    └───────┬────────┘
                            │
                            ▼
                    ┌────────────────┐
                    │    FIREBASE    │
                    │                │
                    │  Firestore     │
                    │  App Check     │
                    └───────┬────────┘
                            │
                            ▼
                    ┌────────────────┐
                    │    DASHBOARD   │
                    │ Firebase Auth  │
                    └───────┬────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
          Analytics      Reports       Action Plan
              │             │             │
              └─────────────┼─────────────┘
                            ▼
                   KURSUS TAHUN DEPAN
```

---

# 66. Hasil Akhir Sistem

Website selesai ketika seluruh proses berikut berjalan:

```text
RESPONDEN
   ↓
Buka Website
   ↓
Pilih Peran
   ↓
Pilih Program/Kelas/Muallim
   ↓
Isi Evaluasi
   ↓
Kritik & Saran
   ↓
Review
   ↓
Submit
   ↓
Firebase
   ↓
Dashboard Admin
   ↓
Analisis
   ↓
Temuan
   ↓
Prioritas
   ↓
Laporan
   ↓
Action Plan
   ↓
Kursus Tahun Berikutnya
```

---

# 67. Indikator Keberhasilan Proyek

Website dianggap berhasil apabila:

### Teknis

- Form dapat digunakan tanpa login.
- Data berhasil tersimpan ke Firebase.
- Admin dapat melihat data.
- Security Rules berjalan.
- Website responsif.
- Tidak ada duplicate submit.
- Export berjalan.

### Operasional

- Peserta mudah mengisi.
- Pendamping mudah mengisi.
- Muallim mudah mengisi.
- Panitia mudah mengisi.

### Analisis

- Data dapat difilter.
- Program dapat dibandingkan.
- Kelas dapat dievaluasi.
- Muallim dapat dievaluasi.
- Kritik dan saran dapat dianalisis.
- Prioritas perbaikan dapat ditentukan.

### Strategis

Yang paling penting:

> **Hasil evaluasi tahun ini dapat digunakan untuk menentukan apa yang harus dipertahankan, diperbaiki, dihentikan, dan dimulai pada Kursus tahun berikutnya.**

---

# 68. FINAL — 7 FASE

Seluruh perencanaan sekarang menjadi:

```text
FASE 1
Konsep & Tujuan
        ↓
FASE 2
Struktur Responden & Evaluasi
        ↓
FASE 3
Desain Form & Pertanyaan
        ↓
FASE 4
UX/UI & Alur Website
        ↓
FASE 5
Firebase & Struktur Data
        ↓
FASE 6
Dashboard & Analisis
        ↓
FASE 7
Implementasi, Testing & Deployment
```

---

# 69. Visi Akhir

Sistem ini bukan sekadar:

> **website survei.**

Tetapi menjadi:

> **Pusat Evaluasi Kursus se-Madura.**

Setiap tahun sistem mengumpulkan pengalaman dari seluruh pihak:

```text
Peserta
   +
Pendamping
   +
Muallim
   +
Panitia
        ↓
    EVALUASI
        ↓
       DATA
        ↓
     ANALISIS
        ↓
     REFLEKSI
        ↓
   PERBAIKAN
        ↓
KURSUS TAHUN DEPAN
```

Dengan konsep ini, evaluasi tidak berhenti pada angka kepuasan, tetapi menjadi **siklus peningkatan mutu penyelenggaraan Kursus se-Madura dari tahun ke tahun.**

# PRD — SISTEM EVALUASI KURSUS SE-MADURA

# FASE 8 — FOUNDATION DEVELOPMENT & SETUP PROJECT

## 1. Tujuan Fase

Fase 8 adalah tahap pertama setelah seluruh perencanaan selesai.

Fokusnya bukan membuat semua fitur sekaligus, tetapi membangun **pondasi aplikasi** yang benar agar fase pengembangan berikutnya tidak perlu bongkar-pasang struktur.

Target:

> Membuat project React + Vite yang sudah terhubung ke Firebase, memiliki struktur folder yang rapi, sistem routing, konfigurasi environment, Firebase Security Rules awal, dan kerangka UI public serta admin.

---

# 2. Target Akhir Fase 8

Pada akhir fase ini harus sudah tersedia:

```text
React + Vite
       ↓
Tailwind CSS
       ↓
React Router
       ↓
Firebase
       ↓
Firestore
       ↓
Firebase Authentication
       ↓
App Check
       ↓
Public Layout
       ↓
Admin Layout
```

Belum perlu membuat seluruh dashboard.

---

# 3. Project Name

Nama project yang direkomendasikan:

```text
evaluasi-kursus-madura
```

Atau nama yang lebih pendek:

```text
evaluasi-kursus
```

Nama ini hanya nama project development.

Nama resmi website dapat ditentukan kemudian.

---

# 4. Struktur Project Awal

```text
evaluasi-kursus/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── form/
│   │   ├── dashboard/
│   │   └── layout/
│   │
│   ├── pages/
│   │   ├── public/
│   │   └── admin/
│   │
│   ├── routes/
│   │
│   ├── firebase/
│   │
│   ├── services/
│   │
│   ├── hooks/
│   │
│   ├── utils/
│   │
│   ├── schemas/
│   │
│   ├── constants/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

# 5. Instalasi Project

Project dibuat menggunakan:

```text
Vite
```

Dengan React.

Struktur awal:

```text
npm create vite@latest evaluasi-kursus -- --template react
```

Kemudian:

```text
cd evaluasi-kursus
npm install
```

---

# 6. Dependency Utama

Install:

```text
firebase
react-router-dom
react-hook-form
zod
@hookform/resolvers
recharts
jspdf
xlsx
```

Untuk UI:

```text
tailwindcss
```

Dependency akan ditambah hanya jika benar-benar diperlukan.

Prinsip:

> Jangan memasang library terlalu banyak hanya karena tersedia.

---

# 7. Firebase Project

Buat satu Firebase Project khusus.

Contoh:

```text
Project ID:
evaluasi-kursus-madura
```

Firebase digunakan untuk:

```text
Firestore
Authentication
App Check
```

---

# 8. Development & Production

Jika memungkinkan gunakan dua project:

```text
Firebase
│
├── evaluasi-kursus-dev
│
└── evaluasi-kursus-prod
```

Development digunakan untuk:

- testing;
- eksperimen;
- security testing;
- dummy data.

Production digunakan untuk:

> Data evaluasi sebenarnya.

---

# 9. Firebase Web App

Di Firebase:

```text
Project
↓
Add Web App
↓
Register App
```

Contoh nama:

```text
evaluasi-kursus-web
```

Firebase kemudian memberikan konfigurasi.

---

# 10. Environment Variables

Gunakan:

```text
.env
```

Contoh:

```text
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Dan:

```text
.env.example
```

berisi nama variabel tanpa nilai.

---

# 11. Jangan Commit `.env`

`.gitignore` harus berisi:

```text
.env
.env.local
.env.production
```

Tetapi:

```text
.env.example
```

boleh masuk Git.

---

# 12. Firebase Configuration

Buat:

```text
src/firebase/config.js
```

Tugas file:

```text
Firebase Initialization
↓
Firebase App
↓
Firestore
↓
Auth
```

Jangan mencampurkan query database di file configuration.

---

# 13. Struktur Firebase

```text
src/firebase/
│
├── config.js
├── auth.js
├── firestore.js
└── appCheck.js
```

Fungsinya:

### config.js

Inisialisasi Firebase.

### auth.js

Authentication admin.

### firestore.js

Database connection.

### appCheck.js

Firebase App Check.

---

# 14. Router

Buat route:

```text
/
```

untuk landing page.

```text
/evaluasi
```

untuk form evaluasi.

```text
/evaluasi/sukses
```

untuk halaman berhasil.

```text
/admin/login
```

untuk login.

```text
/admin/dashboard
```

untuk dashboard.

---

# 15. Route Structure

```text
/
├── Home
│
├── evaluasi
│   ├── EvaluationStart
│   ├── EvaluationForm
│   └── EvaluationSuccess
│
└── admin
    ├── Login
    └── Dashboard
```

---

# 16. Public Layout

Public memiliki:

```text
Header
Main
Footer
```

Header:

> Evaluasi Kursus se-Madura

Footer:

> © Kursus se-Madura

---

# 17. Admin Layout

Admin memiliki:

```text
Sidebar
Topbar
Main Content
```

Sidebar awal:

```text
Dashboard
Program
Kelas
Muallim
Pertanyaan
Evaluasi
Kritik & Saran
Laporan
Action Plan
Pengaturan
```

---

# 18. Design System

Sebelum membuat banyak halaman, tentukan design system.

## Typography

Gunakan font yang:

- mudah dibaca;
- mendukung Bahasa Indonesia;
- mendukung istilah Arab/transliterasi.

Contoh:

```text
Inter
Plus Jakarta Sans
```

Untuk teks Arab jika diperlukan:

```text
Noto Naskh Arabic
```

---

# 19. Warna

Konsep warna:

### Primary

Hijau bernuansa islami.

### Background

Putih / off-white.

### Text

Dark slate.

### Success

Hijau.

### Warning

Amber.

### Danger

Merah.

Namun jangan menggunakan terlalu banyak warna.

Tujuan:

> Elegan, akademik, islami, modern.

---

# 20. Komponen UI Dasar

Buat terlebih dahulu:

```text
Button
Card
Input
Select
Textarea
Radio
Checkbox
Badge
Modal
Toast
Loading
EmptyState
ErrorState
ProgressBar
```

Komponen ini akan digunakan oleh seluruh sistem.

---

# 21. Public Landing Page

Versi awal:

```text
┌─────────────────────────────────┐
│ Evaluasi Kursus se-Madura       │
│                                 │
│ Bersama membangun kursus        │
│ yang lebih baik.                │
│                                 │
│ [ Mulai Evaluasi ]              │
│                                 │
│ Evaluasi • Refleksi • Perbaikan │
└─────────────────────────────────┘
```

Jangan membuat landing page terlalu panjang.

---

# 22. Informasi Program

Landing page menampilkan:

```text
4 PROGRAM

Tartil Al-Qur'an
Tahsinul Khot Tulis
Qira'ah
Pembinaan Muallim
```

Ini memberikan konteks kepada responden.

---

# 23. Halaman Mulai Evaluasi

Sebelum masuk form:

```text
Evaluasi Kursus se-Madura

Evaluasi ini dilakukan setelah
seluruh rangkaian kursus selesai.

Jawaban Anda akan menjadi bahan
perbaikan untuk penyelenggaraan
berikutnya.
```

Kemudian:

> **Mulai**

---

# 24. Role Selection Component

Komponen:

```text
RoleSelector
```

Pilihan:

```text
Peserta
Pendamping
Muallim
Panitia
```

Setelah memilih:

```text
role
```

disimpan dalam state form.

---

# 25. Form State

Gunakan React Hook Form.

Contoh konsep:

```text
{
  role,
  programId,
  classId,
  muallimId,
  answers,
  feedback
}
```

Jangan langsung menyimpan ke Firebase.

Data hanya berada di browser sampai pengguna menekan:

> Submit.

---

# 26. Dynamic Question Renderer

Buat komponen:

```text
QuestionRenderer
```

Logika:

```text
question.type
      │
      ├── rating
      ├── single_choice
      ├── multiple_choice
      ├── textarea
      └── nps
```

Komponen akan memilih input yang sesuai.

---

# 27. Firestore Master Data

Pada tahap ini mulai buat:

```text
programs
classes
muallims
questions
settings
```

Belum perlu memasukkan data kegiatan sebenarnya.

Gunakan dummy data terlebih dahulu.

---

# 28. Program Dummy

Contoh:

```text
Tartil Al-Qur'an
Tahsinul Khot Tulis
Qira'ah
Pembinaan Muallim
```

---

# 29. Class Dummy

Contoh:

```text
Tartil - A
Tartil - B
Tartil - C

Qira'ah - A
Qira'ah - B
```

Jumlah sebenarnya dapat dimasukkan kemudian.

---

# 30. Muallim Dummy

Contoh:

```text
Muallim A
Muallim B
Muallim C
```

Jangan menggunakan data asli selama development jika tidak diperlukan.

---

# 31. Question Dummy

Buat beberapa pertanyaan:

### Materi

> Materi yang diberikan sesuai dengan kebutuhan peserta.

### Muallim

> Muallim menyampaikan materi dengan jelas.

### Waktu

> Waktu pembelajaran digunakan secara efektif.

### Fasilitas

> Fasilitas mendukung proses pembelajaran.

### Kritik

> Apa yang perlu diperbaiki?

---

# 32. Firestore Collection

Buat collection:

```text
programs
classes
muallims
questions
evaluations
feedback
settings
```

Tetapi:

> Jangan membuat data produksi sebelum sistem diuji.

---

# 33. Evaluation Service

Buat:

```text
src/services/evaluationService.js
```

Fungsi:

```text
submitEvaluation()
```

Tugas:

```text
Form Data
↓
Validation
↓
Firestore
```

---

# 34. Master Data Services

Buat:

```text
programService.js
classService.js
muallimService.js
questionService.js
```

Tujuannya agar komponen UI tidak langsung berinteraksi dengan Firestore.

---

# 35. Authentication Service

Buat:

```text
auth.js
```

Fungsi:

```text
loginAdmin()
logoutAdmin()
getCurrentUser()
```

---

# 36. Admin Auth Flow

```text
/admin/login
      ↓
Firebase Auth
      ↓
Berhasil?
 ┌────┴────┐
Tidak      Ya
 ↓          ↓
Error    Dashboard
```

---

# 37. Protected Route

Buat:

```text
ProtectedRoute
```

Fungsinya:

```text
User Login?
│
├── Tidak → /admin/login
│
└── Ya → halaman admin
```

---

# 38. Dashboard Skeleton

Pada Fase 8 belum perlu semua statistik.

Cukup:

```text
Total Respons
Peserta
Pendamping
Muallim
Panitia
```

Data masih boleh dummy.

Tujuan:

> Memastikan layout dashboard sudah benar.

---

# 39. Firestore Security Rules — Development

Pada tahap development, rules tetap harus dibuat.

Jangan menggunakan:

```text
allow read, write: if true;
```

meskipun hanya sementara di production.

Untuk development pun sebaiknya akses dibatasi.

---

# 40. Public Write

Public hanya:

```text
create evaluations
create feedback
```

Tidak boleh:

```text
read evaluations
update evaluations
delete evaluations
```

---

# 41. Admin Access

Admin yang sudah authenticated dapat:

```text
read evaluations
read feedback
read/write master data
```

Aturan final akan disempurnakan pada tahap security testing.

---

# 42. Data Validation di Security Rules

Security Rules harus memeriksa hal dasar:

```text
role valid
programId valid
submittedAt valid
answers tersedia
```

Jangan hanya mengandalkan validasi React.

Karena:

> Client-side validation dapat dimanipulasi.

---

# 43. App Check

Setelah Firebase terhubung:

```text
Firebase App Check
        ↓
Web App
        ↓
Firestore
```

Aktifkan pada environment yang sesuai.

Development sebaiknya menggunakan mode debug terlebih dahulu sebelum enforcement production.

---

# 44. Testing Pertama

Setelah foundation selesai:

### Test 1

Buka:

```text
/
```

Landing page tampil.

### Test 2

Buka:

```text
/evaluasi
```

Form tampil.

### Test 3

Isi dummy form.

### Test 4

Submit.

### Test 5

Periksa Firestore.

Harus ada:

```text
evaluations
└── document baru
```

---

# 45. Test Admin

Buka:

```text
/admin/login
```

Login.

Kemudian:

```text
/admin/dashboard
```

Harus berhasil masuk.

---

# 46. Test Security

Dari browser public:

```text
Firestore evaluations
```

Tidak boleh dapat dibaca.

Admin:

```text
Firestore evaluations
```

Boleh dibaca.

---

# 47. Git Repository

Gunakan Git.

Branch awal:

```text
main
```

Development:

```text
dev
```

atau:

```text
develop
```

Rekomendasi:

```text
main
develop
feature/*
```

---

# 48. Commit Convention

Contoh:

```text
feat: setup firebase
feat: create public layout
feat: create evaluation form
feat: add admin authentication

fix: validate evaluation form

refactor: separate firestore services
```

Ini akan sangat membantu ketika project mulai besar.

---

# 49. README

README harus berisi:

```text
Project Description
Tech Stack
Installation
Environment Variables
Firebase Setup
Development
Build
Deployment
```

Developer lain dapat memahami project tanpa harus bertanya ulang.

---

# 50. Deployment Development

Setelah foundation berjalan:

```text
GitHub
   ↓
Vercel
   ↓
Preview URL
```

Contoh:

```text
evaluasi-kursus-xxx.vercel.app
```

URL ini digunakan untuk testing internal.

---

# 51. Jangan Langsung Production

Urutannya:

```text
LOCAL
 ↓
PREVIEW
 ↓
INTERNAL TEST
 ↓
SECURITY TEST
 ↓
UAT
 ↓
PRODUCTION
```

---

# 52. User Acceptance Testing

Sebelum digunakan pada kegiatan sebenarnya, minta beberapa orang mencoba:

```text
2 Peserta
2 Pendamping
2 Muallim
2 Panitia
```

Mereka tidak perlu banyak.

Yang diuji:

- mudah dipahami?
- pertanyaan jelas?
- form terlalu panjang?
- ada bagian membingungkan?
- HP nyaman?
- submit berhasil?

---

# 53. Evaluasi Hasil UAT

Catat:

```text
Bug
UX Issue
Pertanyaan Tidak Jelas
Loading
Kesalahan Data
```

Kemudian perbaiki sebelum production.

---

# 54. Definition of Done — Fase 8

Fase 8 dianggap selesai apabila:

```text
☑ React + Vite aktif
☑ Tailwind aktif
☑ Router aktif
☑ Firebase terhubung
☑ Firestore aktif
☑ Authentication aktif
☑ App Check terkonfigurasi
☑ Environment variables aktif
☑ Public layout selesai
☑ Admin layout selesai
☑ Routing selesai
☑ Dummy master data tersedia
☑ Form engine dasar tersedia
☑ Evaluation service tersedia
☑ Security Rules dasar tersedia
☑ Git repository tersedia
☑ Preview deployment aktif
```

---

# 55. Output Fase 8

Output nyata yang dihasilkan:

```text
1. Source Code React
2. Firebase Project
3. Firestore Database
4. Authentication
5. Security Rules
6. Public Website Skeleton
7. Admin Dashboard Skeleton
8. Dynamic Form Engine
9. Preview Deployment
10. Documentation
```

---

# 56. Fase Berikutnya

Setelah foundation ini selesai, pembangunan masuk ke:

# FASE 9 — PUBLIC EVALUATION FORM

Fokus Fase 9:

```text
Role
 ↓
Program
 ↓
Kelas
 ↓
Muallim
 ↓
Pertanyaan Dinamis
 ↓
Rating
 ↓
Kritik & Saran
 ↓
Review
 ↓
Submit
 ↓
Firebase
 ↓
Success Page
```

Fase 9 akan menjadi **fitur pertama yang benar-benar digunakan oleh peserta, pendamping, Muallim, dan panitia**.

Setelah form publik stabil, baru kita masuk ke pembangunan dashboard analitik secara penuh.

# PRD — SISTEM EVALUASI KURSUS SE-MADURA

# FASE 9 — PUBLIC EVALUATION FORM

## 1. Tujuan Fase

Fase 9 membangun seluruh alur pengisian evaluasi dari sisi responden.

Sistem harus mampu membedakan kebutuhan evaluasi:

```text
Peserta
Pendamping
Muallim
Panitia
```

tanpa meminta pengguna login.

Tujuan utamanya:

> Menghasilkan data evaluasi yang terstruktur, relevan, dan tetap menjaga privasi responden.

---

# 2. Prinsip Utama Form

Form harus:

- mudah digunakan melalui HP;
- tidak membutuhkan login;
- tidak meminta nama;
- tidak meminta nomor HP;
- tidak meminta email;
- tidak meminta nomor peserta;
- menggunakan kelas sebagai identifikasi konteks;
- dapat mengevaluasi program;
- dapat mengevaluasi Muallim;
- dapat memberikan kritik dan saran;
- hanya dikirim satu kali dalam satu sesi pengisian.

---

# 3. Alur Utama

```text
Landing
   ↓
Informasi Evaluasi
   ↓
Pilih Peran
   ↓
Pilih Program
   ↓
Pilih Kelas
   ↓
Pilih Muallim
   ↓
Pertanyaan Evaluasi
   ↓
Kritik & Saran
   ↓
Review
   ↓
Konfirmasi
   ↓
Submit
   ↓
Firebase
   ↓
Success
```

Tidak ada:

```text
Login
Register
Password
OTP
```

untuk responden.

---

# 4. Halaman 1 — Landing

URL:

```text
/evaluasi
```

Tampilan:

```text
┌──────────────────────────────────┐
│                                  │
│     EVALUASI KURSUS SE-MADURA    │
│                                  │
│  Bersama membangun kursus yang   │
│  lebih baik dari tahun ke tahun. │
│                                  │
│       [ MULAI EVALUASI ]         │
│                                  │
└──────────────────────────────────┘
```

---

# 5. Informasi Evaluasi

Setelah menekan:

> Mulai Evaluasi

muncul:

### Evaluasi Kursus se-Madura

> Evaluasi ini dilakukan setelah seluruh rangkaian kegiatan kursus selesai.

> Pendapat Anda akan menjadi bahan evaluasi dan perbaikan penyelenggaraan kursus pada tahun berikutnya.

### Privasi

> Evaluasi ini tidak meminta nama, nomor peserta, nomor HP, atau identitas pribadi lainnya.

Tombol:

> **Saya Mengerti, Lanjutkan**

---

# 6. Pilih Peran

Pertanyaan:

> **Anda mengikuti kegiatan sebagai apa?**

Pilihan:

```text
Peserta
Pendamping
Muallim
Panitia
```

Tampilkan dalam bentuk Card.

Contoh:

```text
┌────────────────────┐
│ 👤                 │
│ Peserta            │
│                    │
│ Saya mengikuti     │
│ kursus sebagai     │
│ peserta.           │
└────────────────────┘
```

---

# 7. Role Bersifat Wajib

Pengguna tidak dapat melanjutkan sebelum memilih peran.

Jika belum memilih:

> Silakan pilih peran Anda terlebih dahulu.

---

# 8. Pilih Program

Setelah role dipilih:

> **Program apa yang Anda ikuti/evaluasi?**

Pilihan berasal dari Firebase.

Program:

```text
1. Tartil Al-Qur'an
2. Tahsinul Khot Tulis
3. Qira'ah
4. Pembinaan Muallim
```

---

# 9. Program Dinamis

Jangan hardcode program di frontend.

Frontend mengambil:

```text
programs
```

dari Firestore.

Keuntungannya:

> Tahun depan program dapat ditambah atau diubah dari dashboard tanpa mengubah source code.

---

# 10. Pilih Kelas

Jika program memiliki kelas:

> **Kelas Anda**

Dropdown:

```text
[ Pilih kelas ▼ ]
```

Data difilter:

```text
programId
```

Sehingga:

```text
Tartil
↓
Kelas Tartil saja
```

bukan semua kelas.

---

# 11. Pendamping

Konsep khusus yang sudah kita sepakati:

> Pendamping tidak dianggap sebagai peserta biasa.

Pendamping mengelola beberapa peserta.

Karena itu evaluasi Pendamping dapat mencakup:

```text
Pelayanan kepada peserta
Koordinasi
Kejelasan informasi
Kedisiplinan
Pendampingan
Komunikasi
```

Tetapi tetap tidak meminta:

> Nama pendamping.

---

# 12. Evaluasi Pendamping

Contoh:

### Koordinasi

> Informasi mengenai kegiatan disampaikan dengan jelas kepada peserta.

### Pendampingan

> Pendamping membantu peserta ketika mengalami kesulitan.

### Komunikasi

> Komunikasi antara pendamping dan peserta berjalan dengan baik.

### Tanggung jawab

> Pendamping menjalankan tugasnya dengan baik.

Skala:

```text
1 — Sangat Kurang
2 — Kurang
3 — Cukup
4 — Baik
5 — Sangat Baik
```

---

# 13. Evaluasi Peserta

Peserta mengevaluasi:

### Materi

- kesesuaian materi;
- manfaat materi;
- tingkat pemahaman.

### Muallim

- penguasaan materi;
- cara penyampaian;
- interaksi;
- kedisiplinan;
- perhatian kepada peserta.

### Fasilitas

- ruang;
- alat pembelajaran;
- kenyamanan;
- fasilitas pendukung.

### Pelaksanaan

- jadwal;
- ketepatan waktu;
- koordinasi;
- pelayanan.

---

# 14. Evaluasi Muallim

Muallim dapat memberikan evaluasi mengenai:

### Materi

> Materi yang diberikan sesuai dengan kebutuhan pembelajaran.

### Peserta

> Tingkat kemampuan peserta sesuai dengan target yang ditetapkan.

### Waktu

> Alokasi waktu pembelajaran mencukupi.

### Sistem

> Sistem penyelenggaraan kursus mendukung proses pembelajaran.

### Koordinasi

> Koordinasi panitia dengan Muallim berjalan dengan baik.

---

# 15. Evaluasi Panitia

Panitia mengevaluasi:

### Perencanaan

### Koordinasi

### SDM

### Sarana

### Jadwal

### Komunikasi

### Pelaksanaan

### Kendala

### Efektivitas sistem

---

# 16. Evaluasi Program Secara Keseluruhan

Semua responden mendapatkan bagian:

> **Bagaimana penilaian Anda terhadap pelaksanaan program secara keseluruhan?**

Skala:

```text
1 2 3 4 5
```

---

# 17. Evaluasi Muallim Individual

Untuk responden yang relevan:

```text
Program
↓
Kelas
↓
Muallim
```

kemudian:

> **Bagaimana penilaian Anda terhadap Muallim tersebut?**

Ini memungkinkan:

```text
Evaluasi Program
+
Evaluasi Muallim Individual
```

secara bersamaan.

---

# 18. Prinsip Evaluasi Muallim

Hasil evaluasi individual tidak langsung menampilkan:

> nama pemberi nilai.

Yang disimpan hanya konteks:

```text
program
class
muallim
role
answers
```

Tanpa identitas pribadi.

---

# 19. Threshold Anonimitas

Untuk menjaga privasi:

Jika jumlah responden untuk seorang Muallim terlalu sedikit:

```text
< 5 respon
```

dashboard tidak menampilkan hasil individual secara terbuka.

Contoh:

> Data evaluasi belum memenuhi jumlah minimal untuk ditampilkan.

Ini mencegah seseorang mudah ditebak dari jawabannya.

---

# 20. Pertanyaan Dinamis

Pertanyaan berasal dari:

```text
questions
```

Firestore.

Setiap pertanyaan memiliki:

```text
id
text
type
role
programId
category
required
order
active
```

---

# 21. Contoh Struktur Question

```text
{
  id: "Q001",
  text: "Materi disampaikan dengan jelas.",
  type: "rating",
  role: ["peserta"],
  category: "muallim",
  required: true,
  order: 1,
  active: true
}
```

---

# 22. Pertanyaan Berdasarkan Role

Contoh:

```text
role = peserta
```

maka:

```text
Pertanyaan Peserta
+
Pertanyaan Program
+
Pertanyaan Muallim
```

Sedangkan:

```text
role = muallim
```

maka:

```text
Pertanyaan Muallim
+
Pertanyaan Program
+
Pertanyaan Panitia
```

---

# 23. Pertanyaan Berdasarkan Program

Pertanyaan dapat memiliki:

```text
programId
```

Contoh:

```text
programId: tartil
```

hanya muncul pada evaluasi Tartil.

Sedangkan pertanyaan umum:

```text
programId: null
```

muncul pada semua program.

---

# 24. Kategori Pertanyaan

Gunakan kategori:

```text
Materi
Muallim
Peserta
Pendamping
Fasilitas
Panitia
Pelayanan
Waktu
Koordinasi
Program
```

Kategori ini sangat penting untuk analisis dashboard.

---

# 25. Rating Component

Desain:

```text
Bagaimana kualitas penyampaian materi?

○ 1
○ 2
○ 3
○ 4
○ 5

Sangat Kurang          Sangat Baik
```

Pada mobile, tombol dibuat besar agar mudah disentuh.

---

# 26. Textarea

Pertanyaan:

> Apa hal yang menurut Anda sudah baik dalam kursus ini?

Textarea:

```text
┌──────────────────────────────────┐
│ Tuliskan pendapat Anda...        │
│                                  │
│                                  │
└──────────────────────────────────┘
```

---

# 27. Kritik dan Saran

Bagian akhir:

## Kritik

> Apa yang menurut Anda perlu diperbaiki?

## Saran

> Apa yang Anda sarankan untuk penyelenggaraan tahun berikutnya?

## Hal yang Perlu Dipertahankan

> Apa hal baik yang menurut Anda harus dipertahankan?

Ketiga pertanyaan ini lebih berguna daripada hanya:

> "Kritik dan saran?"

---

# 28. Pertanyaan Prioritas

Tambahkan:

> **Jika hanya satu hal yang dapat diperbaiki tahun depan, apa yang paling Anda prioritaskan?**

Jawaban:

```text
Textarea
```

Ini sangat berguna untuk menentukan:

> Prioritas perbaikan.

---

# 29. Hal yang Harus Dipertahankan

Tambahkan:

> **Apa hal terbaik dari kursus ini yang harus dipertahankan?**

Tujuannya agar evaluasi tidak hanya mencari kesalahan.

---

# 30. Bagian Evaluasi Keseluruhan

Pertanyaan:

> **Secara keseluruhan, bagaimana Anda menilai Kursus se-Madura tahun ini?**

Rating:

```text
1 2 3 4 5
```

Kemudian:

> **Seberapa besar kemungkinan Anda merekomendasikan kursus ini kepada peserta lain?**

NPS:

```text
0 1 2 3 4 5 6 7 8 9 10
```

---

# 31. Progress Bar

Di bagian atas:

```text
Evaluasi Kursus

██████████████░░░░ 72%

Bagian 4 dari 5
```

Progress dihitung berdasarkan section, bukan jumlah pertanyaan semata.

---

# 32. Section Form

Form dibagi menjadi:

```text
01
Profil Evaluasi
↓
02
Evaluasi Program
↓
03
Evaluasi Muallim
↓
04
Fasilitas & Pelayanan
↓
05
Kritik & Saran
```

Namun section dapat berubah sesuai role.

---

# 33. Conditional Section

Contoh:

### Peserta

```text
Profil
↓
Program
↓
Kelas
↓
Muallim
↓
Pembelajaran
↓
Fasilitas
↓
Kritik & Saran
```

### Muallim

```text
Profil
↓
Program
↓
Pelaksanaan
↓
Peserta
↓
Panitia
↓
Kritik & Saran
```

---

# 34. Tombol Navigasi

Setiap section:

```text
← Kembali             Lanjut →
```

Pada halaman terakhir:

```text
← Kembali       Periksa Jawaban
```

---

# 35. Validasi Required

Pertanyaan wajib harus dijawab.

Jika belum:

> Pertanyaan ini wajib diisi.

Tetapi pertanyaan terbuka tertentu dapat dibuat:

```text
Optional
```

agar responden tidak merasa dipaksa menulis kritik.

---

# 36. Review Page

Sebelum submit:

```text
┌────────────────────────────────┐
│ PERIKSA JAWABAN                │
│                                │
│ Peran                         │
│ Peserta                        │
│                                │
│ Program                        │
│ Tartil Al-Qur'an              │
│                                │
│ Kelas                          │
│ A                              │
│                                │
│ Evaluasi Program               │
│ ★★★★☆                         │
│                                │
│ Evaluasi Muallim               │
│ ★★★★★                         │
│                                │
│ Kritik                         │
│ ...                            │
└────────────────────────────────┘
```

---

# 37. Edit dari Review

Setiap section memiliki:

> Ubah

Contoh:

```text
Evaluasi Muallim
★★★★☆
[ Ubah ]
```

Ketika ditekan:

> kembali ke section terkait.

---

# 38. Confirmation Modal

Ketika menekan:

> Kirim Evaluasi

muncul:

> Apakah Anda yakin semua jawaban sudah benar?

```text
[ Kembali ]
[ Kirim Evaluasi ]
```

---

# 39. Submit Process

```text
Submit
 ↓
Disable Button
 ↓
Validate
 ↓
Prepare Data
 ↓
Firestore
 ↓
Success
```

Button:

```text
Mengirim evaluasi...
```

---

# 40. Data yang Disimpan

Contoh:

```text
{
  role: "peserta",

  programId: "tartil",

  classId: "tartil-a",

  muallimId: "muallim-01",

  formVersion: "2026.1",

  answers: {
    Q001: 5,
    Q002: 4,
    Q003: 5
  },

  positiveFeedback: "...",

  criticism: "...",

  suggestion: "...",

  priorityImprovement: "...",

  submittedAt: serverTimestamp()
}
```

---

# 41. Tidak Menyimpan Identitas

Jangan menyimpan:

```text
nama
email
nomor_hp
nomor_peserta
alamat
akun_google
```

Tujuannya menjaga:

> **semi-anonimitas dan kode etik evaluasi.**

---

# 42. Catatan tentang Semi-Anonim

Sistem tetap menyimpan konteks:

```text
role
program
kelas
muallim
```

sehingga hasil dapat dianalisis.

Tetapi:

> tidak menyimpan identitas langsung responden.

Dengan demikian sistem bukan anonim absolut secara statistik, tetapi **semi-anonim berbasis konteks**.

---

# 43. Submission ID

Setiap evaluasi mendapatkan:

```text
evaluationId
```

Contoh:

```text
EV-2026-000123
```

ID ini hanya untuk sistem.

Tidak ditampilkan sebagai identitas responden.

---

# 44. Timestamp

Gunakan:

```text
serverTimestamp()
```

bukan waktu dari perangkat pengguna.

Contoh:

```text
submittedAt
```

Ini mencegah manipulasi waktu dari sisi browser.

---

# 45. Anti Double Submit

Saat submit:

```text
isSubmitting = true
```

Button disabled.

Jika berhasil:

```text
isSubmitted = true
```

Kemudian redirect:

```text
/evaluasi/sukses
```

---

# 46. Error Submit

Jika gagal:

```text
Gagal mengirim evaluasi.
Periksa koneksi internet Anda dan coba kembali.
```

Jawaban yang sudah diisi tetap berada di form.

Jangan menghapus jawaban.

---

# 47. Success Page

Setelah berhasil:

```text
✓
EVALUASI BERHASIL DIKIRIM

Terima kasih telah meluangkan waktu
untuk memberikan evaluasi.

Masukan Anda akan menjadi bahan
perbaikan Kursus se-Madura pada
penyelenggaraan berikutnya.
```

---

# 48. Jangan Memberikan Hasil Evaluasi

Responden tidak melihat:

```text
nilai
ranking Muallim
hasil kelas
hasil program
```

setelah submit.

Mereka hanya mendapatkan:

> ucapan terima kasih.

---

# 49. Proteksi dari Refresh

Setelah submit:

```text
/evaluasi/sukses
```

Jika halaman direfresh:

> tetap halaman sukses.

Tidak mengirim ulang data.

---

# 50. QR Code Entry

Form dapat dibuka melalui:

```text
QR Code
```

Satu QR utama:

```text
https://domain.com/evaluasi
```

Atau QR berdasarkan role:

```text
/evaluasi?role=peserta
/evaluasi?role=pendamping
/evaluasi?role=muallim
/evaluasi?role=panitia
```

---

# 51. QR Bukan Pengganti Login

QR hanya digunakan untuk:

> mempermudah akses.

QR tidak memberikan hak admin.

---

# 52. Accessibility

Form harus dapat digunakan:

- dengan ukuran font cukup;
- kontras jelas;
- tombol besar;
- label jelas;
- tidak mengandalkan warna saja.

Contoh:

Jangan hanya:

> tombol hijau = aktif.

Tetapi gunakan:

> border + icon + text.

---

# 53. Mobile First

Prioritas:

```text
Mobile
↓
Tablet
↓
Desktop
```

Minimal nyaman pada:

```text
360px
375px
390px
412px
```

---

# 54. UX Untuk Responden

Responden tidak boleh merasa:

> sedang mengisi formulir administrasi.

Pengalaman yang diinginkan:

```text
Buka
 ↓
Paham
 ↓
Pilih
 ↓
Nilai
 ↓
Tulis
 ↓
Kirim
```

---

# 55. Jangan Terlalu Panjang

Walaupun terdapat banyak aspek evaluasi, form harus dibuat seefisien mungkin.

Target:

```text
5–10 menit
```

untuk evaluasi lengkap.

Jika terlalu banyak pertanyaan:

> responden cenderung memberikan jawaban asal.

---

# 56. Rekomendasi Jumlah Pertanyaan

### Peserta

Sekitar:

```text
20–30 pertanyaan
```

### Pendamping

```text
15–25 pertanyaan
```

### Muallim

```text
15–25 pertanyaan
```

### Panitia

```text
20–30 pertanyaan
```

Jumlah final ditentukan setelah validasi pertanyaan.

---

# 57. Intelligent Question Filtering

Jangan mengambil seluruh collection:

```text
questions
```

kemudian filter semuanya di browser.

Gunakan query berdasarkan:

```text
active
role
programId
```

Jika memungkinkan.

---

# 58. Urutan Pertanyaan

Gunakan:

```text
order
```

Contoh:

```text
1
2
3
4
5
```

Admin dapat mengubah urutan tanpa mengubah source code.

---

# 59. Pertanyaan Aktif

Field:

```text
active: true
```

Jika:

```text
active: false
```

pertanyaan tidak muncul.

Pertanyaan lama tidak perlu dihapus.

---

# 60. Versioning

Setiap evaluasi menyimpan:

```text
formVersion
```

Contoh:

```text
2026.1
```

Jika tahun berikutnya ada perubahan:

```text
2027.1
```

Data tahun sebelumnya tidak berubah.

---

# 61. UAT Fase 9

Sebelum dianggap selesai, lakukan simulasi:

### Peserta

```text
2 orang
```

### Pendamping

```text
2 orang
```

### Muallim

```text
2 orang
```

### Panitia

```text
2 orang
```

Total:

```text
8 responden dummy
```

---

# 62. Yang Harus Diuji

```text
☐ Role selection
☐ Program filtering
☐ Class filtering
☐ Muallim filtering
☐ Dynamic questions
☐ Required validation
☐ Rating
☐ Textarea
☐ NPS
☐ Review
☐ Edit
☐ Submit
☐ Firebase storage
☐ Success page
☐ Refresh protection
☐ Mobile layout
☐ Error handling
```

---

# 63. Definition of Done

Fase 9 selesai jika:

```text
☑ Semua role dapat mengisi
☑ Tidak membutuhkan login
☑ Program dapat dipilih
☑ Kelas dapat dipilih
☑ Muallim dapat dipilih
☑ Pertanyaan dinamis
☑ Evaluasi program tersedia
☑ Evaluasi Muallim tersedia
☑ Kritik tersedia
☑ Saran tersedia
☑ Prioritas perbaikan tersedia
☑ Review tersedia
☑ Submit berhasil
☑ Data masuk Firebase
☑ Identitas pribadi tidak disimpan
☑ Error handling tersedia
☑ Responsive
☑ UAT selesai
```

---

# 64. Output Fase 9

Pada akhir fase ini kita memiliki:

```text
PUBLIC EVALUATION SYSTEM
│
├── Landing
├── Information
├── Role Selection
├── Program Selection
├── Class Selection
├── Muallim Selection
├── Dynamic Questions
├── Rating
├── Open Feedback
├── Criticism
├── Suggestions
├── Priority Improvement
├── Review
├── Submit
└── Success
```

---

# 65. Alur Final Responden

```text
                 MULAI
                   │
                   ▼
             Landing Page
                   │
                   ▼
             Informasi Privasi
                   │
                   ▼
              Pilih Peran
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
     Peserta   Pendamping  Muallim/Panitia
        │          │          │
        └──────────┴──────────┘
                   │
                   ▼
             Pilih Program
                   │
                   ▼
               Pilih Kelas
                   │
                   ▼
             Pilih Muallim
                   │
                   ▼
           Evaluasi Program
                   │
                   ▼
            Evaluasi Muallim
                   │
                   ▼
          Fasilitas & Pelayanan
                   │
                   ▼
             Kritik & Saran
                   │
                   ▼
           Prioritas Perbaikan
                   │
                   ▼
               Review
                   │
                   ▼
              Konfirmasi
                   │
                   ▼
               SUBMIT
                   │
                   ▼
              FIRESTORE
                   │
                   ▼
             SUCCESS PAGE
```

---

# 66. Prinsip Utama Fase 9

Fase ini harus selalu mengikuti tiga prinsip:

### 1. Mudah

Responden dapat mengisi dari HP tanpa perlu dijelaskan panjang.

### 2. Relevan

Pertanyaan berbeda sesuai:

```text
Peserta
Pendamping
Muallim
Panitia
```

### 3. Aman

Tidak meminta identitas pribadi dan hasil individual tidak dibuka secara sembarangan.

---

# 67. Hubungan dengan Fase Berikutnya

Setelah Fase 9 selesai:

```text
Fase 8
Foundation
       ↓
Fase 9
Public Evaluation
       ↓
Fase 10
Admin Dashboard
       ↓
Fase 11
Analytics
       ↓
Fase 12
Laporan & Export
       ↓
Fase 13
Action Plan
       ↓
Fase 14
Security & Production
```

Dengan demikian, **Fase 9 adalah fondasi data utama**. Dashboard pada fase berikutnya tidak perlu lagi menebak-nebak struktur data karena semua jawaban sudah masuk dengan format yang konsisten.
