export const birthdayDocs = [
  {
    title: "Problem Overview",
    content: `
The Birthday game/module explores the famous Birthday Paradox, which states:
In a group of just 23 people, there is over a 50% chance that at least two people share the same birthday.
This is counterintuitive because most people assume the probability would be much lower.
The backend implementation simulates birthday generation and calculates whether duplicates exist. It can also compute theoretical probabilities.

This module demonstrates:
Combinatorics
Probability theory
Random simulation
Set-based duplicate detection
Monte Carlo modeling

#    Formal Problem Definition
Let:
n = number of people
Each person has a birthday uniformly distributed among 365 days
Birthdays are independent events

We want to compute:
P(at least one shared birthday)
Instead of directly computing this, we compute its complement:
1 - P(all birthdays unique)

`
  },
  {
    title: "Theoretical Probability Model",
    content: `
The probability that all birthdays are unique:
For n people:
P(unique) = (365/365) × (364/365) × (363/365) × ... × ((365-n+1)/365)

Thus:
P(duplicate) = 1 - P(unique)

Example for 23 people:
P(unique) ≈ 0.4927
P(duplicate) ≈ 0.5073

So with just 23 people, there is a 50.7% chance of a shared birthday.


#    Simulation Approach (Algorithmic Method)
Instead of computing formula directly, we simulate:

Step 1 — Generate Random Birthdays
import random
def generate_birthdays(n):
    return [random.randint(1, 365) for _ in range(n)]

Time Complexity: O(n)

Step 2 — Detect Duplicate
We use a set for O(1) average lookup:

def has_duplicate(birthdays):
    seen = set()
    for b in birthdays:
        if b in seen:
            return True
        seen.add(b)
    return False

Time Complexity: O(n)

Why Set Is Efficient
Checking duplicates via nested loops:
O(n²)

Using a set: O(n)
This demonstrates importance of data structure selection.

#      Monte Carlo Simulation
To approximate probability:
def simulate(n, trials=10000):
    matches = 0
    for _ in range(trials):
        birthdays = generate_birthdays(n)
        if has_duplicate(birthdays):
            matches += 1
    return matches / trials


Time Complexity: O(trials × n)
With n=23 and trials=10,000 → extremely fast.

`
  },
  {
    title: "Why It’s a “Paradox”",
    content: `
People think in linear terms:
23 is small compared to 365
But comparisons are pairwise.

Number of unique pairs in group of n: n(n - 1) / 2

For 23 people:
23 × 22 / 2 = 253 pairs
That’s 253 possible birthday comparisons.
This combinatorial explosion explains the high probability.

#     Backend API Structure
Start Simulation
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


#    Deterministic vs Simulation Modes
Module may support:
Exact formula calculation
Monte Carlo approximation

Exact computation:
def exact_probability(n):
    prob_unique = 1.0
    for i in range(n):
        prob_unique *= (365 - i) / 365
    return 1 - prob_unique

Time Complexity: O(n)

Simulation offers:
Visualization of randomness
Educational reinforcement
`
  },
  {
    title: "Conceptual Summary",
    content: `
The Birthday module models:

Random Distribution
        +
Pairwise Comparison
        +
Combinatorial Growth
        =
Counterintuitive Probability Outcome


It is a strong example of how computational simulation can validate mathematical theory.
`
  }
];
