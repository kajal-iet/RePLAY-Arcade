const BASE = `${import.meta.env.VITE_API_URL}/diceroller`;

export async function rollDice(expression) {
  const res = await fetch(`${BASE}/roll`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ expression })
  });
  return res.json();
}
