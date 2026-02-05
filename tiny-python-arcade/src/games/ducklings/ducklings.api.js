const BASE = "http://localhost:8000/ducklings";

export async function getDucks(count, seasonal) {
  const res = await fetch(`${BASE}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ count, seasonal })
  });
  return res.json();
}
