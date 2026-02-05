import { useState } from "react";
import { startRound, reveal } from "./carrot.api";

export default function Carrot() {

  const [step, setStep] = useState(0);
  const [game, setGame] = useState(null);
  const [swapped, setSwapped] = useState(false);
  const [winner, setWinner] = useState("");
  const [scores, setScores] = useState({ p1: 0, p2: 0 });

  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");

  async function startGame() {
    const data = await startRound({ p1, p2 });
    setGame(data);
    setStep(1);
    setSwapped(false);
    setWinner("");
  }

  function handleSwap() {
    setSwapped(true);
    handleReveal(true);
  }

  async function handleReveal(isSwapped = false) {
    const res = await reveal({
      carrot_in_red: game.carrot_in_red,
      swapped: isSwapped
    });

    setWinner(res.winner);

    setScores(prev => {
      const updated = { ...prev };
      if (res.winner === "red") updated.p1++;
      else updated.p2++;
      return updated;
    });

    setStep(3);
  }

  function newRound() {
    setStep(0);
    setGame(null);
    setSwapped(false);
    setWinner("");
  }

  function resetAll() {
    setStep(0);
    setGame(null);
    setSwapped(false);
    setWinner("");
    setScores({ p1: 0, p2: 0 });
    setP1("");
    setP2("");
  }

  return (
    <div className="game-shell bitmap-game carrot-game theme-carrot">

      <h2>🥕 Carrot Bluff</h2>
      <p className="subtitle">A social bluffing game</p>

      <div className="rules-card">
        <h3>📜 Rules</h3>
        <ul>
          <li>One box has the carrot — one doesn’t</li>
          <li>Player 1 peeks and may bluff</li>
          <li>Player 2 chooses to swap or not</li>
          <li>Winner gets the carrot 🥕</li>
        </ul>
      </div>

      <div className="score-box">
        <div><b>{p1 || "Player 1"}</b><br />{scores.p1}</div>
        <div><b>{p2 || "Player 2"}</b><br />{scores.p2}</div>
      </div>

      {step === 0 && (
        <div className="input-card">
          <div className="input-group">
            <label>Player 1 (Red Box)</label>
            <input value={p1} onChange={e => setP1(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Player 2 (Gold Box)</label>
            <input value={p2} onChange={e => setP2(e.target.value)} />
          </div>

          <button onClick={startGame}>▶ Start Game</button>
        </div>
      )}

      {step === 1 && (
        <div className="input-card">
          <p><b>{p1}</b>, peek into your box 👀</p>
          <button onClick={() => setStep(2)}>🔎 Peek</button>
        </div>
      )}

      {step === 2 && (
        <div className="input-card">
          <p><b>{p2}</b>, choose wisely…</p>
          <div className="row">
            <button onClick={handleSwap}>🔄 Swap</button>
            <button onClick={() => handleReveal(false)}>✅ Keep</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="result-card">
          <h3>🎉 Reveal Time</h3>
          <p>
            🥕 Winner: <b>{winner === "red" ? p1 : p2}</b>
          </p>

          <div className="row">
            <button onClick={newRound}>🔁 New Round</button>
            <button className="secondary-btn" onClick={resetAll}>🧹 Reset All</button>
          </div>
        </div>
      )}

    </div>
  );
}
