const BASE = `${import.meta.env.VITE_API_URL}/carrot`;

export async function startRound(payload) {
  const res = await fetch(`${BASE}/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function reveal(payload) {
  const res = await fetch(`${BASE}/reveal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}
