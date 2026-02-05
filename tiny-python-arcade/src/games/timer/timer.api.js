const BASE = "http://localhost:8000/timer";

export async function startTimer(payload) {
  const res = await fetch(`${BASE}/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function nextPhase(payload) {
  const res = await fetch(`${BASE}/next`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}
