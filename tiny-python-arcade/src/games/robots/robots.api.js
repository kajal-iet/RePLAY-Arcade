const BASE = `${import.meta.env.VITE_API_URL}/robots`;

export async function getState() {
  return fetch(`${BASE}/state`).then(r => r.json());
}

export async function move(move) {
  await fetch(`${BASE}/move`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ move })
  });
}

export async function teleport() {
  await fetch(`${BASE}/teleport`, {
    method: "POST"
  });
}

// ⭐ RESET GAME
export async function reset() {
  await fetch(`${BASE}/reset`, {
    method: "POST"
  });
}
