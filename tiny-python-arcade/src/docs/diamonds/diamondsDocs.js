export const diamondsDocs = [
  {
    title: "Problem Overview",
    content: `
The Diamond module generates ASCII-art diamond patterns in two styles:

1) Outline Diamond
2) Filled Diamond

Additionally, it supports rotating the generated diamond using a matrix-transpose technique.

Let:
size = height of one half of the diamond

The diamond consists of:
- Upper half (expanding pattern)
- Lower half (contracting pattern)

This module demonstrates symmetry construction, string padding, geometric mirroring, and 2D rotation algorithms.
`
  },

  {
    title: "Outline Diamond Generation Algorithm",
    content: `
Outline diamond uses forward slashes (/) and backward slashes (\\) to create borders.

Implementation:

def outline(size):
    lines = []
    for i in range(size):
        lines.append(
            ' ' * (size - i - 1) +
            '/' +
            ' ' * (i * 2) +
            '\\'
        )

    for i in range(size):
        lines.append(
            ' ' * i +
            '\\' +
            ' ' * ((size - i - 1) * 2) +
            '/'
        )

    return lines

Logic Explanation:

Upper half:
- Left padding decreases.
- Interior spacing increases.

Lower half:
- Left padding increases.
- Interior spacing decreases.

Time Complexity:
O(size²) due to repeated string construction.
`
  },

  {
    title: "Filled Diamond Generation Algorithm",
    content: `
Filled diamond replaces interior spaces with repeated slash characters.

Implementation:

def filled(size):
    lines = []
    for i in range(size):
        lines.append(
            ' ' * (size - i - 1) +
            '/' * (i + 1) +
            '\\' * (i + 1)
        )

    for i in range(size):
        lines.append(
            ' ' * i +
            '\\' * (size - i) +
            '/' * (size - i)
        )

    return lines

Logic Differences:

Instead of single boundary characters,
the filled version multiplies slash characters:

'/' * (i + 1)
'\\' * (i + 1)

This creates a solid triangular expansion.

Demonstrates string multiplication and pattern scaling.
`
  },

  {
    title: "Rotation Algorithm (Matrix Transpose)",
    content: `
The rotate function performs a 90-degree clockwise rotation.

Implementation:

def rotate(lines):
    max_len = max(len(line) for line in lines)
    padded = [line.ljust(max_len) for line in lines]
    return [''.join(row[::-1]) for row in zip(*padded)]

Step-by-step Explanation:

1. Determine maximum line length.
2. Pad shorter lines to equal width.
3. Use zip(*padded) to transpose rows into columns.
4. Reverse each row to complete rotation.

Key Operation:
zip(*matrix) → Matrix Transpose

Reversing each row:
row[::-1]

Time Complexity:
O(n²) where n = number of characters.

This demonstrates 2D transformation using transpose + reverse.
`
  },

  {
    title: "Symmetry & Geometric Properties",
    content: `
Diamond symmetry properties:

- Vertical symmetry across center axis
- Upper and lower halves mirror each other
- Rotation preserves geometric balance

Upper half width increases by 2 characters per row.
Lower half decreases by 2 characters per row.

This is controlled by:
Interior spacing → i * 2
Reverse spacing → (size - i - 1) * 2

This demonstrates geometric scaling and mirrored iteration.
`
  },

  {
    title: "Backend API & Data Flow",
    content: `
Possible API Structure:

POST /diamond/generate

Input:
{
  "size": 5,
  "type": "outline" | "filled",
  "rotate": true | false
}

Output:
{
  "pattern": [list of strings]
}

Backend Pipeline:

Input size
      ↓
Select pattern type
      ↓
Generate upper half
      ↓
Generate lower half
      ↓
Optional rotation
      ↓
Return formatted lines

Frontend renders lines sequentially.
`
  },

  {
    title: "Algorithm Complexity & Educational Insights",
    content: `
Outline generation → O(size²)
Filled generation → O(size²)
Rotation → O(n²)

Overall complexity dominated by pattern size.

Educational Concepts Demonstrated:
- Nested iteration
- Mirrored pattern logic
- String multiplication
- Matrix transpose
- Spatial transformation
- Padding for rectangular normalization

Conceptual Pipeline:

Size Parameter
      ↓
Upper Half Construction
      ↓
Lower Half Mirroring
      ↓
Optional Matrix Rotation
      ↓
ASCII Output

The Diamond module is an excellent demonstration of symmetry, geometric modeling, and 2D string transformation algorithms.
`
  }
];
