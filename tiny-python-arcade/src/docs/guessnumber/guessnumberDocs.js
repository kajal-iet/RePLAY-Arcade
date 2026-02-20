export const guessNumberDocs = [
  {
    title: "Problem Overview",
    content: `
The Guess Number module is a feedback-driven number deduction game.

The system selects a hidden random number within a defined range.
The player attempts to guess it within a limited number of tries.

For each guess:
- If guess == secret → Correct
- If guess < secret → Low
- If guess > secret → High

The objective is to identify the hidden number before exhausting attempts.

This module demonstrates hidden state modeling, conditional branching, difficulty scaling, and iterative feedback systems.
`
  },

  {
    title: "Game State Architecture",
    content: `
The Game class stores:

- level (difficulty)
- secret (hidden number)
- attempts
- max_attempts
- max_num (range upper bound)
- history (list of guesses)
- over (boolean)

GAME = Game()

State variables ensure that:
- Game logic is centralized
- Attempts are tracked
- Game termination is controlled
`
  },

  {
    title: "Difficulty Configuration Logic",
    content: `
reset(level):

If level == "Easy":
    max_num = 50
    max_attempts = 10

If level == "Medium":
    max_num = 100
    max_attempts = 10

Else (Hard):
    max_num = 500
    max_attempts = 12

Then:
secret = random.randint(1, max_num)

Difficulty increases:
- Larger search space
- Slightly adjusted attempts

This models controlled scaling of complexity.
`
  },

  {
    title: "Guess Evaluation Algorithm",
    content: `
Function:

def guess(n):

1) If game over → return None
2) Increment attempts
3) Compare guess to secret
4) Append result to history
5) If correct → mark game over
6) If attempts exhausted → mark game over

Comparison logic:

if n == secret:
    result = "Correct"
elif n < secret:
    result = "Low"
else:
    result = "High"

Time Complexity:
O(1)
`
  },

  {
    title: "Feedback-Driven Search Insight",
    content: `
Although players may guess randomly,
optimal strategy is Binary Search.

For example:
Range 1–100

First guess: 50
If High → new range 1–49
If Low → new range 51–100

Binary search reduces search space by half each step.

Time Complexity of optimal guessing:
O(log n)

For n = 100:
Maximum ~7 guesses needed.

This shows difference between:
Random guessing → O(n)
Optimal strategy → O(log n)
`
  },

  {
    title: "History Tracking & Termination",
    content: `
Each guess is recorded:

history.append((n, "Low"/"High"/"Correct"))

Termination conditions:

If correct:
GAME.over = True

If attempts >= max_attempts:
GAME.over = True

This ensures:
- Finite gameplay
- Proper session closure
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Guess evaluation → O(1)
State updates → O(1)

Worst-case attempts:
Fixed limit (10–12)

Memory:
O(k) where k = number of guesses

Overall computational cost is minimal.
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Hidden state modeling
- Conditional branching
- Feedback loops
- Difficulty scaling
- Binary search principle
- Iterative narrowing

Conceptual Pipeline:

Initialize Secret
      ↓
Player Guess
      ↓
Compare Values
      ↓
Provide Feedback
      ↓
Update Attempts
      ↓
Repeat Until Win or Exhausted

The Guess Number module illustrates how feedback-driven logic enables efficient search strategies and controlled game state progression.
`
  }
];