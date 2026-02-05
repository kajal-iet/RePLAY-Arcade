import { useEffect, useState, useRef } from "react";
import * as api from "./robots.api";

const W = 15;
const H = 12;

export default function Robots() {
  const [game, setGame] = useState(null);
  const [explosions, setExplosions] = useState([]);
  const prevRobots = useRef([]);

  const refresh = async () => {
    const newState = await api.getState();

    // 🔥 detect robot collisions (robots that disappeared)
    const gone = prevRobots.current.filter(
      r => !newState.robots.some(n => n[0] === r[0] && n[1] === r[1])
    );

    if (gone.length) {
      setExplosions(gone);
      setTimeout(() => setExplosions([]), 400);
    }

    prevRobots.current = newState.robots;
    setGame(newState);
  };

  useEffect(() => { refresh(); }, []);

  const step = async (m) => {
    await api.move(m);
    await refresh();
  };

  const tp = async () => {
    await api.teleport();
    await refresh();
  };

  const restart = async () => {
    await api.reset();
    prevRobots.current = [];
    await refresh();
  };

  if (!game) return null;

  const grid = [];
  for (let y = 0; y < H; y++) {
    let row = "";
    for (let x = 0; x < W; x++) {
      if (explosions.some(e => e[0] === x && e[1] === y)) row += "💥";
      else if (game.over && x === game.player[0] && y === game.player[1]) row += "💀";
      else if (x === game.player[0] && y === game.player[1]) row += "🧍";
      else if (game.robots.some(r => r[0] === x && r[1] === y)) row += "🤖";
      else if (x === 0 || y === 0 || x === W - 1 || y === H - 1) row += "⬛";
      else row += " ";
    }
    grid.push(row);
  }

  return (
    <div className="theme-robots">
      <h2>🤖 Hungry Robots</h2>

      <div className="arena">{grid.join("\n")}</div>

      <div className="stats">
        <span>🤖 {game.robots.length}</span>
        <span>💥 {game.score}</span>
        <span>🌀 {game.teleports}</span>
      </div>

      <div className="controls">
        <button onClick={() => step([-1, -1])}>↖</button>
        <button onClick={() => step([0, -1])}>⬆</button>
        <button onClick={() => step([1, -1])}>↗</button>
        <button onClick={() => step([-1, 0])}>⬅</button>
        <button disabled>🧍</button>
        <button onClick={() => step([1, 0])}>➡</button>
        <button onClick={() => step([-1, 1])}>↙</button>
        <button onClick={() => step([0, 1])}>⬇</button>
        <button onClick={() => step([1, 1])}>↘</button>
      </div>

      <div className="actions">
        <button onClick={tp}>🌀 Teleport</button>
        <button onClick={restart}>🔄 Restart</button>
      </div>

      {game.over && (
        <div className="result">
          {game.robots.length ? "💀 You lost!" : "🎉 All robots destroyed!"}
        </div>
      )}
    </div>
  );
}
