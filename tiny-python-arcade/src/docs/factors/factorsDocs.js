export const factorsDocs = [
  {
    title: "Problem Overview",
    content: `
The Factors module computes all positive factors of a given integer n and determines whether the number is prime.

A factor of n is any integer i such that:
n % i == 0

For example:
Factors of 12 → [1, 2, 3, 4, 6, 12]

Additionally:
A number is prime if it has exactly two factors:
1 and itself.

This module demonstrates divisor search optimization using square root bounding, divisor pairing, and primality detection.
`
  },

  {
    title: "Square Root Optimization",
    content: `
Naive approach:
Check all integers from 1 to n → O(n)

Optimized approach:
Only check up to √n.

Why?

If i is a factor of n:
Then n / i is also a factor.

Example:
n = 36

If 3 divides 36,
Then 12 also divides 36.

So factors occur in pairs:
(i, n/i)

Thus, we only need to iterate:

for i in range(1, int(math.sqrt(n)) + 1)

This reduces time complexity to O(√n).
`
  },

  {
    title: "Factor Pairing Algorithm",
    content: `
Implementation:

def find_factors(n: int):
    factors = []
    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == 0:
            factors.append(i)

            if i != n // i:
                factors.append(n // i)

Logic Explanation:

If i divides n:
Add i.
Add complementary factor n//i.
Avoid duplicates when i == n//i
(e.g., perfect squares like 16 → 4 × 4)

This ensures all factors are collected.
`
  },

  {
    title: "Sorting & Prime Detection",
    content: `
After collecting factors:

factors.sort()

Sorting ensures ascending order.

Prime detection:

"is_prime": len(factors) == 2

Why 2?

Prime numbers have only:
1 and itself.

Example:
7 → [1, 7] → Prime
12 → [1, 2, 3, 4, 6, 12] → Not Prime
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
Let n be the input number.

Loop runs until √n:
O(√n)

Factor append operations:
O(√n)

Sorting:
Worst-case O(k log k)
Where k ≈ number of factors
k ≤ 2√n

Overall Complexity:
O(√n)

Space Complexity:
O(k)
`
  },

  {
    title: "Mathematical Insights",
    content: `
Properties:

- Every composite number has at least one factor ≤ √n.
- Perfect squares have odd number of factors.
- Prime numbers have exactly 2 factors.

Example:

n = 16
Factors:
1, 2, 4, 8, 16
(5 factors → odd count)

n = 13
Factors:
1, 13
(2 factors → prime)

This module bridges computational logic with number theory principles.
`
  },

  {
    title: "Backend API & Data Flow",
    content: `
Endpoint:
POST /factors/find

Input:
{
  "number": 36
}

Output:
{
  "number": 36,
  "factors": [1,2,3,4,6,9,12,18,36],
  "is_prime": false
}

Pipeline:

Input n
      ↓
Iterate up to √n
      ↓
Collect factor pairs
      ↓
Sort list
      ↓
Determine primality
      ↓
Return structured JSON
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Divisor search optimization
- Mathematical pairing symmetry
- Square root boundary reasoning
- Conditional branching
- Sorting algorithm application
- Prime classification

Conceptual Pipeline:

Input Number
      ↓
Iterate to √n
      ↓
Identify Divisors
      ↓
Pair Complement Factors
      ↓
Sort Results
      ↓
Determine Prime Status

The Factors module is a strong example of applying mathematical reasoning to reduce computational complexity efficiently.
`
  }
];