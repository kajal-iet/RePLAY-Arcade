
console.log("API URL:", import.meta.env.VITE_API_URL);
const BASE = `${import.meta.env.VITE_API_URL}/bagels`;

export async function startBagels(level) {
  const res = await fetch(`${BASE}/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ level })
  });
  return res.json();
}

export async function submitGuess(payload) {
  const res = await fetch(`${BASE}/guess`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}
