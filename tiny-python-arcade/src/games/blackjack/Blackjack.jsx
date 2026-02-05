import { useState } from "react";
import { startGame, hit, stand } from "./blackjack.api";

export default function Blackjack() {
  const [game, setGame] = useState(null);

  async function start() {
    setGame(await startGame());
  }

  async function doHit() {
    setGame(await hit());
  }

  async function doStand() {
    setGame(await stand());
  }

  const score = hand => {
    let total = 0, aces = 0;
    hand.forEach(([r]) => {
      if (r === "A") aces++;
      else if (["K","Q","J"].includes(r)) total += 10;
      else total += +r;
    });
    while (aces--) total += total + 11 <= 21 ? 11 : 1;
    return total;
  };

  return (
    <div className="blackjack-game">

      <h2>🃏 Blackjack</h2>
      <p className="subtitle">Try to beat the dealer without going over 21</p>

      <div className="rules-card">
        <h3>📜 Rules</h3>
        <ul>
          <li>Get as close to <b>21</b> as possible without exceeding it</li>
          <li>Face cards = 10, Aces = 1 or 11</li>
          <li>Click <b>Hit</b> to draw, <b>Stand</b> to hold</li>
          <li>If you go above 21 → you <b>bust</b></li>
          <li>Dealer draws until reaching 17</li>
        </ul>
      </div>

      {!game && (
        <button className="start-btn" onClick={start}>
          ▶ Start Game
        </button>
      )}

      {game && (
        <div className="table">

          <div className="hand">
            <h4>Dealer ({score(game.dealer)})</h4>
            <div className="cards">
              {game.dealer.map((c,i) => <div key={i} className="card">{c[0]}{c[1]}</div>)}
            </div>
          </div>

          <div className="hand">
            <h4>You ({score(game.player)})</h4>
            <div className="cards">
              {game.player.map((c,i) => <div key={i} className="card">{c[0]}{c[1]}</div>)}
            </div>
          </div>

          <div className="controls">
            <button onClick={doHit}>Hit</button>
            <button onClick={doStand}>Stand</button>
          </div>

        </div>
      )}
    </div>
  );
}
