from fastapi import APIRouter
from .logic import GAME

router = APIRouter(prefix="/robots")

@router.get("/state")
def state():
    return {
        "player": GAME.player,
        "robots": GAME.robots,
        "score": GAME.score,
        "teleports": GAME.teleports,
        "over": GAME.over
    }

@router.post("/move")
def move(data: dict):
    GAME.step(move=tuple(data["move"]))
    return {"ok": True}

@router.post("/teleport")
def teleport():
    GAME.step(teleport=True)
    return {"ok": True}

@router.post("/reset")
def reset():
    GAME.reset()
    return {"ok": True}
