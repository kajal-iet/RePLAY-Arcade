import { useEffect, useState } from "react";
import { getState, move, teleport, resetGame } from "./robots.api";
// import "./robots.css";

export default function HungryRobots() {
  const [game, setGame] = useState(null);

  async function refresh() {
    try {
      const data = await getState();
      setGame(data);
    } catch (e) {
      console.error("Failed to refresh:", e);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  if (!game) {
    return <h2 style={{ textAlign: "center", color: "white" }}>Loading…</h2>;
  }

  return (
    <div className="theme-robots">
      <h2>🤖 Hungry Robots</h2>

      <div className="rules-card">
        <ul>
          <li>Robots chase you every turn</li>
          <li>Robots destroy each other on collision</li>
          <li>Teleport has limited uses</li>
          <li>Destroy all robots to win</li>
        </ul>
      </div>

      <pre className="arena">{game.frame}</pre>

      <div className="stats">
        <span>🤖 {game.robots}</span>
        <span>💥 {game.score}</span>
        <span>🌀 {game.teleports}</span>
      </div>

      <div className="controls">
        {[
          [-1, -1, "↖"], [0, -1, "⬆"], [1, -1, "↗"],
          [-1,  0, "⬅"],             [1,  0, "➡"],
          [-1,  1, "↙"], [0,  1, "⬇"], [1,  1, "↘"]
        ].map(([x, y, label], i) => (
          <button
            key={i}
            onClick={async () => {
              await move(x, y);
              await refresh();
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="actions">
        <button
          onClick={async () => {
            await teleport();
            await refresh();
          }}
        >
          🌀 Teleport
        </button>

        <button
          onClick={async () => {
            await resetGame();
            await refresh();
          }}
        >
          🔄 Restart
        </button>
      </div>

      {game.over && (
        <div className="result">
          {game.robots ? "💀 You were caught!" : "🎉 All robots destroyed!"}
        </div>
      )}
    </div>
  );
}
