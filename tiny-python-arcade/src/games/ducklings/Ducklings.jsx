import { useEffect, useState } from "react";
import { getDucks } from "./ducklings.api";

export default function Ducklings() {

  const [density, setDensity] = useState(5);
  const [speed, setSpeed] = useState(300);
  const [seasonal, setSeasonal] = useState(false);
  const [frame, setFrame] = useState("");

  useEffect(() => {
    const interval = setInterval(async () => {
    const ducks = await getDucks(density, seasonal);

    const DUCK_WIDTH = 12;
    const GAP = "   ";
    const MAX_PER_ROW = 7;

    let rows = [];
    for (let i = 0; i < ducks.length; i += MAX_PER_ROW) {
    rows.push(ducks.slice(i, i + MAX_PER_ROW));
    }

    let output = "";

    rows.forEach(row => {
    let t = "", m = "", b = "";

    row.forEach(d => {
        t += d.head.padEnd(DUCK_WIDTH) + GAP;
        m += d.body.padEnd(DUCK_WIDTH) + GAP;
        b += d.feet.padEnd(DUCK_WIDTH) + GAP;
    });

    output += `${t}\n${m}\n${b}\n\n`;
    });

    setFrame(output);



    }, speed);

    return () => clearInterval(interval);
  }, [density, speed, seasonal]);

  return (
    <div className=" theme-ducklings">

      <h2>🦆 Ducklings Parade</h2>
      <p className="subtitle">A calming ASCII animation playground</p>

      <div className="rules-card">
        <h3>📜 How It Works</h3>
        <ul>
          <li>Each duck is procedurally generated with unique traits</li>
          <li>Adjust <b>Density</b> to control how many ducks appear</li>
          <li>Adjust <b>Speed</b> to slow down or speed up the parade</li>
          <li>Enable <b>Seasonal Mode</b> for festive hats 🎉</li>
        </ul>
      </div>

      <div className="duck-controls">
        <div className="control">
          <label>🦆 Density</label>
          <input type="range" min="1" max="15" value={density} onChange={e => setDensity(+e.target.value)} />
        </div>

        <div className="control">
          <label>⏱ Speed</label>
          <input type="range" min="80" max="700" value={speed} onChange={e => setSpeed(+e.target.value)} />
        </div>

        <div className="control checkbox">
          <label>
            <input type="checkbox" checked={seasonal} onChange={e => setSeasonal(e.target.checked)} />
            Seasonal Hats 🎉
          </label>
        </div>
      </div>

      <pre className="duck-screen">{frame}</pre>

    </div>
  );
}
