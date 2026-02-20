export const ducklingsDocs = [
  {
    title: "Problem Overview",
    content: `
The Ducklings module generates randomized ASCII duck characters using object-oriented design. 
Each duck is composed of three parts:

1) Head
2) Body
3) Feet

Each duck has randomized attributes:
- Direction (left or right)
- Body type (chubby or very chubby)
- Mouth state (open or closed)
- Wing position (out, up, down)
- Eye style (beady, wide, happy, aloof)

Additionally, seasonal hats may be applied dynamically based on the current month.

This module demonstrates procedural character generation, attribute-based rendering, and object-oriented modeling.
`
  },

  {
    title: "Duckling Class Architecture",
    content: `
Each Duckling instance randomly initializes attributes:

self.direction = random.choice([LEFT, RIGHT])
self.body = random.choice([CHUBBY, VERY_CHUBBY])
self.mouth = random.choice([OPEN, CLOSED])
self.wing = random.choice([OUT, UP, DOWN])

Eye logic:
If body == CHUBBY:
    eyes = BEADY
Else:
    random selection among multiple eye types

This introduces conditional attribute dependency.

Time Complexity per Duck:
O(1)

Each duck is generated independently.
`
  },

  {
    title: "Head Rendering Algorithm",
    content: `
Head rendering depends on:

- Direction
- Mouth state
- Eye type
- Optional hat

Example logic:

If direction == LEFT:
    face = '>' if mouth == OPEN else '='
    return f"{hat}{face}{eye})"

If direction == RIGHT:
    face = '<' if mouth == OPEN else '='
    return f"{hat}({eye}{face}"

Eye styles use dictionary lookup:

eye_map = {
  'beady': '"',
  'wide': "''",
  'happy': '^^',
  'aloof': '``'
}

This demonstrates conditional formatting and symbol mapping.
`
  },

  {
    title: "Body & Wing Mapping Logic",
    content: `
Wing positions are mapped using dictionary lookup:

wing = {
  'out': '>',
  'up': '^',
  'down': 'v'
}[self.wing]

Body string format:
"( {wing} )"

This allows controlled symbolic variation with constant-time lookup.

Body width remains consistent to maintain alignment.
`
  },

  {
    title: "Seasonal Hat Logic",
    content: `
Seasonal behavior is determined by current month:

m = datetime.datetime.now().month

If December → Santa hat 🎅
If October → Pumpkin hat 🎃
If May or June → Graduation hat 🎓
Else → No hat

This introduces time-dependent rendering logic.

Function:

def get_seasonal_hat(seasonal):
    if not seasonal:
        return ""
    ...

This demonstrates dynamic attribute injection.
`
  },

  {
    title: "Duck Generation Pipeline",
    content: `
Function:

def generate_ducks(count, seasonal):
    hat = get_seasonal_hat(seasonal)
    ducks = []

    for _ in range(count):
        d = Duckling()
        ducks.append({
            "head": d.head(hat),
            "body": d.body_str(),
            "feet": d.feet()
        })

    return ducks

Pipeline:

Determine hat
      ↓
Instantiate Duckling
      ↓
Render components
      ↓
Append structured output
      ↓
Return list

Time Complexity:
O(count)
`
  },

  {
    title: "Algorithm Complexity & Educational Insights",
    content: `
Attribute generation → O(1)
Rendering per duck → O(1)
Total generation → O(n)

Space Complexity:
O(n) for storing duck structures

Educational Concepts Demonstrated:

- Object-Oriented Design (OOP)
- Attribute randomization
- Dictionary-based symbol mapping
- Conditional rendering
- Time-based dynamic logic
- Component composition

Conceptual Pipeline:

Random Attribute Assignment
        ↓
Conditional Formatting
        ↓
Symbol Mapping
        ↓
Component Assembly
        ↓
Structured Output

Ducklings demonstrates how small rule-based variations can produce high diversity procedural character generation.
`
  }
];
