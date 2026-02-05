import { useEffect, useState } from "react";
import { getState, submitGuess, resetGame } from "./hacking.api";
// import "./hacking.css";

export default function Hacking() {
  const [game, setGame] = useState(null);
  const [input, setInput] = useState("");

  async function refresh() {
    setGame(await getState());
  }

  useEffect(() => { refresh(); }, []);

  if (!game) return <h2>Loading…</h2>;

  return (
    <div className="theme-hacking">
      <h2>🖥️ Hacking Minigame</h2>

      <div className="rules-card">
        <h3>📜 How It Works</h3>
        <ul>
          <li>One of the 7-letter words is the password.</li>
          <li>You have <b>4 attempts</b>.</li>
          <li>Guess only from the displayed list.</li>
          <li>Feedback shows correct letters in correct positions.</li>
          <li>🧊 Cold (0–1) | 🌡 Warm (2–4) | 🔥 Hot (5–6)</li>
        </ul>
      </div>

      <div className="hack-terminal hack-memory">
        {game.words.join("\n")}
      </div>

      {!game.locked && (
        <>
          <input
            value={input}
            onChange={e => setInput(e.target.value.toUpperCase())}
            placeholder="ENTER PASSWORD"
          />

          <button onClick={async () => {
            await submitGuess(input);
            setInput("");
            refresh();
          }}>
            EXECUTE
          </button>
        </>
      )}

      {game.logs.length > 0 && (
        <>
          <h4>Terminal Output</h4>
          <div className="hack-terminal hack-log">
            {game.logs.join("\n")}
          </div>
        </>
      )}

      {game.locked && (
        <button className="secondary-btn" onClick={async () => {
          await resetGame();
          refresh();
        }}>
          🔁 Restart Hack
        </button>
      )}
    </div>
  );
}
