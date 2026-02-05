// import { useParams, useNavigate } from "react-router-dom";
// import { GAMES } from "../data/games";
// import Bagels from "../games/bagels/Bagels";
// import Birthday from "../games/birthday/Birthday";
// import Bitmap from "../games/bitmap/Bitmap";
// import Blackjack from "../games/blackjack/Blackjack";
// import Dvd from "../games/dvd/Dvd";
// import Caesar from "../games/caesar/Caesar";
// import Calendar from "../games/calendar/Calendar";
// import Carrot from "../games/carrot/Carrot";
// import Chohan from "../games/chohan/Chohan";
// import Clickbait from "../games/clickbait/Clickbait";
// import Collatz from "../games/collatz/Collatz"
// import Timer from "../games/timer/Timer";
// import Diamonds from "../games/diamonds/Diamonds";
// import DiceMath from "../games/dicemath/Dicemath";
// import DiceRoller from "../games/diceroller/Diceroller";
// import Matrix from "../games/matrix/Matrix";
// import Ducklings from "../games/ducklings/Ducklings";
// import Etching from "../games/etching/Etching";
// import Factors from "../games/factors/Factors";
// import Fibonacci from "../games/fibonacci/Fibonacci";
// import FastDraw from "../games/fastdraw/Fastdraw";
// import FishTank from "../games/fishtank/FishTank";
// import Flooder from "../games/flooder/Flooder";
// import Connect4 from "../games/connect4/Connect4"
// import GuessNumber from "../games/guessnumber/GuessNumber";
// import Gullible from "../games/gullible/Gullible";
// import Hacking from "../games/hacking/Hacking";
// import Hangman from "../games/hangman/Hangman";
// import PatternCarpet from "../games/pattern_carpet/PatternCarpet";
// import Hourglass from "../games/hourglass/Hourglass";
// import HungryRobots from "../games/robots/Robots";
// import PigLatin from "../games/piglatin/piglatin";

// export default function GamePage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const game = GAMES.find((g) => g.id === id);
//   if (!game) return <h2>Game not found</h2>;

//   function renderGame() {
//     switch (id) {
//       case "bagels":
//         return <Bagels />;
//       case "birthday":
//         return <Birthday />;
//       case "bitmap":
//         return <Bitmap />;
//       case "blackjack":
//         return <Blackjack />;
//       case "dvd":
//         return <Dvd />;
//       case "caesar":
//         return <Caesar />;
//       case "calendar":
//         return <Calendar />;
//       case "carrot":
//         return <Carrot />;
//       case "chohan":
//         return <Chohan />;
//       case "clickbait":
//         return <Clickbait />;
//       case "collatz":
//         return <Collatz />;
//       case "countdown":
//         return <Timer />;
//       case "diamond":
//         return <Diamonds />;
//       case "dice_math":
//         return <DiceMath />;
//       case "dice_roll":
//         return <DiceRoller />;
//       case "matrix":
//         return <Matrix />;
//       case "ducklings":
//         return <Ducklings />;
//       case "etching":
//         return <Etching />;
//       case "factor":
//         return <Factors />;
//       case "fibonacci":
//         return <Fibonacci />;
//       case "fastdraw":
//         return <FastDraw />;
//       case "fish":
//         return <FishTank />;
//       case "flooder":
//         return <Flooder />;
//       case "fourinarow":
//         return <Connect4 />;
//       case "guess":
//         return <GuessNumber />;
//       case "gullible":
//         return <Gullible />;
//       case "hacking":
//         return <Hacking />;
//       case "hangman":
//         return <Hangman />;
//       case "hexgrid":
//         return <PatternCarpet />;

//       case "hourglass":
//         return <Hourglass />;
//       case "robots":
//         return <HungryRobots />;
//       case "piglatin":
//         return <PigLatin />;

//       default:
//         return (
//           <div className="container">
//             <h3>🚧 This game is coming soon!</h3>
//           </div>
//         );
//     }
//   }

//   return (
//     <div className="container">
//       <button onClick={() => navigate("/")}>⬅ Back</button>
//       <h2>{game.emoji} {game.name}</h2>
//       <p>{game.desc}</p>

//       {renderGame()}
//     </div>
//   );
// }


import { useState } from "react";
import Bagels from "../games/bagels/Bagels";
// import Playground from "./playground/Playground";
import BagelsPlayground from "../games/bagels/BagelsPlayground";

export default function GamePage() {
  const [mode, setMode] = useState("play");


  return (
    <>
      <div className="mode-buttons">
      <button onClick={() => setMode("play")}>▶ Play</button>
      <button onClick={() => setMode("lab")}>🧪 Playground</button>
    </div>


      {mode === "play" ? <Bagels /> : <BagelsPlayground />}

    </>
  );
}
