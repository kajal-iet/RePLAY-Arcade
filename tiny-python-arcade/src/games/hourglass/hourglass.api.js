const BASE = `${import.meta.env.VITE_API_URL}/hourglass`;

export async function getFrame() {
  const r = await fetch(`${BASE}/frame`);
  return r.json();
}

export async function resetGlass() {
  await fetch(`${BASE}/reset`, { method: "POST" });
}
