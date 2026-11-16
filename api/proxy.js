export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, message:'Method not allowed' });
  const target = process.env.APPS_SCRIPT_API_URL;
  const token = process.env.APPS_SCRIPT_API_TOKEN;
  if (!target || !token) return res.status(500).json({ ok:false, message:'Environment Variables belum lengkap.' });
  try {
    const upstream = await fetch(target, {
      method:'POST',
      headers:{'Content-Type':'text/plain;charset=utf-8'},
      body:JSON.stringify({ token, action:req.body?.action, payload:req.body?.payload || {} }),
      redirect:'follow'
    });
    const raw = await upstream.text();
    try { return res.status(200).json(JSON.parse(raw)); }
    catch { return res.status(502).json({ok:false,message:'Respons Apps Script bukan JSON.',detail:raw.slice(0,180)}); }
  } catch (error) { return res.status(502).json({ok:false,message:'Apps Script tidak dapat dihubungi.'}); }
}
