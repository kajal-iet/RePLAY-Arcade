from fastapi import APIRouter, Request
from .logic import generate_secret_number, get_clues

router = APIRouter()

@router.post("/start")
async def start_game(request: Request, data: dict):
    level = data["level"]
    sandbox = request.headers.get("X-SANDBOX") == "true"

    secret = generate_secret_number(level)

    return {
        "secret": secret,
        "num_digits": len(secret),
        "max_guesses": 10,
        "points": 0
    }

@router.post("/guess")
async def submit_guess(request: Request, data: dict):
    guess = data["guess"]
    secret = data["secret"]

    clue, win = get_clues(guess, secret)

    return {
        "clue": clue,
        "sample_clue": clue,
        "win": win
    }

<<<<<<< HEAD
=======

class SandboxRequest(BaseModel):
    code: str
    payload: dict

@router.post("/sandbox")
def sandbox_run(data: SandboxRequest):
    from .sandbox import run
    return run(data.code, data.payload)
>>>>>>> 4c4587a870424882dd2f1cd710a0dc06fd13f11a
