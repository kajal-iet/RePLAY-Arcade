export const chohanDocs = [
  {
    title: "Problem Overview",
    content: `
Cho-Han is a traditional Japanese dice game based on predicting whether the sum of two dice rolls will be even (CHO) or odd (HAN).

Let:
d1 = first die (1–6)
d2 = second die (1–6)
total = d1 + d2

If total % 2 == 0 → CHO (even)
If total % 2 == 1 → HAN (odd)

The game is purely probability-driven and demonstrates randomness, modular arithmetic, and parity classification.

This implementation uses Python and FastAPI, where the backend handles dice rolling and result determination.
`
  },

  {
    title: "Dice Roll Simulation Algorithm",
    content: `
Dice values are generated using uniform random distribution.

Implementation:

import random

def roll_dice():
    d1 = random.randint(1, 6)
    d2 = random.randint(1, 6)
    total = d1 + d2
    result = "CHO" if total % 2 == 0 else "HAN"
    return d1, d2, total, result

Explanation:
random.randint(1, 6) ensures each outcome has equal probability (1/6).

Time Complexity:
O(1)

Two dice produce 36 possible equally likely combinations.
`
  },

  {
    title: "Parity Classification Logic",
    content: `
The key classification rule:

total % 2 == 0 → even → CHO
total % 2 == 1 → odd → HAN

Modulo operator (%) determines remainder after division by 2.

Example:
4 % 2 = 0 → Even
7 % 2 = 1 → Odd

This demonstrates modular arithmetic in practical classification problems.

Parity checking is constant time → O(1).
`
  },

  {
    title: "Probability Analysis",
    content: `
Total possible outcomes:
6 × 6 = 36 combinations

Even totals:
2, 4, 6, 8, 10, 12

Odd totals:
3, 5, 7, 9, 11

Distribution:

Even outcomes = 18
Odd outcomes = 18

Therefore:
P(CHO) = 18/36 = 0.5
P(HAN) = 18/36 = 0.5

The game is perfectly fair.

Unlike some gambling games, there is no statistical advantage in choosing CHO or HAN.
`
  },

  {
    title: "Cultural Mapping & Number Representation",
    content: `
The module includes Japanese number mapping:

JAPANESE_NUMBERS = {
  1: 'ICHI',
  2: 'NI',
  3: 'SAN',
  4: 'SHI',
  5: 'GO',
  6: 'ROKU'
}

This mapping is used for display purposes only.

Example:
If d1 = 3 → SAN
If d2 = 5 → GO

This demonstrates dictionary-based lookup (O(1) time).

It also separates computational logic from presentation formatting.
`
  },

  {
    title: "Backend API & Data Flow",
    content: `
Endpoint:
POST /chohan/roll

Output:
{
  "d1": 3,
  "d2": 5,
  "total": 8,
  "result": "CHO"
}

Backend Pipeline:

Generate random dice
        ↓
Compute total
        ↓
Apply parity check
        ↓
Return structured JSON

Frontend displays dice values and result.
`
  },

  {
    title: "Algorithm Complexity & Educational Insights",
    content: `
All operations are constant time:

Random generation → O(1)
Addition → O(1)
Modulo check → O(1)
Dictionary lookup → O(1)

Total complexity: O(1)

Educational Concepts Demonstrated:
- Random number simulation
- Uniform probability distribution
- Modular arithmetic
- Parity classification
- Dictionary lookup efficiency

Conceptual Pipeline:

Random Input
      ↓
Arithmetic Operation
      ↓
Modulo Classification
      ↓
Result Output

Cho-Han demonstrates how simple arithmetic and probability rules can form a complete decision-based game engine.
`
  }
];
