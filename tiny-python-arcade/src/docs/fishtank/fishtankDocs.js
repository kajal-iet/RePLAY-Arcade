export const fishtankDocs = [
  {
    title: "Problem Overview",
    content: `
The Fishtank module simulates a dynamic underwater ecosystem inside a fixed grid.

Canvas:
WIDTH = 70
HEIGHT = 25

Entities:
- Fish (horizontal swimmers)
- Crabs (bottom walkers with animation frames)
- Kelp (waving vertical plants)
- Bubbles (rising particles)
- Sand (static bottom layer)

The simulation runs in discrete time steps (frames).
Each frame updates entity positions and then renders the grid.

This module demonstrates multi-entity simulation, frame-based animation, collision handling, and layered ASCII rendering.
`
  },

  {
    title: "Game State Architecture",
    content: `
The Tank class stores all simulation entities:

class Tank:
    fishes
    crabs
    kelps
    bubbles
    bubblers
    frame

GAME = Tank()

All objects are stored in lists of dictionaries.
Each entity tracks its own position and behavior attributes.

This models a centralized simulation state container.
`
  },

  {
    title: "Entity Spawning Algorithms",
    content: `
Fish Spawner:
- Random x and y position
- Random shape
- Random horizontal direction (-1 or +1)

Crab Spawner:
- Positioned near bottom
- Has animation frame state
- Random walking direction

Kelp Spawner:
- Random height (5–12)
- Each segment randomly "(" or ")"

Bubble generators (fixed x positions):
[10, 30, 55]

Spawning is randomized but constrained within bounds.

Time Complexity:
O(1) per entity creation.
`
  },

  {
    title: "Frame Update Simulation Logic",
    content: `
update() performs one simulation step.

1) Fish Movement:
   x += dir
   Reverse direction at horizontal boundaries.

2) Crab Movement:
   Similar to fish.
   Frame toggles:
   frame = (frame + 1) % 2

3) Kelp Waving:
   Randomly flips segment "(" ↔ ")"
   Introduces organic oscillation.

4) Bubble Generation:
   Random chance per bubbler.
   Adds bubble at bottom.

5) Bubble Rising:
   y -= 1 each frame.
   Remove bubbles when y <= 0.

Each update cycle:
O(total_entities)

This models discrete-time simulation.
`
  },

  {
    title: "Boundary Collision Handling",
    content: `
Fish & Crabs bounce at horizontal edges:

if x <= 0 or x >= WIDTH - object_size:
    dir *= -1

This simulates elastic collision against tank walls.

Bubbles:
Removed once they leave the top boundary.

Boundary logic ensures no entity exceeds grid limits.
`
  },

  {
    title: "Layered Rendering Pipeline",
    content: `
Rendering builds a 2D grid:

grid = [[" " for _ in range(WIDTH)] for _ in range(HEIGHT)]

Render order:
1) Kelp
2) Bubbles
3) Fish
4) Crabs
5) Sand

Layer order matters:
Later renders overwrite earlier ones.

This models painter's algorithm rendering.

Finally:
"\n".join rows → ASCII frame output.
`
  },

  {
    title: "Animation Frames & Sprite Logic",
    content: `
Crabs use two-frame animation:

CRAB_FRAMES = ["(\\_/)", "=(\\_/)"]

Frame toggles every update:
(frame + 1) % 2

This creates walking animation effect.

Fish shapes vary:
FISH_TYPES = ["><>", "<><", ">||>", ...]

Entities are rendered by iterating over characters in shape string.

Time Complexity per render:
O(WIDTH × HEIGHT + entity_count)
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Let:
F = number of fish
C = number of crabs
K = number of kelps
B = number of bubbles

Update complexity:
O(F + C + K + B)

Render complexity:
O(WIDTH × HEIGHT + entity_count)

Since WIDTH and HEIGHT are fixed,
complexity mainly depends on entity counts.

Memory:
O(entity_count)
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Discrete-time simulation
- Multi-entity state management
- Directional motion
- Boundary collision detection
- Particle systems (bubbles)
- Frame-based animation
- Layered rendering
- Procedural environment generation

Conceptual Pipeline:

Spawn Entities
       ↓
Frame Update Loop
       ↓
Position Updates
       ↓
Boundary Handling
       ↓
Animation Frame Toggle
       ↓
Grid Rendering
       ↓
ASCII Output

The Fishtank module functions as a lightweight animation engine using ASCII rendering and time-stepped state evolution.
`
  }
];