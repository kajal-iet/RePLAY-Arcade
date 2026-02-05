const BASE = "http://localhost:8000/carrot";

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
