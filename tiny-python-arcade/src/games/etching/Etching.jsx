import { useState } from "react";
import { drawCanvas, exportPNG } from "./etching.api";

export default function Etching(){

  const [moves, setMoves] = useState([]);
  const [redo, setRedo] = useState([]);
  const [frame, setFrame] = useState("");

  async function update(newMoves){
    const res = await drawCanvas(newMoves);
    setFrame(res.frame);
  }

  function move(dir){
    const m = [...moves, dir];
    setMoves(m);
    setRedo([]);
    update(m);
  }

  function undo(){
    if(!moves.length) return;
    const m = moves.slice(0,-1);
    setRedo([moves.at(-1), ...redo]);
    setMoves(m);
    update(m);
  }

  function redoMove(){
    if(!redo.length) return;
    const m = [...moves, redo[0]];
    setRedo(redo.slice(1));
    setMoves(m);
    update(m);
  }

  async function download(){
    const res = await exportPNG(moves);
    const a = document.createElement("a");
    a.href = `data:image/png;base64,${res.png}`;
    a.download = "etching.png";
    a.click();
  }

  return (
    <div className="game-shell theme-etching">

      <h2>🖌 Etching Drawer</h2>

      <div className="row">
        {["W","A","S","D"].map(k=>(
          <button key={k} onClick={()=>move(k)}>{k}</button>
        ))}
        <button onClick={undo}>Undo</button>
        <button onClick={redoMove}>Redo</button>
        <button onClick={download}>Download</button>
      </div>

      <pre className="etch-canvas">{frame}</pre>

    </div>
  );
}
