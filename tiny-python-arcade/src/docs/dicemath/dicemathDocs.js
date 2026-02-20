export const dicemathDocs = [
  {
    title: "Problem Overview",
    content: `
The DiceMath module generates a visual board containing multiple ASCII dice placed randomly on a canvas. The system also calculates the total value of all dice placed.

Let:
DICE = predefined list of dice faces
Each face contains:
- ASCII representation (5 × 9 grid)
- Numeric value (1–6)

The system randomly selects a number of dice, places them on a fixed canvas without overlap, and computes the total sum.

This module demonstrates spatial placement, collision detection, randomized layout generation, and aggregate computation.
`
  },

  {
    title: "Dice Representation Structure",
    content: `
Each die is stored as:

([
  ASCII lines (5 rows × 9 columns)
], value)

Example:
(['+-------+',
  '|   O   |',
  '|       |',
  '|       |',
  '+-------+'], 1)

This structure separates:
- Visual representation
- Mathematical value

Lookup time for value retrieval → O(1)

The DICE list contains multiple face variations for randomness.
`
  },

  {
    title: "Canvas Initialization Algorithm",
    content: `
The canvas is a 2D character grid:

canvas = [[" " for _ in range(60)] for _ in range(15)]

Dimensions:
Height = 15 rows
Width = 60 columns

Time Complexity:
O(width × height)

The canvas acts as a blank drawing surface where dice will be placed.
`
  },

  {
    title: "Dice Placement & Collision Detection",
    content: `
Number of dice:
count = random.randint(min_dice, max_dice)

For each die:
1. Randomly select a dice face.
2. Randomly choose (x, y) coordinates.
3. Check if placement overlaps existing dice.
4. If no collision → place die.

Collision check:

if not any(px <= x < px+9 and py <= y < py+5 for px, py in used):

This ensures:
- No dice overlap
- Each die occupies a unique 9×5 region

Collision detection time:
O(k) where k = number of already placed dice.

Since k is small, practical complexity remains efficient.
`
  },

  {
    title: "Dice Rendering Algorithm",
    content: `
Once a valid position is found:

for dy in range(5):
    for dx in range(9):
        canvas[y+dy][x+dx] = face[dy][dx]

This copies each character from the dice ASCII grid onto the canvas.

Time Complexity per die:
O(5 × 9) → O(45) → constant time.

Total rendering complexity:
O(number_of_dice)
`
  },

  {
    title: "Total Value Calculation",
    content: `
Each die has an associated numeric value.

total += value

Since addition is O(1), computing total is linear relative to number of dice:

Time Complexity:
O(n) where n = number of dice

The function returns:
board (ASCII canvas as string)
total (sum of all dice values)
`
  },

  {
    title: "Board Serialization & Output",
    content: `
Final board conversion:

board = "\\n".join("".join(row) for row in canvas)

Step-by-step:
1. Join each row's characters.
2. Join all rows using newline separators.

Time Complexity:
O(width × height)

Backend returns:

{
  "board": "...ASCII output...",
  "total": 17
}

Frontend renders board visually.
`
  },

  {
    title: "Algorithm Complexity & Educational Insights",
    content: `
Canvas initialization → O(WH)
Dice placement → O(n)
Collision checks → O(n² worst case)
Rendering per die → O(1)
Total calculation → O(n)

Overall:
O(WH + n²)

Since WH = fixed (15 × 60), and n is small,
performance remains efficient.

Educational Concepts Demonstrated:
- 2D grid manipulation
- Spatial collision detection
- Constraint-based random placement
- ASCII rendering
- Aggregation logic
- Coordinate geometry

Conceptual Pipeline:

Initialize Canvas
        ↓
Random Dice Selection
        ↓
Collision-Free Placement
        ↓
ASCII Rendering
        ↓
Aggregate Value Calculation
        ↓
Serialized Output

DiceMath is a strong example of combining randomness, geometry, and structured rendering into a dynamic game engine.
`
  }
];
