import { useState } from "react";
import { generateBitmap } from "./bitmap.api";

export default function Bitmap() {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#00FFAA");
  const [display, setDisplay] = useState("");
  const [speed, setSpeed] = useState("Fast");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!message.trim()) return alert("Please enter a message");

    setLoading(true);
    setDisplay("");

    const data = await generateBitmap(message, color);
    const rows = data.grid;

    let html = "";
    let index = 0;

    function step() {
      if (index >= rows.length) {
        setLoading(false);
        setDisplay(html);
        return;
      }

      const row = rows[index]
        .map(cell =>
          cell[0] === " "
            ? "&nbsp;"
            : `<span style="color:${cell[1]}">${cell[0]}</span>`
        )
        .join("");

      html += row + "<br>";
      index++;

      const delay = speed === "Slow" ? 80 : speed === "Fast" ? 30 : 10;

      setDisplay(html);
      setTimeout(() => requestAnimationFrame(step), delay);
    }

    step();
  }

  function download() {
    const plainText = display
      .replace(/<br>/g, "\n")
      .replace(/<[^>]*>/g, "");

    const blob = new Blob([plainText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "bitmap_output.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="bitmap-game">

      <h2>🗺️ Bitmap Message Generator</h2>
      <p className="subtitle">Turn your text into glowing pixel art</p>

      <div className="rules-card">
        <h3>📜 How It Works</h3>
        <ul>
          <li>Each character fills a predefined bitmap shape</li>
          <li>Colors shift slightly for glowing effect</li>
          <li>Speed controls the animation reveal</li>
          <li>You can download the final result</li>
        </ul>
      </div>

      <div className="input-card">
        <div className="input-group">
          <label>✏️ Message</label>
          <input value={message} onChange={e => setMessage(e.target.value)} />
        </div>

        <div className="row">
          <div className="input-group">
            <label>🎨 Color</label>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
          </div>

          <div className="input-group">
            <label>⚡ Speed</label>
            <select value={speed} onChange={e => setSpeed(e.target.value)}>
              <option>Slow</option>
              <option>Fast</option>
              <option>Instant</option>
            </select>
          </div>
        </div>

        <button onClick={generate} disabled={loading}>
          {loading ? "Generating..." : "✨ Generate Message"}
        </button>
      </div>

      {display && (
        <>
          <div
            className="bitmap-output"
            dangerouslySetInnerHTML={{ __html: display }}
          />

          <button className="download-btn" onClick={download}>
            ⬇️ Download Output
          </button>
        </>
      )}

    </div>
  );
}
