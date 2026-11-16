# Daily Callsheet V2
Arsitektur: Browser/PWA -> Vercel -> /api/proxy -> Google Apps Script -> Google Sheets / Drive.

## Struktur
- api/ : serverless proxy Vercel. Token backend tidak diletakkan di browser.
- src/ : frontend mobile.
- public/ : manifest PWA dan service worker.
- apps-script/ : backend Google Apps Script yang ditambahkan ke project existing.
- docs/ : dokumentasi/pemetaan.

## Deploy ringkas
1. Upload seluruh folder ini ke repository GitHub.
2. Import repository tersebut ke Vercel.
3. Tambahkan APPS_SCRIPT_API_URL dan APPS_SCRIPT_API_TOKEN di Environment Variables Vercel.
4. Pada Apps Script, tambahkan file dari apps-script/ sebagai file baru dan set Script Property CALLSHEET_API_TOKEN.
5. Deploy Apps Script backend sebagai Web App lalu masukkan URL /exec ke APPS_SCRIPT_API_URL.

V2 ini baru fondasi struktur deployment. UI Callsheet lengkap dari V1 selanjutnya dipindahkan ke src/ tanpa google.script.run.
