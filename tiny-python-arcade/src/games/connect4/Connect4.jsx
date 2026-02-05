import { useEffect, useState } from "react";
import { getState, dropTile, resetGame } from "./connect4.api";
// import "./connect4.css";

export default function Connect4() {
  const [game, setGame] = useState(null);

  async function refresh() {
    setGame(await getState());
  }

  useEffect(() => { refresh(); }, []);

  if (!game) return <h2 style={{textAlign:"center"}}>Loading…</h2>;

  return (
    <div className="connect4-shell">
      <h2>Connect 4</h2>
      <div className="rules-card">
        <h3>📜 How It Works</h3>
        <ul>
            <li>Players take turns dropping discs.</li>
            <li>Discs fall to the lowest empty cell.</li>
            <li>Connect <b>four discs</b> to win.</li>
            <li>Connections can be horizontal, vertical, or diagonal.</li>
            <li>If the board fills with no winner, the game ends in a draw.</li>
        </ul>
        </div>



      <div className="board">
        {game.board.map((row, r) => (
          <div key={r} className="row">
            {row.map((cell, c) => (
              <div
                key={c}
                className={`cell ${cell}`}
                onClick={() => { dropTile(c); refresh(); }}
              />
            ))}
          </div>
        ))}
      </div>

      <p>Turn: {game.player}</p>

      {game.winner && <h3>Winner: {game.winner}</h3>}

      <button onClick={() => { resetGame(); refresh(); }}>Restart</button>
    </div>
  );
}
