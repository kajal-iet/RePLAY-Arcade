const BASE = `${import.meta.env.VITE_API_URL}/fastdraw`;

export async function startRound() {
  const res = await fetch(`${BASE}/start`, { method: "POST" });
  return res.json();
}

export async function clickNow(allowed) {
  const res = await fetch(`${BASE}/click?allowed=${allowed}`, { method: "POST" });
  return res.json();
}

export async function getStats() {
  const res = await fetch(`${BASE}/stats`);
  return res.json();
}

export async function resetStats() {
  await fetch(`${BASE}/reset`, { method: "POST" });
}
