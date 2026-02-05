import { useState } from "react";
import { startBagels, submitGuess } from "./bagels.api";

export default function Bagels() {
  const [level, setLevel] = useState("Easy");
  const [game, setGame] = useState(null);
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState([]);
  const [moves, setMoves] = useState(0);
  const [over, setOver] = useState(false);
  const [message, setMessage] = useState("");

  async function startGame() {
    const data = await startBagels(level);
    setGame(data);
    setGuess("");
    setHistory([]);
    setMoves(0);
    setOver(false);
    setMessage("");
  }

  async function handleSubmit() {
    if (over || guess.length !== game.num_digits || !/^\d+$/.test(guess)) return;

    const res = await submitGuess({
      guess,
      secret: game.secret,
      num_digits: game.num_digits
    });

    const newHistory = [{ guess, clue: res.clue }, ...history];
    setHistory(newHistory);
    setMoves(moves + 1);
    setGuess("");

    if (res.win) {
      setMessage(`🎯 Correct! The number was ${game.secret}`);
      setOver(true);
    } else if (moves + 1 >= game.max_guesses) {
      setMessage(`❌ Out of guesses! The number was ${game.secret}`);
      setOver(true);
    }
  }

  return (
    <div className="bagels">

      {/* <h2>🧩 Bagels</h2> */}
      <h2 className="subtitle">Crack the secret number</h2>

      <div className="rules-card">
        <h3>📜 Rules</h3>
        <ul>
          <li>Guess the hidden number with no repeated digits</li>
          <li><b>Fermi</b> = correct digit & position</li>
          <li><b>Pico</b> = correct digit, wrong position</li>
          <li><b>Bagels</b> = no digits correct</li>
        </ul>
      </div>

      {!game && (
        <>
          <select value={level} onChange={e => setLevel(e.target.value)}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <button className="start-btn" onClick={startGame}>
            ▶ Start Game
          </button>
        </>
      )}

      {game && (
        <>
          <div className="info">
            <span>⏳ Remaining: {game.max_guesses - moves}</span>
            <span>🎯 Points: {game.points}</span>
          </div>
          
          
          <input 
            value={guess}
            maxLength={game.num_digits}
            placeholder={`Enter ${game.num_digits}-digit guess`}
            onChange={e => setGuess(e.target.value)}
            disabled={over}
          />

          <button onClick={handleSubmit} disabled={over}>
            Submit Guess
          </button>

          {message && <div className="result">{message}</div>}

          <div className="history">
            {history.map((h, i) => (
              <div key={i}>
                <strong>{h.guess}</strong> → {h.clue}
              </div>
            ))}
          </div>

          {over && (
            <button onClick={startGame}>
              🔁 Play Again
            </button>
          )}
        </>
      )}
    </div>
  );
}
