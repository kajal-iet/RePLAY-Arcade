export const timerDocs = [
  {
    title: "Problem Overview",
    content: `
The Pomodoro Timer module models a productivity cycle based on alternating work and break sessions.

Standard durations:
WORK_TIME  = 25 minutes (1500 seconds)
BREAK_TIME = 5 minutes  (300 seconds)

The system alternates between two states:
- "work"
- "break"

After each session completes, the timer switches to the opposite state.

This module demonstrates deterministic state transitions and time-based workflow modeling.
`
  },

  {
    title: "Time Representation Design",
    content: `
Durations are stored in seconds:

WORK_TIME = 25 * 60
BREAK_TIME = 5 * 60

Why seconds?

- Easier countdown calculations
- Compatible with system timers
- Simplifies frontend display logic

Time abstraction:
Human-readable minutes → machine-friendly seconds.

Time Complexity:
O(1)
`
  },

  {
    title: "State Transition Algorithm",
    content: `
Core function:

def next_pomodoro(state):
    if state == "work":
        return "break", BREAK_TIME
    return "work", WORK_TIME

Logic:

If currently working:
    Switch to break
Else:
    Switch to work

This forms a 2-state finite state machine (FSM).
`
  },

  {
    title: "Finite State Machine (FSM) Model",
    content: `
States:
1) Work
2) Break

Transitions:

Work  → Break
Break → Work

There are no other states.

This is a deterministic two-node cyclic FSM.

Graphically:

[Work] ----> [Break]
   ^             |
   |-------------|

Each transition resets the countdown duration.
`
  },

  {
    title: "Session Cycle Behavior",
    content: `
Typical session flow:

Start in "work"
      ↓
Countdown 1500 seconds
      ↓
Auto-switch to "break"
      ↓
Countdown 300 seconds
      ↓
Auto-switch back to "work"
      ↓
Repeat

The logic does not track total cycles —
it purely alternates states.
`
  },

  {
    title: "Algorithm Complexity Analysis",
    content: `
State transition:
O(1)

Memory usage:
O(1)

The module is lightweight and constant-time.

Most complexity in a real implementation
would exist in the timer loop (frontend or scheduler).
`
  },

  {
    title: "Extensibility Considerations",
    content: `
Possible extensions:

- Long break after 4 work cycles
- Adjustable durations
- Pause/resume support
- Session statistics tracking
- Total productivity logging

To support long-break logic,
a counter would be added:

cycle_count += 1
if cycle_count % 4 == 0:
    state = "long_break"

Current implementation keeps the design minimal.
`
  },

  {
    title: "Educational & Computational Insights",
    content: `
Concepts Demonstrated:

- Finite State Machines (FSM)
- Deterministic transitions
- Time abstraction
- Alternating cyclic logic
- Productivity system modeling

Conceptual Pipeline:

Current State
      ↓
Session Ends
      ↓
Call next_pomodoro(state)
      ↓
Return New State + Duration
      ↓
Start Countdown
      ↓
Repeat

The Pomodoro module is a minimal yet effective example of cyclic state management for time-based workflow systems.
`
  }
];