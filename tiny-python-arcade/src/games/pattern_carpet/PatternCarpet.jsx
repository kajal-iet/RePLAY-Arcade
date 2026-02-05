import { useEffect, useState } from "react";
import { getState, applyChanges, getImage } from "./carpet.api";
// import "./pattern_carpet.css";

export default function PatternCarpet() {
  const [game, setGame] = useState(null);
  const [local, setLocal] = useState({});

  async function refresh() {
    const data = await getState();
    setGame(data);
    setLocal(data);
  }

  useEffect(() => { refresh(); }, []);

  if (!game) return <h2 style={{textAlign:"center"}}>Loading…</h2>;

  return (
    <div className="theme-carpet">
      <h2>🧵 Pattern Carpet</h2>

      <div className="rules-card">
        <ul>
          <li>Enter a base pattern</li>
          <li>Select repeats and background color</li>
          <li>Apply changes to update carpet</li>
          <li>Download as text or image</li>
        </ul>
      </div>

      <textarea
        value={local.pattern}
        onChange={e => setLocal({ ...local, pattern: e.target.value })}
      />

      <div className="controls">
        <input type="number" value={local.x} min="1" max="12"
          onChange={e => setLocal({ ...local, x: +e.target.value })} />
        <input type="number" value={local.y} min="1" max="12"
          onChange={e => setLocal({ ...local, y: +e.target.value })} />
        <input type="color" value={local.bg}
          onChange={e => setLocal({ ...local, bg: e.target.value })} />
      </div>

      <button onClick={() => applyChanges(local).then(refresh)}>
        Apply Changes
      </button>

      <pre className="preview" style={{background: game.bg}}>
        {game.output}
      </pre>

      <div className="controls">
        <button onClick={() => {
          const blob = new Blob([game.output], { type: "text/plain" });
          const url = URL.createObjectURL(blob);
          window.open(url);
        }}>
          ⬇ Download Text
        </button>

        <button onClick={async () => {
          const blob = await getImage();
          const url = URL.createObjectURL(blob);
          window.open(url);
        }}>
          🖼 Download Image
        </button>
      </div>
    </div>
  );
}
