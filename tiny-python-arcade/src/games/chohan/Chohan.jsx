import { useState } from "react";
import { roll } from "./chohan.api";

export default function chohan() {

  const [purse, setPurse] = useState(5000);
  const [bet, setBet] = useState(100);
  const [choice, setChoice] = useState("CHO");
  const [result, setResult] = useState(null);

  async function handleRoll() {
  const payload = {
    bet: Number(bet),
    choice,
    purse: Number(purse)
  };

  const data = await roll(payload);
  setResult(data);
  setPurse(data.purse);
  }


  function reset() {
    setResult(null);
    setBet(100);
    setChoice("CHO");
  }

  return (
    <div className=" bitmap-game chohan-game theme-chohan">

      <h2>🎲 Cho-Han</h2>
      <p className="subtitle">Traditional Japanese Even-Odd Dice Game</p>

      <div className="rules-card">
        <h3>📜 Rules</h3>
        <ul>
          <li>Two dice are rolled</li>
          <li>Even total = <b>CHO</b></li>
          <li>Odd total = <b>HAN</b></li>
          <li>House keeps 10% of winnings</li>
        </ul>
      </div>

      <div className="score-box">
        💰 Purse: <b>{purse}</b> mon
      </div>

      {!result && (
        <div className="input-card">

          <div className="input-group">
            <label>Bet Amount</label>
            <input
              type="number"
              min="1"
              max={purse}
              value={bet}
              onChange={e => setBet(+e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Your Call</label>
            <select value={choice} onChange={e => setChoice(e.target.value)}>
              <option>CHO</option>
              <option>HAN</option>
            </select>
          </div>

          <button onClick={handleRoll}>🎲 Roll Dice</button>

        </div>
      )}

      {result && (
        <div className="result-card">

          <div className="dice-display">
            🎲 {result.j1} — {result.j2}
          </div>

          <p>
            {result.net > 0
              ? `🎉 You won ${result.net} mon`
              : `❌ You lost ${-result.net} mon`}
          </p>

          <p>Correct: <b>{result.correct}</b></p>

          <button onClick={reset}>🔁 Play Again</button>

        </div>
      )}

    </div>
  );
}
