import { useNavigate } from "react-router-dom";

export default function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <div className="game-card">
      <h3>{game.emoji} {game.name}</h3>
      <p>{game.desc}</p>

      <button onClick={() => navigate(`/game/${game.id}`)}>
        ▶ Play
      </button>
    </div>
  );
}
