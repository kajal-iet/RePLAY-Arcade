export const dicerollerDocs = [
  {
    title: "Problem Overview",
    content: `
The DiceRoller module interprets and executes dice notation strings such as:

"2d6"
"4d8+3"
"3d10-2"

Dice notation format:
NdS ± M

Where:
N = number of dice
S = number of sides per die
M = optional modifier

Example:
2d6+3 → Roll two 6-sided dice and add 3.

This module demonstrates string parsing, dynamic token extraction, random number simulation, and arithmetic aggregation.
`
  },

  {
    title: "Input Normalization & Parsing",
    content: `
The input string is cleaned:

clean = diceStr.lower().replace(" ", "")

This ensures:
- Case insensitivity
- Whitespace removal

If input == "quit":
Return quit flag immediately.

Next, locate the "d" separator:

dIndex = clean.find("d")

If missing:
Raise exception → invalid dice format.

This separates:
Number of dice (before "d")
Dice sides (after "d")
`
  },

  {
    title: "Modifier Extraction Logic",
    content: `
The modifier (+ or -) is optional.

modIndex = clean.find("+")
if modIndex == -1:
    modIndex = clean.find("-")

If modifier exists:
numSides = clean[dIndex+1 : modIndex]
modAmount = clean[modIndex+1 :]

If operator was "-":
modAmount = -modAmount

If no modifier:
modAmount = 0

This demonstrates conditional substring slicing and operator detection.

All string slicing operations are O(n).
`
  },

  {
    title: "Dice Rolling Simulation",
    content: `
Dice rolls are generated using:

rolls = [random.randint(1, numSides) for _ in range(numDice)]

Each roll:
Uniform probability distribution
Range: 1 to numSides

Time Complexity:
O(numDice)

Total calculation:
total = sum(rolls) + modAmount

Sum operation:
O(numDice)

This models realistic tabletop dice rolling mechanics.
`
  },

  {
    title: "Return Structure & Output Design",
    content: `
The function returns structured JSON-style data:

{
  "input": diceStr,
  "rolls": rolls,
  "total": total,
  "modifier": modAmount
}

Example:

Input:
"2d6+3"

Output:
{
  "rolls": [4, 2],
  "modifier": 3,
  "total": 9
}

This separates:
- Raw rolls
- Modifier
- Final total
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Let:
n = length of input string
k = number of dice

Parsing → O(n)
Dice generation → O(k)
Summation → O(k)

Total complexity:
O(n + k)

Since k is typically small, performance is efficient.

Memory usage:
O(k) for storing rolls.
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Domain-specific language (DSL) parsing
- Token boundary detection
- Conditional substring extraction
- Uniform random sampling
- Aggregate computation
- Input validation

Conceptual Pipeline:

Raw String Input
        ↓
Normalize & Clean
        ↓
Extract Tokens (N, S, M)
        ↓
Simulate Random Rolls
        ↓
Compute Total
        ↓
Return Structured Result

DiceRoller demonstrates how structured string parsing can power a miniature rule engine for probabilistic simulations.
`
  }
];
