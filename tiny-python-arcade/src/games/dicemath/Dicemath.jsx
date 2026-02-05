import { useEffect, useRef, useState } from "react";
import { getQuestion } from "./dicemath.api";

export default function DiceMath() {

  const [difficulty, setDifficulty] = useState(null);
  const [minDice, setMinDice] = useState(1);
  const [maxDice, setMaxDice] = useState(3);
  const [timeLeft, setTimeLeft] = useState(30);
  const [board, setBoard] = useState("");
  const [answer, setAnswer] = useState(0);
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = useRef(null);

  function setup(diff){
    if(diff==="Easy"){ setMinDice(1); setMaxDice(3); setTimeLeft(40); }
    if(diff==="Medium"){ setMinDice(2); setMaxDice(6); setTimeLeft(30); }
    if(diff==="Hard"){ setMinDice(4); setMaxDice(8); setTimeLeft(20); }
    setDifficulty(diff);
    setScore(0);
    setRunning(true);
  }

  async function next(){
    const q = await getQuestion(minDice, maxDice);
    setBoard(q.board);
    setAnswer(q.answer);
  }

  function submit(){
    if(Number(user)===answer) setScore(s=>s+4);
    else setScore(s=>s-1);
    setUser("");
    next();
  }

  useEffect(()=>{
    if(!running) return;
    next();
    timer.current = setInterval(()=>{
      setTimeLeft(t=>t-1);
    },1000);
    return ()=>clearInterval(timer.current);
  },[running]);

  useEffect(()=>{
    if(timeLeft<=0){
      clearInterval(timer.current);
      setRunning(false);
    }
  },[timeLeft]);

  if(!difficulty){
  return (
    <div className="game-shell bitmap-game theme-dice dice-pro">

      <h2>🎲 Dice Math</h2>
      <p className="subtitle">Add fast. Think faster.</p>

      <div className="rules-card">
        <h3>📜 Rules</h3>
        <ul>
          <li>Multiple dice are shown on the board</li>
          <li>Add the values of all dice</li>
          <li>Enter the correct sum before time runs out</li>
          <li>Correct answer → points increase</li>
          <li>Wrong answer → points decrease</li>
          <li>Game ends when the timer reaches zero</li>
        </ul>
      </div>

      <div className="row">
        <button onClick={()=>setup("Easy")}>Easy</button>
        <button onClick={()=>setup("Medium")}>Medium</button>
        <button onClick={()=>setup("Hard")}>Hard</button>
      </div>
    </div>
  )
}

  return (
    <div className="game-shell bitmap-game theme-dice">

      <h2>🎲 Dice Math</h2>
      <p>⏳ {timeLeft}s &nbsp; | &nbsp; 📊 Score: {score}</p>

      <pre className="dice-board">{board}</pre>

      {running ? (
        <>
          <div className="input-group">
          <input value={user} onChange={e=>setUser(e.target.value)} placeholder="Enter sum" />
          </div>
          <button onClick={submit}>Submit</button>
        </>
      ) : (
        <h3>Game Over — Final Score: {score}</h3>
      )}

    </div>
  );
}
