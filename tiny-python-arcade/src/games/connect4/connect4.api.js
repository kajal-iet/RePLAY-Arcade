const BASE = `${import.meta.env.VITE_API_URL}/connect4`;

export async function getState() {
  const res = await fetch(`${BASE}/state`);
  return res.json();
}

export async function dropTile(col) {
  await fetch(`${BASE}/drop/${col}`, { method: "POST" });
}

export async function resetGame() {
  await fetch(`${BASE}/reset`, { method: "POST" });
}
