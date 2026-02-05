import { useState } from "react";
import Bagels from "../games/bagels/BagelsGame";
import BagelsPlayground from "../games/bagels/BagelsPlayground";

export default function GamePage() {
  const [mode, setMode] = useState("game");

  return (
    <>
      <div className="mode-switch">
        <button onClick={() => setMode("game")}>🎮 Game</button>
        <button onClick={() => setMode("playground")}>🧪 Playground</button>
      </div>

      {mode === "game" && <Bagels />}
      {mode === "playground" && <BagelsPlayground />}
    </>
  );
}
