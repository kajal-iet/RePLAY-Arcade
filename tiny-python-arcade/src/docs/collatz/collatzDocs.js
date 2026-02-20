export const collatzDocs = [
  {
    title: "Problem Overview",
    content: `
The Collatz module generates the Collatz sequence for a given positive integer n.

The Collatz Conjecture states:

For any positive integer n:
- If n is even → divide it by 2
- If n is odd → multiply by 3 and add 1
Repeat until n becomes 1.

Formally:
If n % 2 == 0 → n = n / 2
If n % 2 == 1 → n = 3n + 1

The sequence always eventually reaches 1 (for all tested values), though this has never been formally proven for all positive integers.

This module demonstrates iterative computation, parity checking, and dynamic sequence generation.
`
  },

  {
    title: "Collatz Sequence Algorithm",
    content: `
Implementation:

def collatz_sequence(n: int):
    seq = [n]
    while n != 1:
        if n % 2 == 0:
            n //= 2
        else:
            n = 3 * n + 1
        seq.append(n)
    return seq

Step-by-step logic:

1. Initialize sequence list with starting value.
2. While n is not equal to 1:
   - Check parity using modulo.
   - Apply transformation rule.
   - Append new value to sequence.
3. Return full sequence list.

This is an iterative loop-based implementation.
`
  },

  {
    title: "Parity Logic & Mathematical Behavior",
    content: `
Parity check:

n % 2 == 0 → Even
n % 2 == 1 → Odd

Even transformation:
n = n / 2

Odd transformation:
n = 3n + 1

Example:

Start: 6
6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1

Sequence:
[6, 3, 10, 5, 16, 8, 4, 2, 1]

The sequence fluctuates unpredictably before converging to 1.
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Let k = number of steps until reaching 1.

Time Complexity:
O(k)

Space Complexity:
O(k) (sequence storage)

Worst-case behavior:
Some numbers grow very large before decreasing.
Example:
Starting at 27 produces a sequence of 112 steps.

The exact upper bound for k relative to n is unknown.
This relates to the unsolved Collatz Conjecture in mathematics.
`
  },

  {
    title: "Mathematical Insights",
    content: `
The Collatz sequence demonstrates:

- Non-linear transformation
- Conditional branching
- Chaotic growth patterns
- Eventual convergence behavior

Although the rule is simple, the resulting behavior appears chaotic.

Key Observations:
- Odd numbers increase rapidly.
- Even numbers decrease steadily.
- Powers of 2 collapse directly to 1.

Example:
16 → 8 → 4 → 2 → 1

This makes powers of two terminal collapse chains.
`
  },

  {
    title: "Backend API & Data Flow",
    content: `
Endpoint:
POST /collatz/generate

Input:
{
  "n": 27
}

Output:
{
  "sequence": [27, 82, 41, 124, ... , 1]
}

Backend Pipeline:

Input n
     ↓
Initialize sequence
     ↓
Iterative transformation loop
     ↓
Append each value
     ↓
Return sequence as JSON

Frontend can visualize sequence numerically or graphically.
`
  },

  {
    title: "Educational & Computational Significance",
    content: `
All operations per iteration are constant time:
Modulo → O(1)
Multiplication → O(1)
Division → O(1)

Total complexity depends entirely on sequence length.

Educational Concepts Demonstrated:
- Iterative loops
- Conditional branching
- Parity classification
- Dynamic list building
- Open mathematical conjectures

Conceptual Pipeline:

Input Number
      ↓
Parity Check
      ↓
Apply Rule
      ↓
Append to Sequence
      ↓
Repeat Until 1

The Collatz module demonstrates how extremely simple rules can generate complex and unpredictable behavior, highlighting the intersection of algorithm design and number theory.
`
  }
];
