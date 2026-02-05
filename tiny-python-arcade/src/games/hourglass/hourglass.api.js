const BASE = "http://localhost:8000/hourglass";

export async function getFrame() {
  const r = await fetch(`${BASE}/frame`);
  return r.json();
}

export async function resetGlass() {
  await fetch(`${BASE}/reset`, { method: "POST" });
}
