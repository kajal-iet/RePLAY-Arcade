export const carrotDocs = [
  {
    title: "Problem Overview",
    content: `
The Carrot game is a probability-based decision game inspired by the Monty Hall problem.

There are two possible outcomes:
- Red box
- Gold box

The carrot is randomly placed in one of the two boxes.

Let:
carrot_in_red = Boolean (True if carrot is in red box)
swapped = Boolean (True if player chooses to swap selection)

The objective is to determine whether swapping improves the probability of winning.

This module demonstrates probabilistic reasoning, conditional state transformation, and outcome evaluation logic.
`
  },

  {
    title: "Round Initialization Algorithm",
    content: `
At the beginning of each round, the carrot is randomly assigned to either the red or gold box.

Implementation:

import random

def new_round():
    return {
        "carrot_in_red": random.choice([True, False]),
        "swapped": False
    }

Logic:
random.choice([True, False]) ensures equal probability (50%).

Time Complexity:
O(1)

This establishes the hidden state for the round.
`
  },

  {
    title: "Reveal Logic & Swap Mechanism",
    content: `
The reveal function determines final outcome.

def reveal(carrot_in_red: bool, swapped: bool):
    if swapped:
        carrot_in_red = not carrot_in_red
    return "red" if carrot_in_red else "gold"

Explanation:

If the player swaps:
The location effectively flips.
Because swapping means selecting the other box.

Mathematically:
If initial state = X
After swap → NOT X

This is logical negation.

Truth Table:

Initial	carrot_in_red	swapped	Final Result
True	True	False	Red
True	True	True	Gold
False	False	False	Gold
False	False	True	Red

This demonstrates conditional state inversion.
`
  },

  {
    title: "Probability Analysis",
    content: `
Since there are only two boxes:

P(carrot_in_red) = 0.5
P(carrot_in_gold) = 0.5

Unlike classic 3-door Monty Hall, swapping does NOT change probability.

Probability of winning without swap = 50%
Probability of winning with swap = 50%

Why?

Because with only two options:
Swapping simply selects the opposite state.
There is no information gain.

Thus:
P(win | swap) = P(win | stay)

This module demonstrates probabilistic symmetry.
`
  },

  {
    title: "State Management & API Design",
    content: `
Possible API Structure:

POST /carrot/start
Returns:
{
  "carrot_in_red": True/False,
  "swapped": False
}

POST /carrot/reveal
Input:
{
  "carrot_in_red": True,
  "swapped": True
}

Output:
{
  "result": "red"
}

Backend handles:
- Random state initialization
- Swap logic
- Final reveal

State is minimal and stored in memory.
`
  },

  {
    title: "Algorithm Complexity & Educational Insights",
    content: `
All operations are constant time:

Random assignment → O(1)
Conditional inversion → O(1)
Return result → O(1)

Total complexity: O(1)

Educational Concepts Demonstrated:
- Boolean state modeling
- Conditional logic
- Logical negation
- Basic probability symmetry
- Decision outcome analysis

Conceptual Flow:

Random Hidden State
        ↓
Player Choice
        ↓
Optional Swap (Negation)
        ↓
Reveal Outcome

The Carrot module provides a simplified model of decision theory and probabilistic reasoning.
`
  }
];
