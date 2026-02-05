export async function loadCalendar(year, month) {
  const res = await fetch("http://localhost:8000/calendar/get", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({year, month})
  });
  return res.json();
}

export async function saveNote(date, text) {
  await fetch("http://localhost:8000/calendar/save-note", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({date, text})
  });
}
