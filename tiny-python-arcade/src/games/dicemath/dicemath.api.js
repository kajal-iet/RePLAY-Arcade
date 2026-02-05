const BASE = "http://localhost:8000/dicemath";

export async function getQuestion(min_dice, max_dice) {
  const res = await fetch(`${BASE}/question`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ min_dice, max_dice })
  });
  return res.json();
}
