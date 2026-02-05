import { useState } from "react";
import { rollDice } from "./diceroller.api";

export default function DiceRoller() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const [round, setRound] = useState(0);
  const [you, setYou] = useState(0);
  const [cpu, setCpu] = useState(0);

  async function handleRoll(expr) {
    const res = await rollDice(expr);
    if (res.error) return alert("Invalid dice format");
    setInput(expr);
    setResult(res);
  }

  async function playBattle() {
    if (!input) return alert("Enter dice first!");

    const youRoll = await rollDice(input);
    const cpuRoll = await rollDice(input);

    setRound(r => r + 1);

    if (youRoll.total > cpuRoll.total) setYou(s => s + 1);
    else if (cpuRoll.total > youRoll.total) setCpu(s => s + 1);

    if (round + 1 === 5) {
      alert(
        you > cpu ? "YOU WIN THE MATCH!"
        : cpu > you ? "COMPUTER WINS!"
        : "IT'S A TIE!"
      );
      setRound(0); setYou(0); setCpu(0);
    }
  }

  return (
    <div className=" bitmap-game theme-diceroller">

      {/* <h2>🎲 Dice Roller</h2> */}
      <h2 className="subtitle">Supports 3d6, 1d100+5, 2d999-3, anything!</h2>

      <div>
        <ul>
          <li>Type dice using RPG notation</li>
          <li>Supports any size: d17, d999, d10000</li>
          <li>Battle the computer using your dice</li>
        </ul>
      </div>

      <div className="row">
        {["1d17","1d100","1d999","1d10000"].map(v =>
          <button key={v} onClick={() => handleRoll(v)}>Roll {v}</button>
        )}
      </div>

      <div className="input-card">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g. 3d6+2" />
        <button onClick={() => handleRoll(input)}>Roll</button>
      </div>

      {result && (
        <div>
          <p>🎯 Total: <b>{result.total}</b></p>
          <p>🎲 Rolls: {result.rolls.join(", ")}</p>
          {result.modifier !== 0 && <p>Modifier: {result.modifier}</p>}
        </div>
      )}

      <div>
        <h3>🤖 Battle Mode</h3>
        <p>Round {round} / 5 — You {you} : {cpu} CPU</p>
        <button onClick={playBattle}>Play Round</button>
      </div>

    </div>
  );
}
