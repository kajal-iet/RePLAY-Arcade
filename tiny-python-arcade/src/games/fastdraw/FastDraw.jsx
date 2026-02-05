import { useState, useEffect } from "react";
import { startRound, clickNow, getStats, resetStats } from "./fastdraw.api";
// import "./fastdraw.css";

export default function FastDraw() {
  const [stats, setStats] = useState({});
  const [mode, setMode] = useState("Easy");
  const [lastResult, setLastResult] = useState(null);


  const limits = { Easy: 0.5, Normal: 0.3, Hard: 0.2, Insane: 0.1 };

  async function refresh() {
    const data = await getStats();
    setStats(data);
  }

  useEffect(() => { refresh(); }, []);

  async function start() {
    await startRound();
    refresh();
  }

  async function click() {
  const data = await clickNow(limits[mode]);
  await refresh();

  if (data.result) {
    const [status, time] = data.result;
    setLastResult({ status, time });
  }
}


  return (
    <div className="fastdraw-shell">
      <h2>🤠 Fast Draw</h2>
      <div className="rules-card">
      <h3>📜 How It Works</h3>
      <ul>
        <li>Click <b>Start Round</b> to begin.</li>
        <li>Wait for the signal: <b>DRAW!</b></li>
        <li>Click <b>CLICK NOW</b> as fast as possible.</li>
        <li>Clicking early results in an instant loss.</li>
        <li>Difficulty controls the allowed reaction time.</li>
      </ul>
    </div>


      <select value={mode} onChange={e => setMode(e.target.value)}>
        {Object.keys(limits).map(m => <option key={m}>{m}</option>)}
      </select>

      <button onClick={start}>Start Round</button>

      <h1 className={stats.phase === "draw" ? "draw" : ""}>
        {stats.phase === "draw" ? "DRAW!" : "WAIT..."}
        {lastResult && (
        <div className="result-box">
          {lastResult.status === "win" ? "🔥 FAST!" : "🐌 TOO SLOW!"}
          <div>{lastResult.time}s</div>
        </div>
      )}

      </h1>

      <button onClick={click} disabled={stats.phase !== "draw"}>CLICK NOW</button>

      <div className="stats">
        <p>Attempts: {stats.attempts}</p>
        <p>Wins: {stats.wins}</p>
        <p>Losses: {stats.losses}</p>
      </div>

      <button onClick={resetStats}>Reset</button>
    </div>
  );
}
