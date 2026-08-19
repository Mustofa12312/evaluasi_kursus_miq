import pandas as pd

# Data Program
programs = [
    {"ID": "prog_tahsin", "Nama": "Kursus Tahsin"},
    {"ID": "prog_tartil", "Nama": "Kursus Tartil"},
    {"ID": "prog_qiraah", "Nama": "Kursus Qira'ah"}
]
pd.DataFrame(programs).to_excel("import_program.xlsx", index=False)

# Data Kelas
classes = [
    {"ID": "cls_tahsin_1", "Nama": "Kelas 1", "ProgramID": "prog_tahsin"},
    {"ID": "cls_tahsin_2", "Nama": "Kelas 2", "ProgramID": "prog_tahsin"},
    {"ID": "cls_tahsin_3", "Nama": "Kelas 3", "ProgramID": "prog_tahsin"},
    
    {"ID": "cls_tartil_1", "Nama": "Kelas 1", "ProgramID": "prog_tartil"},
    {"ID": "cls_tartil_2", "Nama": "Kelas 2", "ProgramID": "prog_tartil"},
    
    {"ID": "cls_qiraah_1", "Nama": "Kelas 1", "ProgramID": "prog_qiraah"},
]
pd.DataFrame(classes).to_excel("import_kelas.xlsx", index=False)

# Data Muallim
muallims = [
    {"ID": "mual_1", "Nama": "Ustadz Ahmad", "ClassID": "cls_tahsin_1"},
    {"ID": "mual_2", "Nama": "Ustadz Budi", "ClassID": "cls_tahsin_2"},
    {"ID": "mual_3", "Nama": "Ustadzah Siti", "ClassID": "cls_tahsin_3"},
    {"ID": "mual_4", "Nama": "Ustadz Hasan", "ClassID": "cls_tartil_1"},
]
pd.DataFrame(muallims).to_excel("import_muallim.xlsx", index=False)

print("Berhasil membuat file Excel.")
