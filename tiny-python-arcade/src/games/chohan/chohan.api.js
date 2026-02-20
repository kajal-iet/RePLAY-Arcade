const BASE = `${import.meta.env.VITE_API_URL}/chohan`;

export async function roll(payload) {
  const res = await fetch(`${BASE}/roll`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Roll API failed:", text);
    throw new Error(text);
  }

  return res.json();
}

