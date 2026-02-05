const BASE = "http://localhost:8000/guessnumber";

export async function getState() {
  const res = await fetch(`${BASE}/state`);
  return res.json();
}

export async function resetGame(level) {
  await fetch(`${BASE}/reset/${level}`, { method: "POST" });
}

export async function makeGuess(n) {
  await fetch(`${BASE}/guess/${n}`, { method: "POST" });
}
