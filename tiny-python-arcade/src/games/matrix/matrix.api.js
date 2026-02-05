const BASE = "http://localhost:8000/matrix";

export async function setMatrixMode(mode) {
  const res = await fetch(`${BASE}/config`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mode })
  });
  return res.json();
}
