import { useState, useEffect } from "react";
import { startGame, submitMove } from "./bagels.sandbox";
import { startBagels, submitGuess } from "./bagels.api";


export default function Bagels({ mode = "game", engine }) {

  const [levels, setLevels] = useState(["Easy", "Medium", "Hard"]);
  useEffect(() => {
  if (mode === "playground" && engine) {
    const engineLevels = Object.keys(engine.LEVELS);
    setLevels(engineLevels);

    // reset selected level if it no longer exists
    if (!engineLevels.includes(level)) {
      setLevel(engineLevels[0]);
    }
  }
}, [engine, mode]);



  const [level, setLevel] = useState("Easy");
  const [game, setGame] = useState(null);
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState([]);
  const [moves, setMoves] = useState(0);
  const [over, setOver] = useState(false);
  const [message, setMessage] = useState("");

  async function startGameHandler() {
  let data;

  if (mode === "playground" && engine) {
    const cfg = engine.LEVELS[level];
    const secret = engine.generate_secret_number(cfg.digits);

    data = {
      secret,
      num_digits: cfg.digits,
      max_guesses: cfg.guesses,
      points: cfg.points
    };
  } else {
    data = await startBagels(level);
  }

  setGame(data);
  setGuess("");
  setHistory([]);
  setMoves(0);
  setOver(false);
  setMessage("");
}


  async function handleSubmit() {
  if (over || !game) return;
  if (guess.length !== game.num_digits || !/^\d+$/.test(guess)) return;

  let res;

  if (mode === "playground" && engine) {
    const clue = engine.get_clues(guess, game.secret);
    res = { clue, win: clue === "WIN" };
  } else {
    res = await submitGuess({
      guess,
      secret: game.secret,
      num_digits: game.num_digits
    });
  }

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
    <div className="game-shell theme-bagels bagels">

      <h2>🧩 Bagels</h2>
      <p className="subtitle">Crack the secret number</p>

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
            {levels.map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>


          <button className="start-btn" onClick={startGameHandler}>
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
            <button onClick={startGameHandler}>
              🔁 Play Again
            </button>
          )}
        </>
      )}
    </div>
  );
}
