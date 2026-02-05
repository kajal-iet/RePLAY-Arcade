import { GAMES } from "../data/games";
import GameCard from "../components/GameCard";

export default function Home() {
  return (
    <div className="container">
      <h1>🎮 Tiny Python Arcade</h1>
      <p>Click a game to start playing</p>

      <div className="grid">
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
