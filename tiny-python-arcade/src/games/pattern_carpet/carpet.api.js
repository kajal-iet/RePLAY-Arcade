const BASE = "http://localhost:8000/carpet";

export async function getState() {
  const r = await fetch(`${BASE}/state`);
  return r.json();
}

export async function applyChanges(data) {
  await fetch(`${BASE}/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export async function getImage() {
  const r = await fetch(`${BASE}/image`);
  return r.blob();
}
