const BASE = `${import.meta.env.VITE_API_URL}hangman`;

export async function getState() {
  const res = await fetch(`${BASE}/state`);
  return res.json();
}

export async function submitGuess(letter) {
  await fetch(`${BASE}/guess/${letter}`, { method: "POST" });
}

export async function resetGame(category) {
  await fetch(`${BASE}/reset/${category}`, { method: "POST" });
}
