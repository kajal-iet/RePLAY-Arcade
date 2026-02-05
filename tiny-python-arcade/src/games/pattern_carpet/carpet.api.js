const BASE = "http://localhost:8000/carpet";

export async function getState() {
  return fetch(`${BASE}/state`).then(r => r.json());
}

export async function applyChanges(data) {
  await fetch(`${BASE}/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export async function getImage() {
  return fetch(`${BASE}/image`).then(r => r.blob());
}
