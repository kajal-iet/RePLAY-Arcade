export const birthdayDocs = [
  {
    title: "Project Introduction",
    content: `
# Birthday Paradox Game

This game demonstrates a famous probability concept:

👉 In a group of people, how many are needed before two share the same birthday?

We turn this math concept into an interactive simulation.

Tech Stack:
- Backend: FastAPI
- Frontend: React
- Architecture: API-driven learning game
`
  },
  {
    title: "Concept: Birthday Paradox",
    content: `
It sounds impossible, but it's true:

Only **23 people** are needed for a 50% chance of a match.

Why?

Because we compare every person with everyone else.
Combinations grow FAST.

This game simulates that probability live.
`
  },
  {
    title: "Frontend Flow",
    content: `
User enters:
- Number of people
- Number of simulations

Frontend sends request to backend.
Backend generates random birthdays and checks matches.
Result returned and displayed with stats + graph.
`
  },
  {
    title: "Learning Outcome",
    content: `
You learn:

✔ Probability in real life  
✔ How simulations work  
✔ How frontend talks to backend  
✔ How math becomes an application  

This is learning by building 🎯
`
  }
];
