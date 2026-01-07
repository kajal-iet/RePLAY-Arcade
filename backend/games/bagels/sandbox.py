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
