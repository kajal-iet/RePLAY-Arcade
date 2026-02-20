export const clickbaitDocs = [
  {
    title: "Problem Overview",
    content: `
The Clickbait module generates randomized sensational-style headlines using template-based text generation.

It combines:

- Random template selection
- Word category sampling
- Grammar-aware branching
- Dynamic number generation

Let:
OP = Object Pronouns
PP = Possessive Pronouns
PER = Personal Pronouns
ST = States
NO = Nouns
PL = Places
WH = Time references

The system selects one of several predefined templates and fills it with randomly chosen words.

This module demonstrates procedural content generation and rule-based text synthesis.
`
  },

  {
    title: "Template Selection Algorithm",
    content: `
A random integer between 1 and 8 selects the template:

t = random.randint(1, 8)

Each value of t corresponds to a headline pattern.

Example:

if t == 1:
  "Are Millennials Killing the {NOUN} Industry?"

if t == 2:
  "Without This {NOUN}, {NOUN}s Could Kill You {WHEN}"

This approach demonstrates discrete branching logic based on uniform random selection.

Time Complexity:
O(1)

Each call produces one headline.
`
  },

  {
    title: "Word Sampling & Category Design",
    content: `
Words are grouped into semantic categories:

DEFAULT_OBJECT_PRONOUNS
DEFAULT_POSSESIVE_PRONOUNS
DEFAULT_PERSONAL_PRONOUNS
DEFAULT_STATES
DEFAULT_NOUNS
DEFAULT_PLACES
DEFAULT_WHEN

Each placeholder in a template pulls a random element:

random.choice(NO)
random.choice(ST)
random.choice(WH)

Dictionary/list lookup → O(1)
Random selection → O(1)

This structure cleanly separates vocabulary from template logic.
`
  },

  {
    title: "Dynamic Numeric Injection",
    content: `
Some templates include numeric randomness:

n1 = random.randint(3, 19)
n2 = random.randint(1, n1)

Example:
"{n1} Reasons Why {NOUN}s Are More Interesting Than You Think (Number {n2} Will Surprise You!)"

This demonstrates:

- Bounded random ranges
- Nested randomness
- Dynamic formatting within string templates

It increases output variability and realism.
`
  },

  {
    title: "Grammar-Aware Conditional Branching",
    content: `
The final template includes grammar correction logic:

i = random.randint(0, 2)

If PP[i] == "Their":
  "... {PER[i]} Were Wrong."
Else:
  "... {PER[i]} Was Wrong."

Why?

Because:
"They" → plural → "Were"
"She" or "He" → singular → "Was"

This demonstrates conditional grammar adjustment based on pronoun type.

It prevents grammatical errors in generated output.
`
  },

  {
    title: "Backend API & Data Flow",
    content: `
Endpoint:
POST /clickbait/generate

Input:
{
  "words": [...]
}

Output:
{
  "headline": "Generated Clickbait Title"
}

Backend Pipeline:

Select Template
      ↓
Randomly Sample Words
      ↓
Apply Grammar Logic
      ↓
Inject Dynamic Numbers
      ↓
Return Final Headline

Frontend simply displays generated string.
`
  },

  {
    title: "Algorithm Complexity & Educational Insights",
    content: `
All operations are constant time:

Template selection → O(1)
Random word sampling → O(1)
String formatting → O(1)

Total complexity per generation → O(1)

Educational Concepts Demonstrated:
- Procedural text generation
- Template-based systems
- Conditional grammar handling
- Random distribution usage
- Structured data separation

Conceptual Pipeline:

Random Template
        +
Random Word Sampling
        +
Grammar Adjustment
        =
Generated Headline

This module illustrates how simple rule-based systems can produce high-variability text outputs without machine learning.
`
  }
];
