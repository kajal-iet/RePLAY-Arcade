const BASE = `${import.meta.env.VITE_API_URL}/caesar`;

export async function translate(payload) {
  const res = await fetch(`${BASE}/translate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function hack(payload) {
  const res = await fetch(`${BASE}/hack`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}
