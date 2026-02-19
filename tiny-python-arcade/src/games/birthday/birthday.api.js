const BASE = `${import.meta.env.VITE_API_URL}/birthday`;

export async function runSimulation(people, simulations) {
  const res = await fetch(`${BASE}/simulate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ people, simulations })
  });
  return res.json();
}

export async function getGraph(start, end) {
  const res = await fetch(`${BASE}/graph`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ start, end })
  });
  return res.json();
}
