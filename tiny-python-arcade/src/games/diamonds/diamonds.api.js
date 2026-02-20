const BASE = `${import.meta.env.VITE_API_URL}/diamonds`;

export async function generateDiamond(payload) {
  const res = await fetch(`${BASE}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function rotateDiamond(lines) {
  const res = await fetch(`${BASE}/rotate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lines })
  });
  return res.json();
}
