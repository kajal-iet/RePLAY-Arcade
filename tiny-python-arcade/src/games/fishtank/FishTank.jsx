import { useEffect, useState } from "react";
import { getFrame, addFish, addCrab } from "./fishtank.api";
import { addKelp } from "./fishtank.api";


export default function FishTank() {
  const [frame, setFrame] = useState("");

  useEffect(() => {
    const timer = setInterval(async () => {
      const data = await getFrame();
      setFrame(data.frame);
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="game-shell theme-fishtank">
      <h2>🐠 Fish Tank</h2>
      <div className="rules-card">
        <h3>📜 How It Works</h3>
        <ul>
            <li>Click <b>Add Fish</b> to spawn swimming fish 🐟</li>
            <li>Click <b>Add Crab</b> to add crabs walking on sand 🦀</li>
            <li>Click <b>Add Plant</b> to grow underwater kelp 🌿</li>
            <li>Bubbles rise automatically from hidden bubblers 🫧</li>
            <li>The aquarium updates continuously in real time</li>
        </ul>
        </div>


      <div className="controls">
        <button onClick={addFish}>Add Fish</button>
        <button onClick={addCrab}>Add Crab</button>
        <button onClick={addKelp}>Add Plant</button>

      </div>

      <pre className="tank">{frame}</pre>
    </div>
  );
}
