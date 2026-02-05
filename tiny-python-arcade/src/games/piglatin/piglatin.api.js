const BASE = "http://localhost:8000/piglatin";

export async function getState() {
  const res = await fetch(`${BASE}/state`);
  return res.json();
}

export async function submitAnswer(text) {
  await fetch(`${BASE}/submit/${encodeURIComponent(text)}`, { method: "POST" });
}

export async function resetGame() {
  await fetch(`${BASE}/reset`, { method: "POST" });
}
