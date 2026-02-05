import { useEffect, useState } from "react";
import { loadCalendar, saveNote } from "./calendar.api";

export default function Calendar() {
  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [calendar, setCalendar] = useState(null);
  const [selected, setSelected] = useState("");
  const [note, setNote] = useState("");

  async function refresh() {
    const data = await loadCalendar(year, month);
    setCalendar(data);
  }

  useEffect(() => {
    refresh();
  }, [year, month]);

  async function save() {
    if (!selected) return;
    await saveNote(selected, note);
    setNote("");
    refresh();
  }

  return (
    <div className=" theme-calendar">

      <h2>📅 Smart Calendar</h2>
      <p className="subtitle">Plan your month with notes & reminders</p>

      <div className="rules-card rules-blue">
        <ul>
          <li>Select any month & year</li>
          <li>Click a day to add a note</li>
          <li>Notes persist across sessions</li>
          <li>Today is highlighted automatically</li>
        </ul>
      </div>

      <div className="calendar-controls">
        <input
          type="number"
          value={year}
          onChange={e => setYear(+e.target.value)}
        />

        <select
          value={month}
          onChange={e => setMonth(+e.target.value)}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      {calendar && (
        <div className="calendar-grid">
          {calendar.weeks.map((week, i) => (
            <div className="week" key={i}>
              {week.map((d, j) => (
                <div
                  key={j}
                  className={`day ${d.month !== month ? "dim" : ""} ${d.is_today ? "today" : ""}`}
                  onClick={() => {
                    const key = `${d.year}-${String(d.month).padStart(2, "0")}-${String(d.day).padStart(2, "0")}`;
                    setSelected(key);
                    setNote(d.note || "");
                  }}
                >
                  <span className="day-number">{d.day}</span>
                  {d.note && <small className="day-note">{d.note}</small>}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div className="note-panel">
          <h4>✏️ {selected}</h4>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Write your note here..."
          />
          <button onClick={save}>💾 Save Note</button>
        </div>
      )}
    </div>
  );
}
