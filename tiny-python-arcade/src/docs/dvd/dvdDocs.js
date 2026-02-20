export const dvdDocs = [
  {
    title: "Problem Overview",
    content: `
The DVD module simulates the classic bouncing DVD logo animation.

Each logo moves diagonally inside a rectangular boundary and reverses direction when hitting edges. If it hits a corner, a special event is triggered.

Let:
x, y = current position
dx, dy = velocity direction (-1 or +1)
speed = movement multiplier
width, height = canvas bounds
size = logo dimension

This module demonstrates 2D motion simulation, boundary collision detection, velocity inversion, and event-based state changes.
`
  },

  {
    title: "Logo Initialization Algorithm",
    content: `
Logos are initialized with randomized position, direction, and color.

def init_logos(num, width, height, size):
    logos = []
    for _ in range(num):
        logos.append({
            "x": random.randint(0, width - size),
            "y": random.randint(0, height - size),
            "dx": random.choice([-1, 1]),
            "dy": random.choice([-1, 1]),
            "color": random_color()
        })
    return logos

Properties:
- Position constrained within bounds
- Direction randomly diagonal
- Color randomly generated RGB

Time Complexity:
O(num)
`
  },

  {
    title: "Random Color Generation",
    content: `
Each logo color is an RGB list:

def random_color():
    return [random.randint(80, 255) for _ in range(3)]

Range 80–255 ensures:
- Avoid very dark colors
- Maintain visible brightness

Time Complexity:
O(1)

This demonstrates controlled random value generation.
`
  },

  {
    title: "Motion Update Algorithm",
    content: `
Each frame updates position:

logo["x"] += logo["dx"] * speed
logo["y"] += logo["dy"] * speed

This models uniform linear motion.

Velocity is discrete:
dx ∈ {-1, +1}
dy ∈ {-1, +1}

Speed scales movement per step.

Time Complexity per frame:
O(number_of_logos)
`
  },

  {
    title: "Boundary Collision Detection",
    content: `
Horizontal collision:

if logo["x"] <= 0 or logo["x"] + size >= width:
    logo["dx"] *= -1

Vertical collision:

if logo["y"] <= 0 or logo["y"] + size >= height:
    logo["dy"] *= -1

Velocity inversion:
dx = -dx
dy = -dy

This simulates elastic collision with walls.

No energy loss is modeled.
Motion remains constant magnitude.
`
  },

  {
    title: "Corner Detection & Event Trigger",
    content: `
A corner hit occurs when both axes collide simultaneously:

if hit_x and hit_y:
    corner_hit = True

This detects perfect alignment with a boundary corner.

Corner hits are rare events because:
- Motion is discrete
- Alignment must occur exactly on same frame

This models event detection in simulation systems.
`
  },

  {
    title: "Dynamic Color Change on Collision",
    content: `
If random_colors is enabled:

if random_colors and (hit_x or hit_y):
    logo["color"] = random_color()

This introduces dynamic state mutation upon collision.

Demonstrates:
- Conditional behavior triggers
- Visual state updates
- Reactive system design
`
  },

  {
    title: "Step Function Data Flow",
    content: `
Function signature:

step(logos, width, height, size, speed, random_colors)

Pipeline:

Update position
      ↓
Check horizontal boundary
      ↓
Check vertical boundary
      ↓
Invert velocity if needed
      ↓
Detect corner event
      ↓
Optional color change
      ↓
Return updated state

Return:
(logos, corner_hit)

Time Complexity:
O(n) per frame
`
  },

  {
    title: "Algorithm Complexity & Educational Insights",
    content: `
Per frame complexity:
O(n) where n = number of logos

Memory:
O(n)

Educational Concepts Demonstrated:

- 2D coordinate systems
- Linear motion simulation
- Boundary collision detection
- Velocity vector inversion
- Event detection logic
- State mutation in iterative systems

Conceptual Pipeline:

Initial State
      ↓
Frame Update
      ↓
Collision Detection
      ↓
Velocity Inversion
      ↓
Optional State Mutation
      ↓
Render

The DVD module is a clean example of physics-inspired simulation and real-time state evolution.
`
  }
];
