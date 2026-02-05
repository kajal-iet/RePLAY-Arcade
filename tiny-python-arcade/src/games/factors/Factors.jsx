import { useState } from "react";
import { analyzeNumber } from "./factors.api";

export default function Factors() {
  const [n, setN] = useState(12);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function run() {
    setLoading(true);
    setError("");
    try {
      const res = await analyzeNumber(n);
      if (!res || !res.factors) throw new Error("Invalid server response");
      setData(res);
    } catch (e) {
      setError("❌ Server not responding. Is backend running?");
    }
    setLoading(false);
  }

  return (
    <div className="game-shell aurora-factors">

      <h2>🔢 Factor Finder</h2>
      <p className="subtitle">Instant Number Intelligence</p>

      <div className="factor-panel">
        <input
          type="number"
          min="1"
          value={n}
          onChange={e => setN(+e.target.value)}
        />

        <button onClick={run} disabled={loading}>
          {loading ? "Analyzing..." : "Find Factors"}
        </button>
      </div>

      {error && <div className="error-box">{error}</div>}

      {data && (
        <>
          <div className="result-box">
            <h3>Factors of {data.number}</h3>
            <p>{data.factors.join(", ")}</p>
          </div>

          <div className={`type-badge ${data.is_prime ? "prime" : "composite"}`}>
            {data.is_prime ? "Prime Number" : "Composite Number"}
          </div>

          <div className="chart">
            {data.factors.map(f => (
              <div key={f} className="bar" style={{ height: `${(f / data.number) * 100}%` }}>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}
