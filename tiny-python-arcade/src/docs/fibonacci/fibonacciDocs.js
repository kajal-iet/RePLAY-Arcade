export const fibonacciDocs = [
  {
    title: "Problem Overview",
    content: `
The Fibonacci module computes Fibonacci numbers using multiple algorithmic approaches.

Fibonacci sequence definition:

F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)

Sequence:
0, 1, 1, 2, 3, 5, 8, 13, ...

This module demonstrates:
- Recursive computation
- Memoization
- Iterative dynamic programming
- Performance optimization
- Sequence generation

It highlights the contrast between exponential and linear time complexity.
`
  },

  {
    title: "Recursive Implementation with Memoization",
    content: `
Implementation:

@lru_cache(maxsize=None)
def fib_safe(n: int):
    if n <= 1:
        return n
    return fib_safe(n - 1) + fib_safe(n - 2)

Without memoization:
Time Complexity → O(2^n)

With lru_cache:
Each value computed once.
Time Complexity → O(n)

The decorator stores previously computed values in a cache.
This eliminates repeated subproblem computation.

Space Complexity:
O(n) for recursion stack + cache.
`
  },

  {
    title: "Iterative Dynamic Programming (fib_fast)",
    content: `
Implementation:

def fib_fast(n: int):
    if n == 1:
        return 0
    if n == 2:
        return 1

    a, b = 0, 1
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b

Logic:
Only store last two values.
Update them iteratively.

Time Complexity:
O(n)

Space Complexity:
O(1)

This is optimal for single-value computation.
`
  },

  {
    title: "Sequence Builder (Timeline Generation)",
    content: `
build_timeline(n) generates entire sequence up to n.

def build_timeline(n: int):
    seq = []
    a, b = 0, 1
    seq.append(a)

    if n > 1:
        seq.append(b)

    for _ in range(3, n + 1):
        a, b = b, a + b
        seq.append(b)

    return seq

Time Complexity:
O(n)

Space Complexity:
O(n)

This is ideal for visualization or graphing.
`
  },

  {
    title: "Algorithm Complexity Comparison",
    content: `
Naive recursion:
T(n) = T(n-1) + T(n-2)
≈ O(2^n)

Memoized recursion:
O(n)

Iterative DP:
O(n)

Space Comparison:

Recursive (no memo):
O(n) stack

Memoized:
O(n) cache + stack

Iterative:
O(1)

This demonstrates dramatic performance improvement through dynamic programming.
`
  },

  {
    title: "Mathematical Insights",
    content: `
Fibonacci growth approximates:

F(n) ≈ φ^n / √5

Where:
φ (Golden Ratio) ≈ 1.618

Properties:
- Exponential growth rate
- Consecutive ratios converge to φ
- Appears in natural patterns

Example:
F(10) = 55
F(20) = 6765
F(30) = 832040

Numbers grow rapidly.
`
  },

  {
    title: "Backend API & Data Flow",
    content: `
Possible endpoints:

POST /fibonacci/value
Input:
{
  "n": 20,
  "mode": "fast" | "safe"
}

POST /fibonacci/timeline
Input:
{
  "n": 10
}

Output:
{
  "sequence": [0,1,1,2,3,5,8,13,21,34]
}

Pipeline:

Input n
      ↓
Choose algorithm
      ↓
Compute value or sequence
      ↓
Return JSON
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Recursion vs iteration
- Overlapping subproblems
- Memoization
- Dynamic programming
- Time complexity optimization
- Space-time tradeoffs

Conceptual Pipeline:

Input n
      ↓
Apply recurrence relation
      ↓
Store intermediate results
      ↓
Return final value

The Fibonacci module is a foundational example for understanding dynamic programming and algorithmic optimization strategies.
`
  }
];