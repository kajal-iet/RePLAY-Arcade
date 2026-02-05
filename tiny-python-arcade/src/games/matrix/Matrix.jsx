import { useEffect, useRef, useState } from "react";
import { setMatrixMode } from "./matrix.api";

export default function Matrix() {

  const canvasRef = useRef();
  const [mode, setMode] = useState("Straight");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.onresize = resize;

    const letters = "01";
    const fontSize = 18;

    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    const waveAmplitude = 12;
    const waveSpeed = 0.035;

    let animationId;

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.06)";
      ctx.fillRect(0,0,canvas.width,canvas.height);

      ctx.fillStyle = "#00FF41";
      ctx.font = fontSize + "px monospace";

      drops.forEach((y, i) => {
        const char = letters[Math.floor(Math.random() * letters.length)];

        let x = i * fontSize;

        if (mode === "Wave") {
          x += Math.sin((Date.now() * waveSpeed) + (i * 0.5)) * waveAmplitude;
        }

        ctx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animationId);

  }, [mode]);

  async function changeMode(m) {
    setMode(m);
    await setMatrixMode(m);
  }

  return (
    <div className="game-shell theme-matrix">

      <h2>🟢 Matrix Rain</h2>
      <p className="subtitle">Classic hacker-style digital rain</p>

      <div className="rules-card">
        <ul>
          <li>Straight → classic vertical rain</li>
          <li>Wave → flowing animated motion</li>
          <li>Real-time canvas rendering</li>
        </ul>
      </div>

      <div className="row">
        <button onClick={() => changeMode("Straight")}>Straight</button>
        <button onClick={() => changeMode("Wave")}>Wave</button>
      </div>

      <canvas ref={canvasRef} className="matrix-canvas"></canvas>

    </div>
  );
}
