const BASE = "http://localhost:8000/hacking";

export async function getState() {
  const res = await fetch(`${BASE}/state`);
  return res.json();
}

export async function submitGuess(word) {
  await fetch(`${BASE}/guess/${word}`, { method: "POST" });
}

export async function resetGame() {
  await fetch(`${BASE}/reset`, { method: "POST" });
}
