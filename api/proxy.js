export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, message:'Method not allowed' });
  const target = process.env.APPS_SCRIPT_API_URL;
  const token = process.env.APPS_SCRIPT_API_TOKEN;
  if (!target || !token) return res.status(500).json({ ok:false, message:'Server belum dikonfigurasi' });
  try {
    const upstream = await fetch(target, {
      method:'POST',
      headers:{'content-type':'text/plain;charset=utf-8'},
      body:JSON.stringify({ token, ...req.body })
    });
    const text = await upstream.text();
    try { return res.status(200).json(JSON.parse(text)); }
    catch { return res.status(upstream.ok ? 200 : 502).json({ok:false,message:'Respons backend tidak valid'}); }
  } catch (e) {
    return res.status(502).json({ok:false,message:'Backend tidak dapat dihubungi'});
  }
}
