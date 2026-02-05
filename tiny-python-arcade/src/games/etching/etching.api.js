const BASE = "http://localhost:8000/etching";

export async function drawCanvas(moves){
  const res = await fetch(`${BASE}/draw`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({moves})
  });
  return res.json();
}

export async function exportPNG(moves){
  const res = await fetch(`${BASE}/export`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({moves})
  });
  return res.json();
}
