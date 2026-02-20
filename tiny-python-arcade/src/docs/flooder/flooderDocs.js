export const flooderDocs = [
  {
    title: "Problem Overview",
    content: `
The Flooder module is a grid-based color expansion game.

Board size:
12 × 10 grid

Each tile contains a color type:
TILE_TYPES = (0,1,2,3,4,5)

The player starts at (0,0).
Each move selects a new color.
The algorithm floods all connected tiles of the same original color and converts them to the selected color.

Objective:
Make the entire board the same color within a limited number of moves.

This module demonstrates flood-fill algorithms, connected component traversal, heuristic simulation, and win-state detection.
`
  },

  {
    title: "Board Representation & Initialization",
    content: `
The board is stored as a dictionary:

board[(x,y)] = tile_type

Using a dictionary allows flexible coordinate indexing.

Board generation:

for x in range(BOARD_WIDTH):
    for y in range(BOARD_HEIGHT):
        b[(x,y)] = random.choice(TILE_TYPES)

Then smoothing step:
Adjacent tiles are occasionally copied horizontally.
This creates larger color clusters.

Time Complexity:
O(W × H)
`
  },

  {
    title: "Flood Fill Algorithm (Core Logic)",
    content: `
Function:

def flood_fill(x,y,new):

Steps:

1) Identify original color (old).
2) If new == old → return False.
3) Use stack-based DFS traversal.
4) Expand to neighboring cells with same original color.
5) Update color.

Traversal uses stack:

stack = [(x,y)]
visited = set()

Neighbors:
Left, Right, Up, Down

This is iterative Depth-First Search (DFS).

Time Complexity:
O(W × H) worst case.

Space Complexity:
O(W × H) for visited set.
`
  },

  {
    title: "Connected Component Expansion",
    content: `
Flood fill spreads only through tiles that:

board[(cx,cy)] == old

Each visited tile:
board[(cx,cy)] = new

This transforms one connected component into the new color.

Key idea:
We only expand within the same-color region.

This models graph traversal on a grid.
`
  },

  {
    title: "Win Condition Detection",
    content: `
Function:

def has_won():
    t = GAME.board[(0,0)]
    return all(board[(x,y)] == t for all tiles)

The board is complete when:
All tiles share the same color.

Time Complexity:
O(W × H)

This checks uniformity of entire grid.
`
  },

  {
    title: "Heuristic Simulation (Move Evaluation)",
    content: `
simulate_gain(tile):

1) Copy current board (deep copy).
2) Apply flood_fill using chosen tile.
3) Count number of tiles matching new color.
4) Restore original board.

copy.deepcopy ensures original state is preserved.

Score calculation:

sum(1 for each tile if color == target)

This allows hint generation by evaluating best move.

Time Complexity:
O(W × H)
`
  },

  {
    title: "Move Limitation & Strategy",
    content: `
Each game allows:
MOVES_PER_GAME = 20

The player must choose colors strategically.

Optimal strategy:
Pick color that maximizes connected component growth.

Heuristic evaluation via simulate_gain helps approximate best choice.

This models greedy optimization.
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Let:
W = board width
H = board height

Board generation → O(W × H)
Flood fill → O(W × H)
Win check → O(W × H)
Simulation → O(W × H)

Since board size is fixed (12×10),
performance remains efficient.

Space Complexity:
O(W × H)
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Grid modeling as graph
- Depth-First Search traversal
- Connected component detection
- State mutation
- Heuristic evaluation
- Game state management
- Strategy optimization

Conceptual Pipeline:

Initialize Board
        ↓
Select New Color
        ↓
Flood Fill Expansion
        ↓
Update Board State
        ↓
Check Win Condition
        ↓
Repeat Until Moves Exhausted

Flooder is a classic example of graph traversal and connected-region expansion applied in a game engine context.
`
  }
];