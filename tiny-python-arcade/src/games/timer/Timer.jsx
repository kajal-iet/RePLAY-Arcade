import { useState, useEffect, useRef } from "react";
import { startTimer, nextPhase } from "./timer.api";

export default function Timer() {

  const [mode, setMode] = useState("countdown");
  const [seconds, setSeconds] = useState(60);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [pomodoroState, setPomodoroState] = useState("work");

  const tick = useRef(null);

  useEffect(() => {
    if (!running || paused) return;

    tick.current = setInterval(() => {
      setRemaining(r => r - 1);
    }, 1000);

    return () => clearInterval(tick.current);
  }, [running, paused]);

  useEffect(() => {
    if (remaining === 0 && running) handleFinish();
  }, [remaining]);

  async function handleStart() {
    const data = await startTimer({
      mode,
      seconds,
      pomodoro_state: pomodoroState
    });
    setRemaining(data.remaining);
    setRunning(true);
    setPaused(false);
  }

  function handlePause() {
    setPaused(true);
  }

  function handleResume() {
    setPaused(false);
    setRunning(true);
  }

  function handleReset() {
    setRunning(false);
    setPaused(false);
    setRemaining(0);
  }

  async function handleFinish() {
    if (mode === "pomodoro") {
      const data = await nextPhase({ pomodoro_state: pomodoroState });
      setPomodoroState(data.pomodoro_state);
      setRemaining(data.remaining);
    } else {
      setRunning(false);
    }
  }

  const pct = remaining ? remaining / (mode === "countdown" ? seconds : 1500) : 1;
  const color = pct > 0.5 ? "green" : pct > 0.25 ? "orange" : "red";

  return (
    <div className=" bitmap-game theme-timer">

      <h2>⏱ Seven Segment Timer</h2>

      <div className="rules-card">
        <ul>
          <li>Countdown or Pomodoro (25/5)</li>
          <li>Start, Pause, Resume, Reset</li>
          <li>Colors change as time runs out</li>
        </ul>
      </div>

      <div className="input-card">

        <div className="timer-controls">
        <select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="countdown">Normal Countdown</option>
            <option value="pomodoro">Pomodoro 25/5</option>
        </select>

        {mode === "countdown" && (
        <input
        type="number"
        min="1"
        value={seconds}
        onChange={e => setSeconds(+e.target.value)}
        />
    )}
    </div>


        <div className="row">
          <button onClick={handleStart}>▶ Start</button>
          <button onClick={handlePause}>⏸ Pause</button>
          <button onClick={handleResume}>⏵ Resume</button>
          <button className="secondary-btn" onClick={handleReset}>🔁 Reset</button>
        </div>

        <div className="timer-display" style={{ color }}>
          {new Date(remaining * 1000).toISOString().substr(11, 8)}
        </div>

        <div className="progress-bar">
          <div className="progress" style={{ width: `${(1 - pct) * 100}%`, background: color }} />
        </div>

      </div>
    </div>
  );
}
