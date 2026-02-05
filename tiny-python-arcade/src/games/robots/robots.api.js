const BASE = "http://localhost:8000/robots";

export async function getState() {
  return (await fetch(`${BASE}/state`)).json();
}

export async function move(dx, dy) {
  await fetch(`${BASE}/move/${dx}/${dy}`, { method: "POST" });
}

export async function teleport() {
  await fetch(`${BASE}/teleport`, { method: "POST" });
}

export async function resetGame() {
  await fetch(`${BASE}/reset`, { method: "POST" });
}
