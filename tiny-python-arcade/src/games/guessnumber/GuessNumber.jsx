import { useEffect, useState } from "react";
import { getState, resetGame, makeGuess } from "./guessnumber.api";
// import "./guessnumber.css";

export default function GuessNumber() {
  const [game, setGame] = useState(null);
  const [guess, setGuess] = useState("");

  async function refresh() {
    setGame(await getState());
  }

  useEffect(() => { refresh(); }, []);

  if (!game) return <h2>Loading…</h2>;

  const remaining = game.max_attempts - game.attempts;

  return (
    <div className="theme-guess">
      <h2>🎯 Guess The Number</h2>

      <div className="rules-card">
        <h3>📜 How It Works</h3>
        <ul>
          <li>The system picks a secret number in the chosen range.</li>
          <li>Each guess uses one attempt.</li>
          <li>Hints guide you: Too Low, Too High, or Correct.</li>
          <li>Run out of attempts → Game Over.</li>
          <li>Changing difficulty restarts the game.</li>
        </ul>
      </div>

      <div className="info-bar">
        <span>🎯 Range: 1–{game.max_num}</span>
        <span>⏳ Remaining: {remaining}</span>
      </div>

      <select onChange={e => { resetGame(e.target.value); refresh(); }}>
        {["Easy","Medium","Hard"].map(l => (
          <option key={l} selected={l===game.level}>{l}</option>
        ))}
      </select>

      <input
        type="number"
        value={guess}
        onChange={e => setGuess(e.target.value)}
        min="1"
        max={game.max_num}
      />

      <button disabled={game.over} onClick={async () => {
        await makeGuess(Number(guess));
        setGuess("");
        refresh();
      }}>
        Submit Guess
      </button>

      {game.history.length > 0 && (
        <div className="history">
          <h4>Guess History</h4>
          {game.history.map((h,i)=>(
            <p key={i}><b>{h[0]}</b> → {h[1]}</p>
          ))}
        </div>
      )}

      {remaining <= 3 && !game.over && (
        <div className="hint">
          💡 Smart Hint: The number is narrowing!
        </div>
      )}

      {game.over && (
        <button className="secondary-btn" onClick={async () => {
          await resetGame(game.level);
          refresh();
        }}>
          🔁 Play Again
        </button>
      )}
    </div>
  );
}
