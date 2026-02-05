import { useEffect, useState } from "react";
import { getState, pickColor, resetGame } from "./flooder.api";
// import "./flooder.css";

const COLORS = ["#ff6b6b","#6bcf63","#4dabf7","#ffd43b","#63e6be","#b197fc"];

export default function Flooder() {
  const [game, setGame] = useState(null);
  const [error, setError] = useState("");

  async function refresh() {
    try {
      const data = await getState();
      if (!data || !Array.isArray(data.board)) {
        throw new Error("Invalid server response");
      }
      setGame(data);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => { refresh(); }, []);

  if (error) {
    return <div style={{color:"red", textAlign:"center"}}>❌ {error}</div>;
  }

  if (!game) {
    return <div style={{textAlign:"center"}}>Loading…</div>;
  }

  return (
    <div className="flooder-shell">
      <h2>🌊 Flooder</h2>
      <div className="rules-card">
        <h3>📜 How It Works</h3>
        <ul>
            <li>Start from the <b>top-left tile</b>.</li>
            <li>Pick a color to flood the connected region.</li>
            <li>Flood spreads only <b>up, down, left, right</b>.</li>
            <li>Each color change costs <b>1 move</b>.</li>
            <li>Make the entire board one color to win.</li>
        </ul>
        </div>

      <p>Moves left: {game.moves}</p>

      <div className="board">
        {game.board.map((row, y) => (
          <div key={y} className="row">
            {row.map((t, x) => (
              <div
                key={x}
                className="tile"
                style={{ background: COLORS[t] || "#000" }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="palette">
        {COLORS.map((c, i) => (
          <button
            key={i}
            style={{ background: c }}
            onClick={async () => { await pickColor(i); refresh(); }}
          />
        ))}
      </div>

      <p>{game.message}</p>

      <button className="reset" onClick={async () => { await resetGame(); refresh(); }}>
        New Game
      </button>
    </div>
  );
}
