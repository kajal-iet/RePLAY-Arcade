const BASE = `${import.meta.env.VITE_API_URL}/blackjack`;

export const startGame = async () => fetch(`${BASE}/start`, { method: "POST" }).then(r => r.json());
export const hit = async () => fetch(`${BASE}/hit`, { method: "POST" }).then(r => r.json());
export const stand = async () => fetch(`${BASE}/stand`, { method: "POST" }).then(r => r.json());
