# Pokémon Memory Card Game

A fun and interactive memory game built with **React** where your goal is simple: click every Pokémon card exactly once. After each correct click, the cards are shuffled, making it harder to remember which Pokémon you've already selected. One wrong click ends the game!

## Features

- Three difficulty levels:
  - Easy (6 cards)
  - Medium (12 cards)
  - Hard (20 cards)
- Pokémon data fetched dynamically from the PokéAPI.
- Cards shuffle after every correct selection.
- Live score and high score tracking.
- Win when you successfully click every card once.
- Lose immediately if you click the same Pokémon twice.
- Responsive and interactive UI with hover animations.

## Built With

- React
- Vite
- Tailwind CSS
- shadcn/ui
- PokéAPI

## How to Play

1. Choose a difficulty level.
2. Click on a Pokémon card.
3. After every correct click, all the cards are shuffled.
4. Don't click the same Pokémon twice.
5. Click every unique Pokémon to win the game.

## API Used

- https://pokeapi.co/

The demonstration of the project can be found at https://memory-card-rho-gules.vercel.app/

![Screenshot of the project](./public/screenshot-mc.png)