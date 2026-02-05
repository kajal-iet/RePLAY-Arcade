const BASE = "http://localhost:8000";

export async function startBagels(level) {
  return fetch(`${BASE}/bagels/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ level })
  }).then(r => r.json());
}

export async function submitGuess(payload) {
  return fetch(`${BASE}/bagels/guess`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(r => r.json());
}

export async function startBagelsSandbox(code, level) {
  return fetch(`${BASE}/sandbox/bagels/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, level })
  }).then(r => r.json());
}

export async function submitGuessSandbox(payload) {
  return fetch(`${BASE}/sandbox/bagels/guess`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(r => r.json());
}

export async function runBagelsSandbox(code, digits) {
  return fetch("http://localhost:8000/sandbox/run/bagels", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, digits })
  }).then(r => r.json());
}
