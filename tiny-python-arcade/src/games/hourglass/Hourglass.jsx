import { useEffect, useState } from "react";
import { getFrame, resetGlass } from "./hourglass.api";
// import "./hourglass.css";

export default function Hourglass() {
  const [frame, setFrame] = useState("");
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const loop = setInterval(async () => {
      const data = await getFrame();
      setFrame(data.frame);
      if (!data.moved) setRunning(false);
    }, 120);

    return () => clearInterval(loop);
  }, [running]);

  return (
    <div className="theme-hourglass">
      <h2>⏳ Hourglass Simulation</h2>

      <div className="rules-card">
        <ul>
          <li>Sand falls due to gravity</li>
          <li>Grains slide along glass slope</li>
          <li>Simulation stops when sand settles</li>
          <li>Flip the hourglass to restart</li>
        </ul>
      </div>

      <pre className="glass">{frame}</pre>

      <div className="controls">
        <button onClick={() => { setRunning(true); resetGlass(); }}>
          🔄 Flip Hourglass
        </button>
      </div>
    </div>
  );
}
