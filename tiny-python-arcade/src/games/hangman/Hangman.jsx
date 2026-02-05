import { useEffect, useState } from "react";
import { getState, submitGuess, resetGame } from "./hangman.api";
// import "./hangman.css";

export default function Hangman() {
  const [game, setGame] = useState(null);
  const [input, setInput] = useState("");

  async function refresh() {
    setGame(await getState());
  }

  useEffect(() => { refresh(); }, []);

  if (!game) return <h2 style={{ textAlign:"center" }}>Loading…</h2>;

  const art = game.pics[game.missed.length];

  const word = game.secret
    .split("")
    .map(c => game.correct.includes(c) ? c : "_")
    .join(" ");

  return (
    <div className="theme-hangman">

      <h2>🪢 Hangman</h2>

      <div className="stats-bar">
        <span>🏆 Wins: {game.wins}</span>
        <span>💀 Losses: {game.losses}</span>
      </div>

      <div className="rules-card">
        <ul>
          <li>Choose a category</li>
          <li>Guess one letter at a time</li>
          <li>Wrong guess builds the hangman</li>
          <li>Finish word → Win</li>
          <li>Finish drawing → Lose</li>
        </ul>
      </div>

      <select onChange={e => resetGame(e.target.value).then(refresh)}>
        {game.categories.map(c => <option key={c}>{c}</option>)}
      </select>

      <pre className="terminal">{art}</pre>

      <div className="word">{word}</div>

      <div className="guess-panel">
        <input
          value={input}
          maxLength={1}
          placeholder="A–Z"
          onChange={e => setInput(e.target.value.toUpperCase())}
          disabled={game.locked}
        />

        <button
          disabled={game.locked}
          onClick={async () => {
            if (!input) return;
            await submitGuess(input);
            setInput("");
            refresh();
          }}
        >
          GUESS
        </button>
      </div>

      <button
        className="secondary-btn"
        onClick={() => resetGame(game.category).then(refresh)}
      >
        🔁 Reset Game
      </button>

      {game.logs.map((l,i) => <div key={i} className="result-box">{l}</div>)}
    </div>
  );
}
