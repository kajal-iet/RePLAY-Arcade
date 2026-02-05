const BASE = "http://localhost:8000/collatz";

export async function getSingle(n) {
  const res = await fetch(`${BASE}/single`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ n })
  });
  return res.json();
}

export async function compare(nums) {
  const res = await fetch(`${BASE}/compare`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ numbers: nums })
  });
  return res.json();
}
