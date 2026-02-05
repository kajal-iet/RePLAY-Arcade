import { useState, useRef } from "react";
import { generateDiamond, rotateDiamond } from "./diamonds.api";

export default function Diamonds() {

  const [type, setType] = useState("Outline");
  const [size, setSize] = useState(4);
  const [animation, setAnimation] = useState("None");
  const [speed, setSpeed] = useState(200);
  const [lines, setLines] = useState([]);
  const [running, setRunning] = useState(false);

  const timer = useRef(null);

  async function start() {
    setRunning(true);

    if (animation === "None") {
      const data = await generateDiamond({ size, type });
      setLines(data.lines);
      return;
    }

    if (animation === "Pulsating") {
      const seq = [...Array(size).keys()].map(i => i + 1)
        .concat([...Array(size - 1).keys()].map(i => size - i - 1));

      for (let s of seq) {
        if (!running) break;
        const data = await generateDiamond({ size: s, type });
        setLines(data.lines);
        await new Promise(r => setTimeout(r, speed));
      }
    }

    if (animation === "Rotating") {
      let data = await generateDiamond({ size, type });
      let frames = [data.lines];
      for (let i = 0; i < 3; i++) {
        const r = await rotateDiamond(frames[frames.length - 1]);
        frames.push(r.lines);
      }

      while (running) {
        for (let f of frames) {
          if (!running) break;
          setLines(f);
          await new Promise(r => setTimeout(r, speed));
        }
      }
    }
  }

  function stop() {
    setRunning(false);
  }

  return (
    <div className=" bitmap-game theme-diamond">

      <h2>💎 Animated Diamonds</h2>
      <p className="subtitle">Create & animate ASCII diamonds</p>

      <div className="rules-card">
        <ul>
          <li>Choose diamond style & size</li>
          <li>Animate with Pulsating or Rotating</li>
          <li>Control animation speed</li>
        </ul>
      </div>

      <div className="input-card">

        <div className="input-group">
          <label>Diamond Type</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option>Outline</option>
            <option>Filled</option>
          </select>
        </div>

        <div className="input-group">
          <label>Base Size</label>
          <input type="number" min="1" max="10" value={size} onChange={e => setSize(+e.target.value)} />
        </div>

        <div className="input-group">
          <label>Animation</label>
          <select value={animation} onChange={e => setAnimation(e.target.value)}>
            <option>None</option>
            <option>Pulsating</option>
            <option>Rotating</option>
          </select>
        </div>

        <div className="input-group">
          <label>Speed (ms)</label>
          <input type="number" min="50" max="500" value={speed} onChange={e => setSpeed(+e.target.value)} />
        </div>

        <div className="row">
          <button onClick={start}>▶ Start</button>
          <button className="secondary-btn" onClick={stop}>⏹ Stop</button>
        </div>

        <pre className="diamond-output">
          {lines.join("\n")}
        </pre>

      </div>

    </div>
  );
}
