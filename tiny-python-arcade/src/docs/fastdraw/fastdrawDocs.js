export const fastdrawDocs = [
  {
    title: "Problem Overview",
    content: `
The FastDraw module simulates a reaction-time game where the player must click as quickly as possible after a "draw" signal appears.

The system tracks:

- Current game phase
- Reaction timestamps
- Attempts
- Wins and losses
- Reaction time history

The objective:
Click within an allowed time threshold after the draw signal.

This module demonstrates real-time event handling, time measurement, state transitions, and statistical tracking.
`
  },

  {
    title: "Game State Architecture",
    content: `
The game uses a global Game object:

class Game:
    phase
    draw_time
    attempts
    wins
    losses
    times

GAME = Game()

Phases:
"idle" → no round active
"waiting" → waiting for draw trigger
"draw" → player allowed to click

This models a finite state machine (FSM).

State transitions enforce correct game flow.
`
  },

  {
    title: "Round Initialization & Trigger Logic",
    content: `
start_round():
    GAME.phase = "waiting"
    GAME.draw_time = None

trigger_draw():
    GAME.draw_time = time.time()
    GAME.phase = "draw"

Explanation:

time.time() records the exact timestamp when drawing becomes allowed.

The game waits in "waiting" phase until trigger occurs.

Time Complexity:
O(1)
`
  },

  {
    title: "Reaction Measurement Algorithm",
    content: `
click(allowed):

1. Ensure phase == "draw"
2. Compute reaction time:
   reaction = current_time - draw_time
3. Compare against allowed threshold
4. Update statistics
5. Reset phase to "idle"

Core logic:

reaction = time.time() - GAME.draw_time

If reaction <= allowed:
    win
Else:
    lose

Reaction times are stored in GAME.times list.

This demonstrates real-time delta calculation.
`
  },

  {
    title: "Statistics Tracking",
    content: `
Tracked metrics:

- attempts
- wins
- losses
- reaction times

Each click:
GAME.attempts += 1

If win:
GAME.wins += 1
Else:
GAME.losses += 1

Reaction times appended:
GAME.times.append(reaction)

This enables performance analysis over multiple rounds.
`
  },

  {
    title: "State Reset & Data Retrieval",
    content: `
get_stats():

Returns structured snapshot of:
- attempts
- wins
- losses
- reaction times
- current phase

reset():
GAME.__init__()

This reinitializes the game state completely.

Demonstrates object reinitialization and state clearing.
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
All operations are constant time:

Phase change → O(1)
Time calculation → O(1)
Stats update → O(1)

Total per round → O(1)

Memory:
O(n) where n = number of reaction times stored.

Performance remains efficient regardless of attempts.
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Finite State Machine modeling
- Real-time timestamp measurement
- Delta time calculation
- Event validation
- Global state management
- Statistical aggregation

Conceptual Pipeline:

Start Round
      ↓
Wait State
      ↓
Trigger Draw (timestamp recorded)
      ↓
User Click
      ↓
Reaction Time Calculation
      ↓
Win/Loss Evaluation
      ↓
Stats Update

FastDraw is an example of time-sensitive event-driven programming and state-controlled logic flow.
`
  }
];