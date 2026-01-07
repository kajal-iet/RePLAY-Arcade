from fastapi import APIRouter
from pydantic import BaseModel
from .logic import generate_secret_number, get_clues

router = APIRouter(prefix="/bagels")

class StartRequest(BaseModel):
    level: str

class GuessRequest(BaseModel):
    guess: str
    secret: str
    num_digits: int

LEVELS = {
    "Easy":   (3, 10, 1),
    "Medium": (4, 15, 2),
    "Hard":   (5, 20, 3)
}

@router.post("/start")
def start_game(data: StartRequest):
    digits, max_guesses, points = LEVELS[data.level]
    secret = generate_secret_number(digits)

    return {
        "secret": secret,
        "num_digits": digits,
        "max_guesses": max_guesses,
        "points": points
    }

@router.post("/guess")
def make_guess(data: GuessRequest):
    clue = get_clues(data.guess, data.secret)
    return {
        "clue": "🎉 You got it!" if clue == "WIN" else clue,
        "win": clue == "WIN"
    }


class SandboxRequest(BaseModel):
    code: str
    payload: dict

@router.post("/sandbox")
def sandbox_run(data: SandboxRequest):
    from .sandbox import run
    return run(data.code, data.payload)
