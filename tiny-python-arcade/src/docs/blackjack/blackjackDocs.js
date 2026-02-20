export const blackjackDocs = [
  {
    title: "Problem Overview",
    content: `
Blackjack is a turn-based card game where the objective is to reach a hand value as close to 21 as possible without exceeding it.

Let:
P = Player hand
D = Dealer hand
V(H) = Value of hand H

Victory Conditions:
- If V(P) > 21 → Player busts → Lose
- If V(D) > 21 → Dealer busts → Win
- If V(P) > V(D) → Win
- If equal → Draw
- Else → Lose

This implementation is backend-driven using Python and FastAPI. The server manages deck generation, shuffling, score calculation, dealer strategy, and state transitions. The frontend only renders the returned game state.
`
  },

  {
    title: "Deck Generation & Card Representation",
    content: `Each card is represented as:
(rank, suit)

Ranks:
["2","3","4","5","6","7","8","9","10","J","Q","K","A"]

Suits:
["♠","♥","♦","♣"]

Deck generation uses Cartesian product:
deck = [(r, s) for r in ranks for s in suits]

Total cards:
13 × 4 = 52

Shuffle:
random.shuffle(deck)

Time Complexity:
Deck creation → O(52)
Shuffle → O(52)

This ensures randomized card order before dealing.
`
  },

  {
    title: "Hand Value Calculation (Ace Logic)",
    content: `
Card values:
2–10 → numeric value
J, Q, K → 10
A → 1 or 11 (dynamic)

Ace handling introduces conditional evaluation.

Algorithm:
1. Add non-ace card values.
2. Count number of aces.
3. For each ace:
   If total + 11 ≤ 21 → add 11
   Else → add 1

Implementation:

def calculate_score(hand):
    total = 0
    aces = 0

    for rank, _ in hand:
        if rank in ["J","Q","K"]:
            total += 10
        elif rank == "A":
            aces += 1
        else:
            total += int(rank)

    for _ in range(aces):
        if total + 11 <= 21:
            total += 11
        else:
            total += 1

    return total

Time Complexity:
O(n) where n = number of cards in hand.
`
  },

  {
    title: "Game State Machine & Dealer Strategy",
    content: `
Blackjack follows a deterministic state machine:

INIT → PLAYER_TURN → DEALER_TURN → RESULT

INIT:
- Deal 2 cards to player
- Deal 2 cards to dealer

PLAYER_TURN:
- Player chooses Hit or Stand
- If Hit → Add card → Recalculate score
- If score > 21 → Bust

DEALER_TURN:
Dealer must hit while score < 17
Dealer stands at ≥ 17

Implementation:

while calculate_score(dealer_hand) < 17:
    dealer_hand.append(deck.pop())

RESULT:
Compare final scores and determine winner.

This structure models a finite state machine with clear transitions.
`
  },

  {
    title: "API Design & State Management",
    content: `
Endpoints:

POST /blackjack/start
Returns initial hands and game state.

POST /blackjack/hit
Adds a card to player hand and recalculates score.

POST /blackjack/stand
Triggers dealer logic and returns final result.

Example Response:
{
  "player": [...],
  "dealer": [...],
  "status": "player_turn"
}

Backend maintains:
- Deck
- Player hand
- Dealer hand
- Game status

State is stored in memory for the session.
Restarting the server resets active games.

This ensures secure server-side logic and prevents client manipulation.
`
  },

  {
    title: "Algorithm Complexity & Educational Insights",
    content: `
Deck operations:
O(1) per card draw

Score evaluation:
O(n) per hand

Dealer loop:
Worst case O(52)

Overall performance is highly efficient.

Educational Concepts Demonstrated:
- Finite state machines
- Conditional branching
- Modular game engine architecture
- Probabilistic reasoning
- Dynamic evaluation (Ace dual-value handling)

Conceptual Pipeline:

Deck Creation
     ↓
Shuffle
     ↓
Initial Deal
     ↓
Player Decisions
     ↓
Dealer Strategy
     ↓
Result Evaluation
     ↓
JSON Response

Blackjack demonstrates how rule-based logic, probability, and state transitions combine to form a complete backend-driven game engine.
`
  }
];
