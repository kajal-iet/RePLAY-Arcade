export const matrixDocs = [
  {
    title: "Problem Overview",
    content: `
The Matrix module simulates the iconic “digital rain” effect inspired by the Matrix movie.

Characters fall vertically down the screen in independent streams.
Each column behaves like an independent animated entity.

The simulation involves:

- Random character generation
- Independent column speeds
- Stream resets
- Continuous frame updates

This module demonstrates column-based animation, stochastic simulation, and frame-driven rendering.
`
  },

  {
    title: "Grid & Column Modeling",
    content: `
The matrix effect is rendered on a fixed grid:

WIDTH  → number of columns
HEIGHT → number of rows

Instead of tracking each character individually,
we track per-column state.

For each column:
- Current head position (y)
- Stream length
- Speed (optional)
- Active/inactive state

This makes the simulation efficient and scalable.

Time Complexity per frame:
O(WIDTH)
`
  },

  {
    title: "Stream Initialization Logic",
    content: `
Each column is initialized with:

- Random starting position
- Random stream length
- Random activation timing

Example logic:

columns = [
  {
    "y": random_start,
    "length": random_length,
    "speed": random_speed
  }
  for each column
]

This ensures visual randomness and natural distribution.
`
  },

  {
    title: "Character Generation",
    content: `
Each visible character is randomly selected from a character set.

Example:

CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

random.choice(CHARS)

This produces continuous random glyph streams.

Time Complexity:
O(1) per character.
`
  },

  {
    title: "Frame Update Algorithm",
    content: `
Each frame:

For each column:
    1) Increment head position.
    2) Render characters behind the head up to stream length.
    3) Clear characters beyond trail.
    4) Reset column if it reaches bottom.

Pseudo flow:

for col in columns:
    col["y"] += speed
    if col["y"] >= HEIGHT:
        reset column

This models vertical motion.
`
  },

  {
    title: "Stream Reset Logic",
    content: `
When a column reaches bottom:

- Reset y position to top
- Assign new random length
- Optionally randomize speed

This creates continuous looping streams.

Ensures infinite animation.
`
  },

  {
    title: "Rendering Pipeline",
    content: `
Rendering typically involves:

1) Clearing previous frame.
2) Drawing characters at each column's active positions.
3) Applying fading effect (optional).
4) Printing full grid.

If implemented in ASCII:

return "\\n".join("".join(row) for row in grid)

Time Complexity:
O(WIDTH × HEIGHT)
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Let:
W = WIDTH
H = HEIGHT

Per frame update:
O(W)

Full grid render:
O(W × H)

Memory:
O(W × H)

Performance depends on frame frequency.
Efficient enough for terminal animation.
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Column-based animation modeling
- Independent state machines per column
- Random character generation
- Continuous frame simulation
- Reset-based looping
- Rendering pipelines

Conceptual Pipeline:

Initialize Columns
        ↓
Frame Loop
        ↓
Update Head Positions
        ↓
Render Stream Trails
        ↓
Reset Completed Streams
        ↓
Repeat

The Matrix module demonstrates how simple vertical motion rules combined with randomness can produce complex, visually dynamic animation.
`
  }
];