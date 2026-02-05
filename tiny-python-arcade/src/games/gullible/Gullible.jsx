import { useEffect, useState } from "react";
import { getState, sendResponse, resetGame } from "./gullible.api";
// import "./gullible.css";

export default function Gullible() {
  const [game, setGame] = useState(null);
  const [input, setInput] = useState("");

  async function refresh() {
    const data = await getState();
    setGame(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  if (!game) return <h2>Loading…</h2>;

  return (
    <div className="theme-gullible">
      <h2>😄 Gullible</h2>
      <p className="subtitle">Inspired by Al Sweigart</p>

      <div className="rules-card">
        <h3>📜 How It Works</h3>
        <ul>
          <li>Answer using <b>yes / y</b> or <b>no / n</b>.</li>
          <li>Each <b>yes</b> makes the game continue.</li>
          <li>Every 5 yeses triggers a fun message.</li>
          <li>Type <b>no</b> to finally finish the game.</li>
        </ul>
      </div>

      {!game.finished && (
        <>
          <p><b>Do you want to know how to keep a gullible person busy for hours?</b></p>

          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="y / n / yes / no"
          />

          <button
            onClick={async () => {
              await sendResponse(input);
              setInput("");
              await refresh();     // 🔑 always sync UI with backend
            }}
          >
            Submit
          </button>

          {game.level && game.yes_count > 0 && (
            <p style={{ opacity: 0.7 }}>
              Current level: <b>{game.level}</b>
            </p>
          )}
        </>
      )}

      {game.message && <div className="warning">{game.message}</div>}

      {game.finished && (
        <div className="result-box">
          <h3>Thank you. Have a nice day! 😊</h3>
          <p>You said <b>YES</b> {game.yes_count} times.</p>
          <p><b>Gullibility Level:</b> {game.level}</p>

          <button
            className="secondary-btn"
            onClick={async () => {
              await resetGame();
              await refresh();
            }}
          >
            🔁 Play Again
          </button>
        </div>
      )}
    </div>
  );
}
