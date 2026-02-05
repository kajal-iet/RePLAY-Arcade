export async function analyzeNumber(n){
  const res = await fetch("http://localhost:8000/factors/analyze",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({number:n})
  });
  return res.json();
}
