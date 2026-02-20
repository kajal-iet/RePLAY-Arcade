export async function analyzeNumber(n){
  const res = await fetch(`${import.meta.env.VITE_API_URL}/factors/analyze`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({number:n})
  });
  return res.json();
}
