const BASE = `${import.meta.env.VITE_API_URL}`;

export async function getFrame() {
  const res = await fetch(`${BASE}/frame`);
  return res.json();
}

export async function addFish() {
  await fetch(`${BASE}/fish`, { method: "POST" });
}

export async function addCrab() {
  await fetch(`${BASE}/crab`, { method: "POST" });
}

export async function addKelp() {
  await fetch(`${BASE}/kelp`, { method: "POST" });
}
