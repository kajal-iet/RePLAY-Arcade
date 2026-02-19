const BASE = `${import.meta.env.VITE_API_URL}/bitmap`;

export async function generateBitmap(message, color) {
  const res = await fetch(`${BASE}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, color })
  });
  return res.json();
}
