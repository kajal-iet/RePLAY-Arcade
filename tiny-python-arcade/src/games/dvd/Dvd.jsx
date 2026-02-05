import { useEffect, useState } from "react";

export default function Dvd() {
  const [logos, setLogos] = useState([]);
  const [hits, setHits] = useState(0);
  const [running, setRunning] = useState(false);

  const WIDTH = 460;
  const HEIGHT = 280;
  const SIZE = 60;

  function randomColor() {
    return [
      Math.floor(80 + Math.random() * 175),
      Math.floor(80 + Math.random() * 175),
      Math.floor(80 + Math.random() * 175)
    ];
  }

  function start() {
    setHits(0);
    setLogos([
      {
        x: Math.random() * (WIDTH - SIZE),
        y: Math.random() * (HEIGHT - SIZE),
        dx: 2,
        dy: 2,
        color: randomColor()
      }
    ]);
    setRunning(true);
  }

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setLogos(ls =>
        ls.map(l => {
          let x = l.x + l.dx;
          let y = l.y + l.dy;

          let hitX = false, hitY = false;

          if (x <= 0 || x + SIZE >= WIDTH) {
            l.dx *= -1;
            hitX = true;
            l.color = randomColor();
          }
          if (y <= 0 || y + SIZE >= HEIGHT) {
            l.dy *= -1;
            hitY = true;
            l.color = randomColor();
          }

          if (hitX && hitY) setHits(h => h + 1);

          return { ...l, x, y };
        })
      );
    }, 16);

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="game-shell theme-dvd">

      <h2>💿 Bouncing DVD</h2>
      <p className="subtitle">Legendary screen saver challenge</p>

      <div className="rules-card">
        <h3>📜 Rules</h3>
        <ul>
          <li>DVD logo moves diagonally and bounces off walls</li>
          <li>If it hits the corner perfectly → 💥 JACKPOT</li>
          <li>Count how many perfect hits you witness</li>
        </ul>
      </div>

      {!running && (
        <button onClick={start}>▶ Start Animation</button>
      )}

      <div
        className="dvd-screen"
        style={{ width: WIDTH, height: HEIGHT }}
      >
        {logos.map((l, i) => (
          <div
            key={i}
            className="dvd-logo"
            style={{
              left: l.x,
              top: l.y,
              background: `rgb(${l.color.join(",")})`
            }}
          >
            DVD
          </div>
        ))}
      </div>

      <div className="dvd-stats">
        💥 Corner Hits: {hits}
      </div>

    </div>
  );
}
