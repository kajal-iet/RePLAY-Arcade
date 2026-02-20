export const hangmanDocs = [
  {
    title: "Problem Overview",
    content: `
The Hangman module is a word-guessing game where the player attempts to reveal a hidden word one letter at a time.

The system:
- Randomly selects a category.
- Randomly selects a word from that category.
- Tracks correct and missed guesses.
- Displays progressive hangman ASCII art for each wrong guess.
- Ends the game when the word is fully guessed or attempts are exhausted.

This module demonstrates string membership checks, progressive failure visualization, state tracking, and win/loss evaluation.
`
  },

  {
    title: "Game State Architecture",
    content: `
The Game class stores:

- wins → total successful games
- losses → total failed games
- category → selected category
- secret → hidden word
- correct → correctly guessed letters
- missed → incorrect letters
- logs → result messages
- locked → game termination flag

GAME = Game()

The state persists across rounds, allowing cumulative score tracking.
`
  },

  {
    title: "Word & Category Selection",
    content: `
CATEGORIES is a dictionary mapping category names to word lists.

Example:
"Animals" → ["ANT", "BABOON", "BADGER", ...]

During reset():

If category not specified:
    category = random.choice(list(CATEGORIES.keys()))

Then:
secret = random.choice(CATEGORIES[category])

Time Complexity:
O(1)

This introduces variety and replayability.
`
  },

  {
    title: "Guess Submission Algorithm",
    content: `
submit_guess(letter):

1) If game locked → ignore.
2) If letter already guessed → ignore.
3) If letter in secret:
      Add to correct list.
      Check win condition.
4) Else:
      Add to missed list.
      Check loss condition.

Membership check:
if letter in GAME.secret

Time Complexity:
O(n)
Where n = length of secret word.
`
  },

  {
    title: "Win Condition Logic",
    content: `
Win condition:

if all(c in GAME.correct for c in GAME.secret):

This ensures:
Every unique letter in the word has been guessed.

When satisfied:
- Log win message
- Increment wins
- Lock game

Time Complexity:
O(n)
`
  },

  {
    title: "Loss Condition & ASCII Progression",
    content: `
The game tracks incorrect guesses.

Loss condition:
if len(GAME.missed) >= len(HANGMAN_PICS) - 1:

HANGMAN_PICS contains progressive ASCII drawings.
Each incorrect guess advances the visual stage.

Final stage:
Full hangman drawn → Game Over.

This models progressive visual state escalation.
`
  },

  {
    title: "Duplicate Guess Prevention",
    content: `
Before processing:

if letter in GAME.correct or letter in GAME.missed:
    return

This prevents:
- Duplicate penalties
- Duplicate credit

Maintains integrity of attempt count.
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Per guess:

Membership check → O(n)
Win verification → O(n)
State updates → O(1)

Overall per guess:
O(n)

Memory:
O(k)
Where k = number of guessed letters.

Performance remains efficient for small word sizes.
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Random selection from categorized dataset
- Membership testing in strings
- Progressive state visualization
- Win/loss threshold enforcement
- Duplicate input prevention
- Persistent scoring system

Conceptual Pipeline:

Select Category
      ↓
Select Secret Word
      ↓
User Guesses Letter
      ↓
Check Membership
      ↓
Update Correct/Missed
      ↓
Check Win or Loss
      ↓
Lock Game

The Hangman module combines string processing, state management, and progressive visualization into a complete interactive game engine.
`
  }
];