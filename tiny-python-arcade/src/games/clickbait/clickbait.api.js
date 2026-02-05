const BASE = "http://localhost:8000/clickbait";

export async function generateHeadlines(payload) {
  const res = await fetch(`${BASE}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}
