import {
  startBagels,
  submitGuess,
  startBagelsSandbox,
  submitGuessSandbox
} from "./bagels.api";

export async function startGame({ mode, level, code }) {
  if (mode === "game") return startBagels(level);
  return startBagelsSandbox(code, level);
}

export async function submitMove({ mode, payload, code }) {
  if (mode === "game") return submitGuess(payload);
  return submitGuessSandbox({ ...payload, code });
}
