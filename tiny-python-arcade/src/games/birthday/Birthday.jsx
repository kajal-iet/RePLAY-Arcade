import { useState } from "react";
import { runSimulation, getGraph } from "./birthday.api";
import { Line } from "react-chartjs-2";

export default function Birthday() {
  const [people, setPeople] = useState(23);
  const [sims, setSims] = useState(10000);
  const [result, setResult] = useState(null);
  const [graph, setGraph] = useState(null);
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    const data = await runSimulation(people, sims);
    setResult(data);
    setLoading(false);
  }

  async function loadGraph() {
    const data = await getGraph(5, 70);
    setGraph({
      labels: data.sizes,
      datasets: [
        {
          label: "Probability of Shared Birthday",
          data: data.values,
          borderWidth: 3,
          tension: 0.3
        }
      ]
    });
  }

  return (
    <div className="game-shell theme-birthday birthday-game">

      <h2>🎂 Birthday Paradox</h2>
      <div className="rules-card">
  <h3>📜 How This Simulation Works</h3>
  <ul>
    <li>
      Each simulation generates random birthdays for the selected number of people.
    </li>
    <li>
      A <b>match</b> occurs if at least two people share the same birthday.
    </li>
    <li>
      The probability shown is the percentage of simulations that contained a match.
    </li>
    <li>
      Increasing the number of simulations improves accuracy but takes longer to compute.
    </li>
    <li>
      The probability curve shows how the chance of a shared birthday grows with group size.
    </li>
  </ul>
</div>

      <p className="subtitle">
        See how quickly probability rises — even with small groups.
      </p>

      <div className="input-card">
        <div className="input-group">
          <label>👥 Number of People</label>
          <input
            type="number"
            min="2"
            max="100"
            value={people}
            onChange={e => setPeople(+e.target.value)}
          />
          <small>Between 2 and 100 people</small>
        </div>

        <div className="input-group">
          <label>🔁 Simulations</label>
          <input
            type="number"
            min="100"
            step="100"
            value={sims}
            onChange={e => setSims(+e.target.value)}
          />
          <small>Higher = more accurate result</small>
        </div>

        <button onClick={run} disabled={loading}>
          {loading ? "Running..." : "▶ Run Simulation"}
        </button>
      </div>

      {result && (
        <div className="result-card">
          <div className="stat">
            <span>📊 Probability</span>
            <b>{result.probability}%</b>
          </div>
          <div className="stat">
            <span>🎯 Matches</span>
            <b>{result.matches} / {result.simulations}</b>
          </div>
          {result.match && (
            <div className="match">
              🎉 Matching Birthday: <b>{result.match}</b>
            </div>
          )}
        </div>
      )}

      <div className="graph-section">
        <button onClick={loadGraph}>📈 Show Probability Curve</button>
        {graph && <Line data={graph} />}
      </div>

    </div>
  );
}
