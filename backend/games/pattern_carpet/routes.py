from fastapi import APIRouter
from fastapi.responses import Response
from pydantic import BaseModel
from .logic import apply_changes, build_carpet, generate_image, GAME

router = APIRouter(prefix="/carpet")

class CarpetData(BaseModel):
    pattern: str
    x: int
    y: int
    bg: str

@router.get("/state")
def state():
    return {
        "pattern": GAME.pattern,
        "x": GAME.x,
        "y": GAME.y,
        "bg": GAME.bg,
        "preview": build_carpet()
    }

@router.post("/apply")
def apply(data: CarpetData):
    apply_changes(data.pattern, data.x, data.y, data.bg)
    return {"ok": True}

@router.get("/image")
def image():
    img_bytes = generate_image()
    return Response(content=img_bytes, media_type="image/png")
