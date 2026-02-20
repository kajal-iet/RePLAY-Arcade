export const etchingDocs = [
  {
    title: "Problem Overview",
    content: `
The Etching Drawer module simulates a grid-based drawing system where movement commands (W, A, S, D) create connected line segments.

Each movement:
W → Up
S → Down
A → Left
D → Right

The system tracks:
- Current cursor position
- Connections between cells
- Directional relationships

Instead of storing characters directly, each grid cell stores a set of directions that pass through it. Later, these direction sets are classified into appropriate Unicode box-drawing characters.

This module demonstrates sparse grid modeling, bidirectional edge tracking, character classification logic, and ASCII-to-image rendering.
`
  },

  {
    title: "Sparse Canvas Data Structure",
    content: `
The canvas is represented as a dictionary:

canvas = {
  (x, y): set_of_directions
}

Example:
canvas[(3,5)] = {'W', 'S'}

This means:
A vertical line passes through (3,5).

Why dictionary instead of 2D array?

- Only visited cells are stored.
- Memory efficient.
- Avoids initializing full 40×20 grid.

Time Complexity:
Insert / Lookup → O(1)
`
  },

  {
    title: "Movement & Edge Recording Algorithm",
    content: `
Core logic:

for m in moves:
    canvas.setdefault((cx,cy), set())

    if m == 'W':
        canvas[(cx,cy)].add('W')
        cy -= 1
        canvas.setdefault((cx,cy), set()).add('S')

Key Idea:
When moving from one cell to another,
both cells record opposite directions.

Example:
Moving Up:
Current cell → add 'W'
New cell → add 'S'

This ensures bidirectional edge consistency.

Time Complexity:
O(n) where n = number of moves.
`
  },

  {
    title: "Direction Classification Logic",
    content: `
Each cell's direction set is mapped to a Unicode box character.

Example mappings:

{'W','S'} → vertical line
{'A','D'} → horizontal line
{'S','D'} → corner
{'W','A','S','D'} → cross intersection

Function:

def classify(d):
    if d.issubset({'W','S'}): return UP_DOWN_CHAR
    if d.issubset({'A','D'}): return LEFT_RIGHT_CHAR
    ...

This is rule-based pattern classification.

Time Complexity:
O(1) per cell.

This transforms graph edge data into visual symbols.
`
  },

  {
    title: "Canvas Rendering to ASCII",
    content: `
The canvas is rendered row-by-row:

for y in range(CANVAS_HEIGHT):
    for x in range(CANVAS_WIDTH):
        if (x,y) == (cx,cy):
            out += "#"
        else:
            out += classify(canvas.get((x,y)))

The cursor position is marked with "#".

Time Complexity:
O(width × height)

Even though the internal structure is sparse,
rendering expands it into full grid representation.
`
  },

  {
    title: "Image Rendering with Pillow",
    content: `
The module also converts the ASCII canvas into an image.

img = Image.new('RGB', (CANVAS_WIDTH*20, CANVAS_HEIGHT*20))

Each cell is drawn using:

draw.text((x*20, y*20), classify(dirs))

Scaling factor (20) increases resolution.

Final image is written to memory buffer:
buf = io.BytesIO()
img.save(buf, format="PNG")

This demonstrates:
- Text-to-image rendering
- Pixel coordinate scaling
- In-memory binary output generation
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Let:
n = number of moves
W = canvas width
H = canvas height

Build phase → O(n)
Classification → O(W × H)
Image render → O(W × H)

Total:
O(n + WH)

Since WH is fixed (40×20),
complexity mainly depends on number of moves.

Memory usage:
O(n) for storing visited cells.
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Graph modeling via adjacency directions
- Bidirectional edge consistency
- Sparse data structures
- Unicode box-drawing classification
- Grid traversal
- ASCII visualization
- Image generation from structured data

Conceptual Pipeline:

Input Moves
      ↓
Cursor Movement
      ↓
Bidirectional Edge Recording
      ↓
Direction Set Classification
      ↓
ASCII Rendering
      ↓
Optional Image Rendering

Etching Drawer is a strong example of how graph theory and directional state modeling can be translated into visual output systems.
`
  }
];