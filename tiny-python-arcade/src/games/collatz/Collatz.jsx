import { useState, useRef } from "react";
import { getSingle, compare } from "./collatz.api";

export default function Collatz() {

  const [mode, setMode] = useState("single");
  const [n, setN] = useState(27);
  const [animate, setAnimate] = useState(true);
  const [sequence, setSequence] = useState([]);
  const [stats, setStats] = useState(null);

  const [compareNums, setCompareNums] = useState("");
  const [compareData, setCompareData] = useState([]);

  const timerRef = useRef(null);

  async function runSingle() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const data = await getSingle(n);

    setSequence([]);
    setStats(null);

    if (!animate) {
      setSequence(data.sequence);
      setStats(data);
      return;
    }

    let i = 0;
    timerRef.current = setInterval(() => {
      setSequence(prev => [...prev, data.sequence[i]]);
      i++;

      if (i >= data.sequence.length) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setStats(data);
      }
    }, 120);
  }

  async function runCompare() {
    const nums = compareNums
      .split(",")
      .map(x => Number(x.trim()))
      .filter(x => !isNaN(x) && x > 0);

    if (!nums.length) return;

    const res = await compare(nums);
    setCompareData(res);
  }

  return (
    <div className="game-shell bitmap-game theme-timer timer-pro">


      <h2>🔢 Collatz Explorer</h2>
      <p className="subtitle">Visualize the 3n + 1 sequence</p>
       <div className="rules-card">
        <p>
            The <strong>Collatz sequence</strong> (also called the <em>3n + 1 problem</em>) works like this:
        </p>

        <ul>
            <li>If <strong>n</strong> is even → next value = <code>n / 2</code></li>
            <li>If <strong>n</strong> is odd → next value = <code>3n + 1</code></li>
            <li>Repeat until the value becomes <strong>1</strong></li>
        </ul>

        <p>
            This app helps you <strong>generate</strong>, <strong>analyze</strong>, and <strong>compare</strong> Collatz sequences.
        </p>
        </div>

      <div className="row">
        <button onClick={() => setMode("single")}>Single</button>
        <button className="secondary-btn" onClick={() => setMode("compare")}>Compare</button>
      </div>

      {mode === "single" && (
        <div className="input-card">

          <div className="input-group">
            <label>Start Number</label>
            <input
              type="number"
              min="1"
              value={n}
              onChange={e => setN(Number(e.target.value))}
            />
          </div>

          <label>
            <input
              type="checkbox"
              checked={animate}
              onChange={e => setAnimate(e.target.checked)}
            />
            Animate
          </label>

          <button onClick={runSingle}>Generate</button>

          <div className="sequence-box">
            {sequence.join(" → ")}
          </div>

          {stats && (
            <div className="result-card">
              <p>Length: <b>{stats.length}</b></p>
              <p>Max Value: <b>{stats.max}</b></p>
              <p>Odd: <b>{stats.odd}</b> | Even: <b>{stats.even}</b></p>
            </div>
          )}

        </div>
      )}

      {mode === "compare" && (
        <div className="input-card">

          <div className="input-group">
            <label>Numbers (comma separated)</label>
            <input
              value={compareNums}
              onChange={e => setCompareNums(e.target.value)}
            />
          </div>

          <button onClick={runCompare}>Compare</button>

          {compareData.length > 0 && (
            <div className="result-card">
              {compareData.map(r => (
                <p key={r.start}>
                  {r.start} → length {r.length}, max {r.max}
                </p>
              ))}
            </div>
          )}

        </div>
      )}

    </div>
  );
}
