def execute_user_code(code: str, fn_name: str, args: dict):
    scope = {}
    exec(code, {}, scope)

    if fn_name not in scope:
        raise Exception(f"Function '{fn_name}' must be defined")

    return scope[fn_name](**args)
