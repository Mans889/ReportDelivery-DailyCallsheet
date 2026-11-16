# Daily Callsheet V2.8
- Konfirmasi dan PDF sama-sama detail.
- Badge step diperkecil untuk HP.
- Subtitle Slide 2 diperbarui.
- Tanggal dan JO berdampingan.
- JO utama dan JO mutasi dipisahkan. JO utama masuk kolom No. Job Order; JO mutasi menggunakan header `No. Job Order Mutasi` bila tersedia.
- Backend mengekspansi row berdasarkan jumlah Job Order dan menyalin data row terakhir jika perlu. Seluruh perhitungan row dan penulisan tetap berada di dalam ScriptLock untuk mencegah tabrakan antar pengguna.
