export const bitmapDocs = [
  {
    title: "Problem Overview",
    content: `
The Bitmap game/module generates a visual pattern using text-based or pixel-based rendering logic. Conceptually, it transforms a binary matrix (0/1 grid) or character grid into a visual representation. The backend is responsible for constructing a 2D structure and optionally converting it into an image using rendering utilities (e.g., Pillow).

At its core, the Bitmap module demonstrates:
2D grid manipulation
Matrix traversal algorithms
Pattern generation logic
Coordinate mapping
Rendering pipeline abstraction
Backend-to-frontend data transfer

This module is algorithmically interesting because it bridges discrete mathematical structures (matrices) with visual output generation.


#     Mathematical Model of a Bitmap
A bitmap can be formally defined as:

Let:

M be a matrix of size r × c

Each cell M[i][j] ∈ {0,1}

Where:

0 → empty pixel

1 → filled pixel

Visually:

0 1 0
1 1 1
0 1 0


Represents a plus shape.

Thus, the bitmap is essentially a binary matrix representation of a shape.
`
  },
  {
    title: "Core Algorithm Design",
    content: `
Objective:
Generate a 2D pattern using deterministic or rule-based logic.
Step 1 — Define Dimensions
rows = 20
cols = 40
This determines spatial resolution.

Step 2 — Initialize Matrix
matrix = [[0 for _ in range(cols)] for _ in range(rows)]

Time Complexity: O(r × c)
Space Complexity: O(r × c)

Step 3 — Apply Pattern Rule
Example pattern rule (circle equation):
For each coordinate (i, j):
(x - center_x)^2 + (y - center_y)^2 <= radius^2

Translated:
center_x = cols // 2
center_y = rows // 2
radius = 8

for i in range(rows):
    for j in range(cols):
        if (j - center_x)**2 + (i - center_y)**2 <= radius**2:
            matrix[i][j] = 1

This converts geometric equations into discrete pixel activation
`
  },
  {
    title: "Coordinate Mapping",
    content: `
Important conceptual shift:
Matrix indexing:
matrix[row][col]

But graphical coordinates: (x, y)

Mapping:
Matrix	Cartesian
row	y
col	x

So: matrix[y][x]
Understanding this prevents inverted patterns.

#    Rendering Strategy
There are two major approaches:

A. Text-Based Rendering

Convert matrix into string:
def matrix_to_string(matrix):
    output = ""
    for row in matrix:
        line = ""
        for cell in row:
            line += "██" if cell == 1 else "  "
        output += line + "\n"
    return output

This renders ASCII art.

B. Image Rendering (Using Pillow)

If using Pillow: from PIL import Image, ImageDraw

def render_bitmap(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    scale = 10

    img = Image.new("RGB", (cols*scale, rows*scale), "white")
    draw = ImageDraw.Draw(img)

    for i in range(rows):
        for j in range(cols):
            if matrix[i][j] == 1:
                draw.rectangle(
                    [j*scale, i*scale, (j+1)*scale, (i+1)*scale],
                    fill="black"
                )

    return img


This maps matrix cells to pixel blocks.
`
  },
  {
    title: "Algorithmic Patterns Possible",
    content: `
Bitmap module supports multiple pattern categories:

1. Geometric Patterns
Circle
Rectangle
Triangle
Diamond

2. Mathematical Functions
Sine wave
Parabola
Mandelbrot approximation (advanced)

3. Logical Rules
Checkerboard
Border frame
Diagonal cross

#      Computational Complexity
Let:
r = rows
c = cols

Matrix initialization: O(rc)
Pattern fill: O(rc)
Rendering loop: O(rc)

Total: O(rc)
Since resolution is typically small (20x40), performance is negligible.
`
  },

  {
    title: "Backend Architecture",
    content: `
    API structure:
POST /bitmap/generate
Input:
{"pattern": "circle",
  "rows": 20,
  "cols": 40}

Output:
ASCII string OR
Base64 encoded image

The backend handles:
Pattern selection
Matrix generation
Rendering conversion
Serialization


#        Data Serialization
If returning image:

import base64
from io import BytesIO
buffer = BytesIO()
img.save(buffer, format="PNG")
encoded = base64.b64encode(buffer.getvalue()).decode()

Frontend receives Base64 string and renders:
<img src="data:image/png;base64,..." />
  

#    Conceptual Summary
Bitmap module represents a computational pipeline:
Mathematical Rule
        ↓
Matrix Construction
        ↓
Pixel Mapping
        ↓
Rendering
        ↓
Serialized Response

It transforms pure algorithmic logic into visual output, making it an excellent demonstration of:
Algorithmic thinking
Mathematical modeling
Data-to-visual transformation
Backend computation design
    `
  }
];
