import { useEffect, useState } from "react";
import { getState, submitAnswer, resetGame } from "./piglatin.api";
// import "./piglatin.css";

export default function PigLatin() {
  const [game, setGame] = useState(null);
  const [input, setInput] = useState("");

  async function refresh() {
    setGame(await getState());
  }

  useEffect(() => { refresh(); }, []);

  if (!game) return <h2 style={{textAlign:"center"}}>Loading…</h2>;

  return (
    <div className="theme-piglatin">
      <h2>🐷 Pig Latin</h2>

      <div className="rules-card">
        <ul>
          <li>Vowel → + <b>yay</b></li>
          <li>Consonant → move + <b>ay</b></li>
          <li>Preserves punctuation</li>
          <li>Correct = +1 point</li>
        </ul>
      </div>

      <div className="scoreboard">
        <div>Player 1: {game.scores[0]}</div>
        <div>Player 2: {game.scores[1]}</div>
      </div>

      <h3>Player {game.turn + 1}'s Turn</h3>

      <pre className="question">{game.question}</pre>

      <input
        placeholder="Enter Pig Latin"
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={async () => {
        await submitAnswer(input);
        setInput("");
        refresh();
      }}>
        Submit
      </button>

      <button className="secondary-btn" onClick={async () => {
        await resetGame();
        refresh();
      }}>
        Restart
      </button>
    </div>
  );
}
