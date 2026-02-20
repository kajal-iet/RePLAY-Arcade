export const gullibleDocs = [
  {
    title: "Problem Overview",
    content: `
The Gullible module is a behavioral interaction game where the system repeatedly asks a yes/no question and tracks how many times the user responds "yes" before finally saying "no".

The objective is not to win but to observe behavioral persistence.

State Variables:
- yes_count → number of "yes" responses
- finished → whether user has finally said "no"
- message → feedback message

This module demonstrates state accumulation, input validation, threshold-based messaging, and behavioral classification.
`
  },

  {
    title: "Game State Architecture",
    content: `
The Game class stores:

class Game:
    yes_count
    finished
    message

GAME = Game()

The state persists across responses.

Key idea:
The game does not reset automatically.
It continues accumulating "yes" responses until explicitly stopped.

This models a persistent interaction loop.
`
  },

  {
    title: "Input Normalization & Validation",
    content: `
User input is normalized:

cleaned = text.strip().lower()

This ensures:
- Case insensitivity
- Removal of leading/trailing spaces

Valid responses:
"y", "yes"
"n", "no"

If invalid input:
GAME.message = '"input" is not a valid yes/no response.'

Time Complexity:
O(n) where n = length of input string.
`
  },

  {
    title: "Response Processing Logic",
    content: `
process_response(text):

If GAME.finished:
    Ignore further input.

If user says "no":
    GAME.finished = True

If user says "yes":
    Increment yes_count.

Every 5th "yes":
    Display teasing message:
    "😄 Still waiting... aren’t you curious?"

Otherwise:
    Clear message.

This creates periodic feedback reinforcement.
`
  },

  {
    title: "Threshold-Based Level Classification",
    content: `
get_level():

if yes_count < 5:
    "Skeptic 🧐"
elif < 15:
    "Curious 😅"
elif < 30:
    "Gullible 😄"
elif < 50:
    "Very Gullible 🤭"
else:
    "Legendary Gullible 🏆"

This is a tiered classification system.

The level depends purely on cumulative yes_count.

Time Complexity:
O(1)
`
  },

  {
    title: "Behavioral Design Logic",
    content: `
The system encourages repeated "yes" responses through:

- Minimal feedback
- Periodic reinforcement every 5 responses
- Escalating titles

This models:

- Gamification loops
- Behavioral persistence tracking
- Threshold-based reward psychology

There is no scoring function —
only behavioral accumulation.
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Per response:
- Input cleaning → O(n)
- Conditional checks → O(1)
- Counter increment → O(1)

Memory:
O(1)

The system is lightweight and entirely state-driven.

No loops over large datasets.
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Persistent state tracking
- Input normalization
- Conditional branching
- Threshold classification
- Gamified engagement design
- Finite termination control

Conceptual Pipeline:

User Input
      ↓
Normalize Text
      ↓
Validate Response
      ↓
Update yes_count
      ↓
Check Threshold
      ↓
Update Message & Level

The Gullible module demonstrates how simple counters and conditional logic can drive interactive behavioral experiences.
`
  }
];