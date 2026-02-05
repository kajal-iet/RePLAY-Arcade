const BASE = "http://localhost:8000/diceroller";

export async function rollDice(expression) {
  const res = await fetch(`${BASE}/roll`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ expression })
  });
  return res.json();
}
