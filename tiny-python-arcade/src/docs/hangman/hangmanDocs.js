export const hourglassDocs = [
  {
    title: "Problem Overview",
    content: `
The Hourglass module simulates falling sand particles inside a glass-shaped boundary.

Grid dimensions:
WIDTH = 30
HEIGHT = 24

Each cell may contain:
SAND ("●")
EMPTY (" ")
WALL ("#")

The simulation:
- Creates hourglass walls procedurally.
- Fills the upper chamber with sand.
- Applies gravity rules per frame.
- Allows sand to fall vertically or diagonally.
- Continues until no particles move.

This module demonstrates procedural geometry, gravity-based cellular automata, and particle simulation.
`
  },

  {
    title: "Procedural Glass Boundary Generation",
    content: `
glass_bounds(y):

Computes left and right boundary for each row.

Logic:
- Middle row defines the neck.
- Spread increases as we move away from the center.

spread = (mid - y) // 2 if y < mid else (y - mid) // 2

The glass narrows near the center and widens toward top and bottom.

This dynamically creates a symmetric hourglass shape.

Time Complexity:
O(1) per row.
`
  },

  {
    title: "Glass Containment Check",
    content: `
inside_glass(x, y):

Returns True if x is strictly between left and right bounds.

This ensures:
- Sand cannot pass through walls.
- All movement respects hourglass geometry.

Time Complexity:
O(1)
`
  },

  {
    title: "Initial Grid Creation",
    content: `
create_hourglass():

1) Initialize empty grid.
2) Draw wall boundaries using glass_bounds.
3) Fill upper half chamber with sand.

Upper chamber fill:

for y in range(3, HEIGHT // 2 - 1):
    fill between left and right bounds.

Time Complexity:
O(WIDTH × HEIGHT)

This creates initial state for simulation.
`
  },

  {
    title: "Gravity Simulation Algorithm",
    content: `
step(grid):

Iterates from bottom to top:

for y in range(HEIGHT - 2, -1, -1):

Why bottom-up?
Prevents sand from moving twice in one step.

For each sand particle:
1) Try moving down.
2) If blocked, try diagonal left-down.
3) If blocked, try diagonal right-down.

Movement allowed only if:
- Target cell is EMPTY.
- Target cell is inside glass.

Time Complexity per frame:
O(WIDTH × HEIGHT)
`
  },

  {
    title: "Randomized Horizontal Order",
    content: `
Before processing each row:

xs = list(range(1, WIDTH - 1))
random.shuffle(xs)

This prevents directional bias.

Without shuffle:
Sand would consistently favor one diagonal side.

Randomization produces more natural flow.

This introduces stochastic behavior.
`
  },

  {
    title: "Particle Movement Rules",
    content: `
Priority Order:

1) Vertical fall
2) Diagonal left
3) Diagonal right

Movement example:

If grid[y+1][x] == EMPTY:
    Move straight down.

Else:
    Check diagonals.

This models simplified gravity with lateral flow.

Similar to cellular automata sand simulation.
`
  },

  {
    title: "Termination Condition",
    content: `
step() returns:

moved → Boolean

If no particle moves:
Simulation can stop.

This prevents infinite looping once equilibrium is reached.

Models physical rest state.
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Let:
W = WIDTH
H = HEIGHT

Grid creation → O(W × H)
Each simulation step → O(W × H)

Total runtime depends on:
Number of steps until equilibrium.

Worst case:
O(k × W × H)
Where k = number of frames.

Memory:
O(W × H)
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Procedural geometry generation
- Cellular automata rules
- Gravity simulation
- Collision constraints
- Randomized iteration for fairness
- Discrete time-step simulation
- Equilibrium detection

Conceptual Pipeline:

Generate Glass Shape
        ↓
Fill Upper Chamber
        ↓
Simulation Loop
        ↓
Apply Gravity Rules
        ↓
Move Sand Particles
        ↓
Repeat Until Stable

The Hourglass module models particle-based physics using rule-based cellular updates within a procedurally generated constraint boundary.
`
  }
];