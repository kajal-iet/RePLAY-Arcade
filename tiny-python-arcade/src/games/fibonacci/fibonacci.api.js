export async function computeFib(n, mode) {
  const res = await fetch("http://localhost:8000/fibonacci/compute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ n, mode })
  });
  return res.json();
}
