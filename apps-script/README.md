# Apps Script backend
File dalam folder ini ditempel sebagai file .gs BARU pada project Apps Script existing.
Jangan menimpa Code.gs, RemoveDuplicated.gs, atau DataUnit.gs.
Set Script Property CALLSHEET_API_TOKEN dengan nilai yang sama seperti APPS_SCRIPT_API_TOKEN di Vercel.
Catatan: sebelum produksi, fungsi Callsheet V1 (getBootstrapData, submitData, getJobStatus, PDF/Drive) perlu dipindahkan ke modul Callsheet*.gs dan konflik doPost/doGet existing harus dicek.
