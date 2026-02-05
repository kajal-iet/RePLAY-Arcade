import { useEffect, useState } from "react";
import { getState, applyChanges, getImage } from "./carpet.api";

export default function Carpet() {
  const [state, setState] = useState(null);
  const [pattern, setPattern] = useState("");
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(6);
  const [bg, setBg] = useState("#000000");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getState();
    setState(data);
    setPattern(data.pattern);
    setRows(data.y);
    setCols(data.x);
    setBg(data.bg);
  }

  async function apply() {
    await applyChanges({
      pattern,
      x: cols,
      y: rows,
      bg
    });
    load();
  }

  async function downloadImg() {
    const blob = await getImage();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "pattern_carpet.png";
    a.click();
  }

  if (!state) return null;

  return (
    <div className="game-shell theme-carpet">

      {/* <h2>🧵 Pattern Carpet</h2> */}
      <h2 className="subtitle">Build repeating ASCII carpets</h2>

      <div className="rules-card">
        <ul>
          <li>Enter a base ASCII pattern</li>
          <li>Rows = vertical repeats</li>
          <li>Columns = horizontal repeats</li>
          <li>Export carpet as an image</li>
        </ul>
      </div>

      <label className="field-label">🧩 Base Pattern</label>
      <textarea
        value={pattern}
        onChange={e => setPattern(e.target.value)}
        className="carpet-textarea"
      />

      <div className="controls">
        <div className="input-group">
          <label>↕ Rows</label>
          <input
            type="number"
            min="1"
            value={rows}
            onChange={e => setRows(+e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>↔ Columns</label>
          <input
            type="number"
            min="1"
            value={cols}
            onChange={e => setCols(+e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>🎨 Background</label>
          <input
            type="color"
            value={bg}
            onChange={e => setBg(e.target.value)}
          />
        </div>
      </div>

      <button onClick={apply}>✨ Apply Changes</button>
      <button className="secondary-btn" onClick={downloadImg}>
        ⬇ Download Image
      </button>

      <div
        className="carpet-preview"
        style={{ background: bg }}
      >
        {state.preview}
      </div>

    </div>
  );
}
