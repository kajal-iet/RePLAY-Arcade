export async function loadCalendar(year, month) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/calendar/get`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({year, month})
  });
  return res.json();
}

export async function saveNote(date, text) {
  await fetch(`${import.meta.env.VITE_API_URL}/calendar/save-note`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({date, text})
  });
}
