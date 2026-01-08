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
