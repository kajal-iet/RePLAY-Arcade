import { useState } from "react";
import GamePreview from "../../components/GamePreview";
import CodeEditor from "../../components/CodeEditor";
import Bagels from "./Bagels";

const starterCode = `
LEVELS = {
  "Easy":   { "digits": 3, "guesses": 10, "points": 1 },
  "Medium": { "digits": 4, "guesses": 15, "points": 2 },
  "Hard":   { "digits": 5, "guesses": 20, "points": 3 }
}

def generate_secret_number(num_digits):
    import random
    digits = list("0123456789")
    random.shuffle(digits)
    return ''.join(digits[:num_digits])

def get_clues(guess, secret):
    if guess == secret:
        return "WIN"

    clues = []
    for i in range(len(guess)):
        if guess[i] == secret[i]:
            clues.append("Fermi")
        elif guess[i] in secret:
            clues.append("Pico")

    if not clues:
        return "Bagels"

    return " ".join(sorted(clues))
`;

export default function BagelsPlayground() {
  const [code, setCode] = useState(starterCode);
  const [engine, setEngine] = useState(null);

  function run() {
    try {
      const sandbox = {};
      new Function("sandbox", `
        with (sandbox) {
          ${code}
        }
      `)(sandbox);

      setEngine(sandbox);
    } catch (e) {
      alert("Engine error: " + e.message);
    }
  }

  return (
    <div className="playground-layout">

      <GamePreview>
        <Bagels mode="playground" engine={engine} />
      </GamePreview>

      <CodeEditor
        code={code}
        setCode={setCode}
        onRun={run}
      />

    </div>
  );
}
