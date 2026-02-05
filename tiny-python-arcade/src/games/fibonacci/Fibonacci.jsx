import { useState } from "react";
import { computeFib } from "./fibonacci.api";

export default function Fibonacci() {
  const [n, setN] = useState(10);
  const [mode, setMode] = useState("iterative");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    try {
      const res = await computeFib(n, mode);
      setData(res);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div className="game-shell theme-fibonacci">

      <h2>🌀 Fibonacci Generator</h2>
      <p className="subtitle">Visual Mathematics Playground</p>

      <div className="rules-card">
        <h3>📜 How It Works</h3>
        <ul>
          <li>Enter a positive number <b>N</b>.</li>
          <li><b>Iterative Mode</b> computes instantly.</li>
          <li><b>Recursive Mode</b> shows mathematical structure.</li>
          <li>The <b>Golden Ratio</b> appears as N grows.</li>
          <li>Timeline shows the sequence evolution visually.</li>
        </ul>
      </div>

      <div className="fib-controls">
        <input
          type="number"
          min="1"
          value={n}
          onChange={e => setN(+e.target.value)}
        />

        <select value={mode} onChange={e => setMode(e.target.value)}>
          <option value="iterative">⚡ Iterative (Fast)</option>
          <option value="recursive">🛡 Recursive (Visualizable)</option>
        </select>

        <button onClick={run} disabled={loading}>
          {loading ? "Computing..." : "Generate"}
        </button>
      </div>

      {data && (
        <>
          <div className="fib-result">
            <h3>Fibonacci #{n}</h3>
            <p>{data.value}</p>
          </div>

          {data.phi && (
            <div className="phi-card">
              Golden Ratio ≈ {data.phi.toFixed(10)}
            </div>
          )}

          <div className="timeline">
            {data.timeline.map((v, i) => (
              <div key={i} className="point">
                <span>{v}</span>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}
