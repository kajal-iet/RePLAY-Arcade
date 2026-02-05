const API = "http://127.0.0.1:8000";

export async function startDvd(config) {
  const res = await fetch(`${API}/dvd/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(config)
  });
  return res.json();
}

export async function nextFrame(state) {
  const res = await fetch(`${API}/dvd/frame`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state)
  });
  return res.json();
}
