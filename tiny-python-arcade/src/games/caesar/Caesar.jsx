import { useState } from "react";
import { translate, hack } from "./caesar.api";

export default function Caesar() {
  const [mode, setMode] = useState("encrypt");
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(3);
  const [result, setResult] = useState("");
  const [hackResults, setHackResults] = useState([]);

  async function handleTranslate() {
    const res = await translate({ message, key, mode });
    setResult(res.result);
    setHackResults([]);
  }

  async function handleHack() {
    const res = await hack({ message });
    setHackResults(res);
    setResult("");
  }

  return (
    <div className="game-shell theme-caesar bitmap-game caesar-game">

      <h2>🔐 Caesar Cipher</h2>
      <p className="subtitle">Encrypt • Decrypt • Hacker Mode</p>

      <div className="rules-card">
        <h3>📜 How it Works</h3>
        <ul>
          <li>Letters shift using a numeric key (A–Z only)</li>
          <li>Other characters remain unchanged</li>
          <li>Decrypt reverses the process</li>
          <li>Hacker mode tries every possible key</li>
        </ul>
      </div>

      <div className="input-card">

        <div className="input-group">
          <label>Mode</label>
          <select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="encrypt">Encrypt</option>
            <option value="decrypt">Decrypt</option>
          </select>
        </div>

        <div className="input-group message-box">
          <label>Key (0–25)</label>
          <input
            type="number"
            min="0"
            max="25"
            value={key}
            onChange={e => setKey(+e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <button onClick={handleTranslate}>
          {mode === "encrypt" ? "🔒 Encrypt Message" : "🔓 Decrypt Message"}
        </button>

        <button className="secondary-btn" onClick={handleHack}>
          🛠️ Run Hacker Mode
        </button>

      </div>

      

      {result && (
      <div className="cipher-output caesar-output">
            <strong>Result</strong>
            <div>{result}</div>
        </div>
        )}

    {hackResults.length > 0 && (
    <div className="hack-list caesar-hack-list">
        {hackResults.map(r => (
        <div key={r.key} className="hack-item caesar-hack-item">
            <b>Key #{r.key}</b>
            <span>{r.text}</span>
        </div>
        ))}
    </div>
    )}


    </div>
  );
}
