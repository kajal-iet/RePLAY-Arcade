export const birthdayDocs = [
  {
    title: "Problem Overview",
    content: `
The Birthday module explores the Birthday Paradox, a probability phenomenon stating that in a group of 23 people, there is over a 50% chance that at least two people share the same birthday.

Let:
n = number of people
Birthdays are uniformly distributed among 365 days.

We calculate:
P(at least one shared birthday)

Instead of computing directly, we use the complement:
P(duplicate) = 1 - P(all birthdays unique)

This module demonstrates probability theory, combinatorics, and simulation modeling.
`
  },

  {
    title: "Theoretical Probability Model",
    content: `
Probability that all birthdays are unique:

P(unique) =
(365/365) × (364/365) × (363/365) × ... × ((365 - n + 1)/365)

Therefore:
P(duplicate) = 1 - P(unique)

Example:
For n = 23,
P(duplicate) ≈ 0.507

Why surprising?
Because comparisons grow pairwise.

Number of unique pairs:
n(n - 1) / 2

For n = 23:
23 × 22 / 2 = 253 pairs

This combinatorial explosion explains the paradox.
`
  },

  {
    title: "Monte Carlo Simulation Algorithm",
    content: `
Instead of only theoretical calculation, we simulate random birthdays.

Step 1 — Generate birthdays:
[random.randint(1, 365) for _ in range(n)]

Step 2 — Detect duplicates using set:
if len(set(birthdays)) < len(birthdays):
    duplicate exists

Simulation Loop:
Repeat for many trials.
Count matches.
Probability ≈ matches / trials

Time Complexity:
Per trial → O(n)
Total → O(trials × n)

Using a set reduces duplicate detection from O(n²) to O(n).
`
  },

  {
    title: "Backend API & Educational Value",
    content: `
API Endpoint:
POST /birthday/simulate

Input:
{
  "people": 23,
  "trials": 10000
}

Output:
{
  "probability": 0.507
}

Edge Cases:
- n ≤ 1 → Probability = 0
- n > 365 → Probability = 1
- Negative input → validation error

Conceptual Pipeline:

User Input
     ↓
Birthday Generation
     ↓
Duplicate Detection
     ↓
Probability Calculation
     ↓
JSON Response

This module demonstrates complement probability, combinatorial growth, Monte Carlo simulation, and efficient use of hash-based data structures.
`
  }
];
