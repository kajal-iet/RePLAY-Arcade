export const bitmapDocs = [
  {
    title: "Problem Overview",
    content: `
The Bitmap module generates visual patterns using a two-dimensional grid (matrix). Each cell in the matrix represents a pixel that can either be filled or empty.

Formally:
M = r × c matrix
Each cell M[i][j] ∈ {0, 1}

0 → empty pixel
1 → filled pixel

The system converts mathematical or logical rules into discrete pixel representations. The backend constructs the matrix, applies pattern rules, and optionally renders the result as ASCII art or an image.

This module demonstrates matrix traversal, coordinate mapping, discrete geometry, and rendering pipelines.
`
  },

  {
    title: "Matrix Construction Algorithm",
    content: `
Step 1 — Define dimensions:
rows = 20
cols = 40

Step 2 — Initialize matrix:
matrix = [[0 for _ in range(cols)] for _ in range(rows)]

Time Complexity: O(r × c)
Space Complexity: O(r × c)

Step 3 — Apply pattern rule.

Example (Circle Equation):
(x - center_x)^2 + (y - center_y)^2 ≤ radius^2

Translated into grid logic:

for i in range(rows):
    for j in range(cols):
        if (j - center_x)**2 + (i - center_y)**2 <= radius**2:
            matrix[i][j] = 1

This converts continuous geometry into discrete grid approximation.
`
  },

  {
    title: "Coordinate Mapping & Rendering",
    content: `
Matrix indexing:
matrix[row][col]

Graphical coordinates:
(x, y)

Mapping:
row → y
col → x

Rendering Approaches:

1) ASCII Rendering:
Convert matrix into string using characters like "██" for filled pixels.

2) Image Rendering (Pillow):
Each matrix cell maps to a rectangle block in an image canvas.

Example logic:
draw.rectangle([x1, y1, x2, y2], fill="black")

Time Complexity:
Rendering loop → O(r × c)

This module bridges mathematical modeling and visual representation.
`
  },

  {
    title: "Algorithm Complexity & Edge Cases",
    content: `
Total operations:
Matrix creation → O(r × c)
Pattern fill → O(r × c)
Rendering → O(r × c)

Overall complexity: O(r × c)

Edge Cases:
- rows or cols < 1
- Extremely large grid sizes
- Invalid pattern type
- Memory constraints

Conceptual Pipeline:

Pattern Rule
     ↓
Matrix Generation
     ↓
Pixel Mapping
     ↓
Serialized Output

This module demonstrates discrete geometry, rasterization logic, and backend-driven visualization.
`
  }
];
