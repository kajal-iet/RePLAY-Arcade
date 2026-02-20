export const connect4Docs = [
  {
    title: "Problem Overview",
    content: `
Connect 4 is a two-player grid-based strategy game played on a 6×7 board. Players take turns dropping discs into one of the 7 columns. The disc occupies the lowest available cell in that column due to gravity.

Let:
R = number of rows (6)
C = number of columns (7)
Board = 2D matrix of size R × C

Each cell contains:
0 → empty
1 → Player 1
2 → Player 2

Objective:
A player wins by forming a sequence of 4 consecutive discs in:
- Horizontal direction
- Vertical direction
- Diagonal (both slopes)

This module demonstrates matrix manipulation, directional scanning algorithms, and win-state detection.
`
  },

  {
    title: "Board Representation & Initialization",
    content: `
The board is represented as a 2D list:

board = [[0 for _ in range(7)] for _ in range(6)]

Time Complexity:
Initialization → O(R × C)

Each row represents horizontal alignment.
Each column represents vertical stacking.

Board indexing:
board[row][col]

Row 0 represents the top.
Row 5 represents the bottom.
`
  },

  {
    title: "Disc Drop (Gravity Simulation)",
    content: `
When a player selects a column, the disc must occupy the lowest available slot.

Algorithm:
1. Iterate from bottom row upward.
2. Find first empty cell in selected column.
3. Assign current player value.

Example:

def drop_disc(board, col, player):
    for row in reversed(range(6)):
        if board[row][col] == 0:
            board[row][col] = player
            return row
    return -1  # Column full

Time Complexity:
O(R)

This simulates gravity behavior in constant column scan time.
`
  },

  {
    title: "Win Detection Algorithm (Core Logic)",
    content: `
After each move, the system checks for 4 consecutive pieces.

Directions checked:

1) Horizontal →
2) Vertical ↓
3) Diagonal ↘
4) Diagonal ↗

General scanning approach:

For each cell:
    If cell belongs to current player:
        Check next 3 cells in each direction.

Example horizontal check:

for row in range(6):
    for col in range(4):
        if board[row][col] == player and
           board[row][col+1] == player and
           board[row][col+2] == player and
           board[row][col+3] == player:
            return True

Time Complexity:
Worst case O(R × C)

Since board is fixed size (6×7), this is effectively constant time.
`
  },

  {
    title: "Diagonal Detection Logic",
    content: `
Positive slope diagonal (↘):

for row in range(3):
    for col in range(4):
        if board[row][col] == player and
           board[row+1][col+1] == player and
           board[row+2][col+2] == player and
           board[row+3][col+3] == player:
            return True

Negative slope diagonal (↗):

for row in range(3, 6):
    for col in range(4):
        if board[row][col] == player and
           board[row-1][col+1] == player and
           board[row-2][col+2] == player and
           board[row-3][col+3] == player:
            return True

Diagonal detection requires careful boundary control to avoid index errors.
`
  },

  {
    title: "Game State Management & API Design",
    content: `
Endpoints:

POST /connect4/start
Initializes empty board and sets first player.

POST /connect4/move
Input:
{
  "column": 3
}

Output:
{
  "board": [...],
  "current_player": 2,
  "status": "continue" | "win" | "draw"
}

Backend maintains:
- Board matrix
- Current player
- Game status

State is stored in memory per session.
`
  },

  {
    title: "Algorithm Complexity & Educational Insights",
    content: `
Drop disc → O(R)
Win detection → O(R × C)
Board initialization → O(R × C)

Since R=6 and C=7, complexity is constant in practice.

Educational Concepts Demonstrated:
- 2D matrix representation
- Directional scanning algorithms
- Boundary validation
- State transitions
- Turn-based game engine design

Conceptual Pipeline:

Player Move
      ↓
Gravity Simulation
      ↓
Board Update
      ↓
Directional Win Scan
      ↓
Game State Update
      ↓
JSON Response

Connect 4 is a strong example of grid-based algorithm design and spatial pattern detection.
`
  }
];
