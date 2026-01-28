<<<<<<< HEAD
from fastapi import APIRouter
from pydantic import BaseModel
import types

router = APIRouter(prefix="/bagels/sandbox")

class CodePayload(BaseModel):
    code: str

# Store active sandboxed functions
sandbox_env = {}

@router.post("/apply")
def apply_code(payload: CodePayload):
    local_env = {}
    exec(payload.code, {}, local_env)

    sandbox_env["generate_secret_number"] = local_env["generate_secret_number"]
    sandbox_env["get_clues"] = local_env["get_clues"]

    return {"status": "updated"}
=======
def run(code: str, payload: dict):
    scope = {}
    exec(code, {}, scope)

    if "get_clues" not in scope:
        raise Exception("Function 'get_clues' must exist")

    clue = scope["get_clues"](payload["guess"], payload["secret"])

    return {
        "clue": "🎉 You got it!" if clue == "WIN" else clue,
        "win": clue == "WIN"
    }
>>>>>>> 4c4587a870424882dd2f1cd710a0dc06fd13f11a
