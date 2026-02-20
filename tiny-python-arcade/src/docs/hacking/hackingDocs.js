export const hackingDocs = [
  {
    title: "Problem Overview",
    content: `
The Hacking module simulates a password cracking mini-game inspired by classic terminal hacking interfaces.

The player is presented with a list of candidate words.
One word is secretly selected as the correct password.

The player has limited attempts to guess correctly.

For each guess:
- The system reports how many letters match in the correct position.
- A heat indicator (Cold/Warm/Hot) is displayed.
- The system locks after a fixed number of failed attempts.

This module demonstrates constrained search, positional matching algorithms, and feedback-based elimination strategies.
`
  },

  {
    title: "Game State Architecture",
    content: `
The Game class stores:

- words → 12 randomly selected candidates
- secret → hidden correct password
- tries → attempt counter
- logs → history of system messages
- locked → whether system is locked

GAME = Game()

State ensures:
- Only valid words are accepted
- Attempts are limited
- Lock state prevents further guessing
`
  },

  {
    title: "Password Matching Algorithm",
    content: `
Function:

def matching_letters(a, b):
    return sum(1 for i in range(len(a)) if a[i] == b[i])

Logic:
Compare characters position-by-position.
Count exact positional matches.

Example:

Secret: NETWORK
Guess:  NETWORM

Matches:
N==N ✓
E==E ✓
T==T ✓
W==W ✓
O==O ✓
R==R ✓
K!=M ✗

Result: 6 matches

Time Complexity:
O(n)
Where n = word length (7 here)
`
  },

  {
    title: "Heat Classification Logic",
    content: `
Heat label is derived from number of matches:

0–1 matches → 🧊 Cold
2–4 matches → 🌡 Warm
5–7 matches → 🔥 Hot

Function:

def heat_label(matches):
    if matches <= 1: return "Cold"
    if matches <= 4: return "Warm"
    return "Hot"

This creates qualitative feedback from quantitative data.

Time Complexity:
O(1)
`
  },

  {
    title: "Guess Submission Flow",
    content: `
submit_guess(guess):

1) If locked → ignore.
2) Validate guess is in candidate list.
3) Increment tries.
4) Calculate positional matches.
5) Log feedback message.
6) If correct → grant access.
7) If attempts exhausted → system lock.

Invalid guesses:
Logged as:
"INVALID INPUT — NOT IN MEMORY"

Correct guess:
"A C C E S S   G R A N T E D"

Failure after max attempts:
"SYSTEM LOCKED — PASSWORD WAS X"
`
  },

  {
    title: "Limited Attempts & Lock Logic",
    content: `
MAX_TRIES = 4

If tries >= MAX_TRIES and password not found:
System locks.
No further guesses accepted.

This models:
- Security lockout mechanisms
- Finite attempt constraint

Prevents brute force beyond limit.
`
  },

  {
    title: "Search Strategy Insight",
    content: `
Optimal player strategy:

Use elimination logic.

Example:
If guess returns 3/7 matches,
eliminate all words with different positional similarity.

This narrows candidate space.

Worst-case brute force:
O(k)
Where k = number of candidate words (12)

Optimal narrowing reduces search quickly.
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Per guess:
Validation → O(k)
Matching → O(n)
Heat classification → O(1)

Total per guess:
O(k + n)

Since k and n are small,
performance is efficient.

Memory:
O(k) for word list
O(attempts) for logs
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Positional comparison algorithms
- Feedback-based search narrowing
- Input validation
- Lock-state enforcement
- Attempt limitation
- Game-state management

Conceptual Pipeline:

Select Secret
      ↓
User Guess
      ↓
Validate Input
      ↓
Count Positional Matches
      ↓
Generate Heat Feedback
      ↓
Check Win or Lock

The Hacking module models constrained password cracking logic and strategic elimination through positional similarity analysis.
`
  }
];