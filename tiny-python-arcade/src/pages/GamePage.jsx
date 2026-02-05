import { useParams, useNavigate } from "react-router-dom";
import { GAMES } from "../data/games";
import Bagels from "../games/bagels/Bagels";
import Birthday from "../games/birthday/Birthday";
import Bitmap from "../games/bitmap/Bitmap";
import Blackjack from "../games/blackjack/Blackjack";
import Dvd from "../games/dvd/Dvd";
import Caesar from "../games/caesar/Caesar";
import Calendar from "../games/calendar/Calendar";
import Carrot from "../games/carrot/Carrot";
import Chohan from "../games/chohan/Chohan";
import Clickbait from "../games/clickbait/Clickbait";
import Collatz from "../games/collatz/Collatz"
import Timer from "../games/timer/Timer";
import Diamonds from "../games/diamonds/Diamonds";
import DiceMath from "../games/dicemath/Dicemath";
import DiceRoller from "../games/diceroller/Diceroller";
import Matrix from "../games/matrix/Matrix";
import Ducklings from "../games/ducklings/Ducklings";
import Etching from "../games/etching/Etching";
import Factors from "../games/factors/Factors";
import Fibonacci from "../games/fibonacci/Fibonacci";
import FastDraw from "../games/fastdraw/FastDraw";
import FishTank from "../games/fishtank/FishTank";
import Flooder from "../games/flooder/Flooder";
import Connect4 from "../games/connect4/Connect4"
import GuessNumber from "../games/guessnumber/GuessNumber";
import Gullible from "../games/gullible/Gullible";
import Hacking from "../games/hacking/Hacking";
import Hangman from "../games/hangman/Hangman";
import PatternCarpet from "../games/pattern_carpet/PatternCarpet";
import Hourglass from "../games/hourglass/Hourglass";
import HungryRobots from "../games/robots/Robots";
import PigLatin from "../games/piglatin/piglatin";
import DocNotebook from "../docs/DocNotebook";
import { bagelsDocs } from "../docs/bagels/bagelsDocs";
import { birthdayDocs } from "../docs/birthday/birthdayDocs";
import { caesarDocs } from "../docs/caesar/caesarDocs";
import { bitmapDocs } from "../docs/bitmap/bitmapDocs";
import { blackjackDocs } from "../docs/blackjack/blackjackDocs";
import { dvdDocs } from "../docs/dvd/dvdDocs";
import { calendarDocs } from "../docs/calendar/calendarDocs";
import { carrotDocs } from "../docs/carrot/carrotDocs";
import { chohanDocs } from "../docs/chohan/chohanDocs";
import { clickbaitDocs } from "../docs/clickbait/clickbaitDocs";
import { collatzDocs } from "../docs/collatz/collatzDocs";
import { timerDocs } from "../docs/timer/timerDocs";
import { diamondsDocs } from "../docs/diamonds/diamondsDocs";
import { dicemathDocs } from "../docs/dicemath/dicemathDocs";
import { dicerollerDocs } from "../docs/diceroller/dicerollerDocs";
import { matrixDocs } from "../docs/matrix/matrixDocs";
import { ducklingsDocs } from "../docs/ducklings/ducklingsDocs";
import { etchingDocs } from "../docs/etching/etchingDocs";
import { factorsDocs } from "../docs/factors/factorsDocs";
import { fibonacciDocs } from "../docs/fibonacci/fibonacciDocs";
import { fastdrawDocs } from "../docs/fastdraw/fastdrawDocs";
import { fishtankDocs } from "../docs/fishtank/fishtankDocs";
import { flooderDocs } from "../docs/flooder/flooderDocs";
import { connect4Docs } from "../docs/connect4/connect4Docs";
import { guessnumberDocs } from "../docs/guessnumber/guessnumberDocs";
import { gullibleDocs } from "../docs/gullible/gullibleDocs";
import { hackingDocs } from "../docs/hacking/hackingDocs";
import { hangmanDocs } from "../docs/hangman/hangmanDocs";
import { pattern_carpetDocs } from "../docs/pattern_carpet/pattern_carpetDocs";
import { hourglassDocs } from "../docs/hourglass/hourglassDocs";
import { robotsDocs } from "../docs/robots/robotsDocs";
import { piglatinDocs } from "../docs/piglatin/piglatinDocs";

export default function GamePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = GAMES.find((g) => g.id === id);
  if (!game) return <h2>Game not found</h2>;

  function renderGame() {
    switch (id) {
      case "bagels":
        return <Bagels />;
      case "birthday":
        return <Birthday />;
      case "bitmap":
        return <Bitmap />;
      case "blackjack":
        return <Blackjack />;
      case "dvd":
        return <Dvd />;
      case "caesar":
        return <Caesar />;
      case "calendar":
        return <Calendar />;
      case "carrot":
        return <Carrot />;
      case "chohan":
        return <Chohan />;
      case "clickbait":
        return <Clickbait />;
      case "collatz":
        return <Collatz />;
      case "countdown":
        return <Timer />;
      case "diamond":
        return <Diamonds />;
      case "dice_math":
        return <DiceMath />;
      case "dice_roll":
        return <DiceRoller />;
      case "matrix":
        return <Matrix />;
      case "ducklings":
        return <Ducklings />;
      case "etching":
        return <Etching />;
      case "factor":
        return <Factors />;
      case "fibonacci":
        return <Fibonacci />;
      case "fastdraw":
        return <FastDraw />;
      case "fish":
        return <FishTank />;
      case "flooder":
        return <Flooder />;
      case "fourinarow":
        return <Connect4 />;
      case "guess":
        return <GuessNumber />;
      case "gullible":
        return <Gullible />;
      case "hacking":
        return <Hacking />;
      case "hangman":
        return <Hangman />;
      case "hexgrid":
        return <PatternCarpet />;

      case "hourglass":
        return <Hourglass />;
      case "robots":
        return <HungryRobots />;
      case "piglatin":
        return <PigLatin />;

      default:
        return (
          <div className="container">
            <h3>🚧 This game is coming soon!</h3>
          </div>
        );
    }
  }

  return (
  <div className="layout">
    <div className="left-panel">
      {/* <button onClick={() => navigate("/")}>⬅ Back</button> */}
      <h2>{game.emoji} {game.name}</h2>
      {/* <p>{game.desc}</p> */}
      {renderGame()}
    </div>

    <div className="right-panel">
      {id === "bagels" && <DocNotebook docs={bagelsDocs} />}
      {id === "birthday" && <DocNotebook docs={birthdayDocs} />}
      {id === "caesar" && <DocNotebook docs={caesarDocs} />}
      {id === "bitmap" && <DocNotebook docs={bitmapDocs} />}
      {id === "blackjack" && <DocNotebook docs={blackjackDocs} />}
      {id === "dvd" && <DocNotebook docs={dvdDocs} />}
      {id === "calendar" && <DocNotebook docs={calendarDocs} />}
      {id === "carrot" && <DocNotebook docs={carrotDocs} />}
      {id === "chohan" && <DocNotebook docs={chohanDocs} />}
      {id === "clickbait" && <DocNotebook docs={clickbaitDocs} />}
      {id === "collatz" && <DocNotebook docs={collatzDocs} />}
      {id === "countdown" && <DocNotebook docs={timerDocs} />}
      {id === "diamond" && <DocNotebook docs={diamondsDocs} />}
      {id === "dice_math" && <DocNotebook docs={dicemathDocs} />}
      {id === "dice_roll" && <DocNotebook docs={dicerollerDocs} />}
      {id === "matrix" && <DocNotebook docs={matrixDocs} />}
      {id === "ducklings" && <DocNotebook docs={ducklingsDocs} />}
      {id === "etching" && <DocNotebook docs={etchingDocs} />}
      {id === "factor" && <DocNotebook docs={factorsDocs} />}
      {id === "fibonacci" && <DocNotebook docs={fibonacciDocs} />}
      {id === "fastdraw" && <DocNotebook docs={fastdrawDocs} />}
      {id === "fish" && <DocNotebook docs={fishtankDocs} />}
      {id === "flooder" && <DocNotebook docs={flooderDocs} />}
      {id === "fourinarow" && <DocNotebook docs={connect4Docs} />}
      {id === "guess" && <DocNotebook docs={guessnumberDocs} />}
      {id === "gullible" && <DocNotebook docs={gullibleDocs} />}
      {id === "hacking" && <DocNotebook docs={hackingDocs} />}
      {id === "hangman" && <DocNotebook docs={hangmanDocs} />}
      {id === "hexgrid" && <DocNotebook docs={pattern_carpetDocs} />}
      {id === "hourglass" && <DocNotebook docs={hourglassDocs} />}
      {id === "robots" && <DocNotebook docs={robotsDocs} />}
      {id === "piglatin" && <DocNotebook docs={piglatinDocs} />}

    </div>
  </div>
);

}
