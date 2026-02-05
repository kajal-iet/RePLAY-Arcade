import { useState } from "react";
import { generateHeadlines } from "./clickbait.api";

export default function Clickbait() {
  const [count, setCount] = useState(5);
  const [headlines, setHeadlines] = useState([]);
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("funny");


  async function handleGenerate() {
  const res = await generateHeadlines({
    count,
    topic,
    tone
    });
    setHeadlines(res.headlines);
    }


  function download() {
    const text = headlines.join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "clickbait_headlines.txt";
    a.click();
  }

  return (
    <div className=" bitmap-game theme-clickbait">

      <h2>📰 Clickbait Generator</h2>
      <p className="subtitle">Create outrageously fake headlines</p>

      <div className="rules-card">
        <h3>📜 How It Works</h3>
        <ul>
          <li>Choose how many headlines to generate</li>
          <li>Click generate</li>
          <li>Download or copy your results</li>
        </ul>
      </div>

      <div className="input-group">
        <div>
          <label>Number of Headlines</label>
          <input type="number" min="1" value={count} onChange={e => setCount(+e.target.value)} />
        </div>

        <div>
        <label>Topic / Keyword</label>
        <input
            placeholder="e.g. AI, Fitness, Startups"
            value={topic}
            onChange={e => setTopic(e.target.value)}
        />
        </div>

        <div className="input-group">
        <label>Tone</label>
        <select value={tone} onChange={e => setTone(e.target.value)}>
            <option value="funny">Funny</option>
            <option value="dramatic">Dramatic</option>
            <option value="serious">Serious</option>
        </select>
        </div>

        <button onClick={handleGenerate}>✨ Generate</button>
      </div>

      {headlines.length > 0 && (
        <div className="result-card">
          {headlines.map((h, i) => (
            <p key={i}>• {h}</p>
          ))}
          <button className="secondary-btn" onClick={download}>📥 Download All</button>
        </div>
      )}
    </div>
  );
}
