from fastapi import APIRouter
from pydantic import BaseModel

sandbox_router = APIRouter(prefix="/sandbox")

class SandboxRequest(BaseModel):
    code: str
    digits: int

@sandbox_router.post("/run/bagels")
def run_bagels_sandbox(data: SandboxRequest):
    local_env = {}

    try:
        exec(data.code, {}, local_env)

        generate = local_env["generate_secret_number"]
        clues = local_env["get_clues"]

        secret = generate(data.digits)
        sample = clues("123", secret)

        return {
            "secret": secret,
            "sample_clue": sample
        }

    except Exception as e:
        return { "error": str(e) }
