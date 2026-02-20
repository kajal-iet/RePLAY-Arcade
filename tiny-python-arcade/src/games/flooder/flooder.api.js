const BASE = `${import.meta.env.VITE_API_URL}/flooder`;

export async function getState() {
  const res = await fetch(`${BASE}/state`);
  return res.json();
}

export async function pickColor(t) {
  await fetch(`${BASE}/pick/${t}`, { method: "POST" });
}

export async function resetGame() {
  await fetch(`${BASE}/reset`, { method: "POST" });
}
