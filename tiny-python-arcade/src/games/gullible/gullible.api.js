const BASE = `${import.meta.env.VITE_API_URL}/gullible`;

export async function getState() {
  const res = await fetch(`${BASE}/state`);
  return res.json();
}

export async function sendResponse(text) {
  await fetch(`${BASE}/respond`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
}

export async function resetGame() {
  await fetch(`${BASE}/reset`, { method: "POST" });
}
