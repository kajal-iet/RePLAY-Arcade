export async function computeFib(n, mode) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/fibonacci/compute`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ n, mode })
  });
  return res.json();
}
