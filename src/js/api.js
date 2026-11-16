export async function api(action, payload={}) {
  const r = await fetch('/api/proxy', {method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action,payload})});
  const data = await r.json();
  if (!r.ok || data.ok === false) throw new Error(data.message || 'Request gagal');
  return data;
}
