const BASE = `${import.meta.env.VITE_API_URL}/clickbait`;

export async function generateHeadlines(payload) {
  const res = await fetch(`${BASE}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}
