import pandas as pd

data = [
    {"Urutan": 1, "TeksPertanyaan": "Materi yang diberikan sesuai dengan tujuan program yang saya ikuti.", "Tipe": "rating", "Kategori": "materi", "Wajib": "Ya"},
    {"Urutan": 2, "TeksPertanyaan": "Materi yang diberikan mudah dipahami dan diikuti.", "Tipe": "rating", "Kategori": "materi", "Wajib": "Ya"},
    {"Urutan": 3, "TeksPertanyaan": "Materi yang diberikan sesuai dengan kebutuhan dan kemampuan saya sebagai peserta.", "Tipe": "rating", "Kategori": "materi", "Wajib": "Ya"},
    {"Urutan": 4, "TeksPertanyaan": "Materi yang diberikan memberikan manfaat bagi peningkatan kemampuan saya.", "Tipe": "rating", "Kategori": "materi", "Wajib": "Ya"},
    
    {"Urutan": 5, "TeksPertanyaan": "Muallim menguasai materi yang disampaikan.", "Tipe": "rating", "Kategori": "muallim", "Wajib": "Ya"},
    {"Urutan": 6, "TeksPertanyaan": "Muallim menyampaikan materi dengan jelas dan mudah dipahami.", "Tipe": "rating", "Kategori": "muallim", "Wajib": "Ya"},
    {"Urutan": 7, "TeksPertanyaan": "Cara Muallim mengajar sesuai dengan kebutuhan peserta.", "Tipe": "rating", "Kategori": "muallim", "Wajib": "Ya"},
    {"Urutan": 8, "TeksPertanyaan": "Muallim memberikan kesempatan kepada peserta untuk bertanya dan berinteraksi.", "Tipe": "rating", "Kategori": "muallim", "Wajib": "Ya"},
    {"Urutan": 9, "TeksPertanyaan": "Muallim memberikan bimbingan dan koreksi yang membantu saya memperbaiki kemampuan.", "Tipe": "rating", "Kategori": "muallim", "Wajib": "Ya"},
    {"Urutan": 10, "TeksPertanyaan": "Muallim memberikan perhatian yang cukup terhadap perkembangan peserta.", "Tipe": "rating", "Kategori": "muallim", "Wajib": "Ya"},
    
    {"Urutan": 11, "TeksPertanyaan": "Waktu yang tersedia cukup untuk mengikuti proses pembelajaran dengan baik.", "Tipe": "rating", "Kategori": "waktu", "Wajib": "Ya"},
    {"Urutan": 12, "TeksPertanyaan": "Pembagian waktu antara penyampaian materi dan praktik sudah sesuai.", "Tipe": "rating", "Kategori": "waktu", "Wajib": "Ya"},
    {"Urutan": 13, "TeksPertanyaan": "Suasana pembelajaran membuat saya nyaman untuk belajar dan berlatih.", "Tipe": "rating", "Kategori": "waktu", "Wajib": "Ya"},
    
    {"Urutan": 14, "TeksPertanyaan": "Ruang atau tempat pembelajaran nyaman digunakan.", "Tipe": "rating", "Kategori": "fasilitas", "Wajib": "Ya"},
    {"Urutan": 15, "TeksPertanyaan": "Kebersihan tempat pembelajaran terjaga dengan baik.", "Tipe": "rating", "Kategori": "fasilitas", "Wajib": "Ya"},
    {"Urutan": 16, "TeksPertanyaan": "Sarana dan peralatan pembelajaran yang tersedia cukup memadai.", "Tipe": "rating", "Kategori": "fasilitas", "Wajib": "Ya"},
    {"Urutan": 17, "TeksPertanyaan": "Fasilitas umum yang tersedia cukup mendukung kenyamanan saya selama mengikuti kursus.", "Tipe": "rating", "Kategori": "fasilitas", "Wajib": "Ya"},
    
    {"Urutan": 18, "TeksPertanyaan": "Informasi mengenai kegiatan disampaikan dengan jelas kepada peserta.", "Tipe": "rating", "Kategori": "pelaksanaan", "Wajib": "Ya"},
    {"Urutan": 19, "TeksPertanyaan": "Pelaksanaan kegiatan berjalan sesuai dengan jadwal yang telah ditentukan.", "Tipe": "rating", "Kategori": "pelaksanaan", "Wajib": "Ya"},
    {"Urutan": 20, "TeksPertanyaan": "Secara keseluruhan, pelaksanaan kursus berjalan dengan baik.", "Tipe": "rating", "Kategori": "pelaksanaan", "Wajib": "Ya"},
    
    {"Urutan": 21, "TeksPertanyaan": "Secara keseluruhan, seberapa puas Anda mengikuti Kursus Tartil Al-Qur'an se-Madura?", "Tipe": "rating", "Kategori": "umum", "Wajib": "Ya"},
    {"Urutan": 22, "TeksPertanyaan": "Seberapa besar manfaat yang Anda rasakan setelah mengikuti kursus ini?", "Tipe": "rating", "Kategori": "umum", "Wajib": "Ya"},
    
    {"Urutan": 23, "TeksPertanyaan": "Apa hal terbaik dari kursus ini yang menurut Anda harus dipertahankan pada tahun depan?", "Tipe": "text", "Kategori": "saran", "Wajib": "Ya"},
    {"Urutan": 24, "TeksPertanyaan": "Apa hal yang menurut Anda paling perlu diperbaiki pada kursus tahun depan?", "Tipe": "text", "Kategori": "saran", "Wajib": "Ya"},
    {"Urutan": 25, "TeksPertanyaan": "Apa yang perlu ditingkatkan dari sisi sarana dan prasarana untuk mendukung kenyamanan peserta?", "Tipe": "text", "Kategori": "saran", "Wajib": "Ya"},
    {"Urutan": 26, "TeksPertanyaan": "Jika Anda memiliki saran atau masukan lain untuk meningkatkan kualitas Kursus Tartil Al-Qur'an se-Madura, silakan sampaikan di sini.", "Tipe": "text", "Kategori": "saran", "Wajib": "Tidak"},
    
    {"Urutan": 27, "TeksPertanyaan": "Jika Kursus Tartil Al-Qur'an se-Madura dilaksanakan kembali tahun depan, apakah Anda bersedia mengikutinya kembali?", "Tipe": "boolean", "Kategori": "umum", "Wajib": "Ya"},
]

df = pd.DataFrame(data)
df.to_excel("import_kuesioner_peserta.xlsx", index=False)
print("Berhasil membuat import_kuesioner_peserta.xlsx")
