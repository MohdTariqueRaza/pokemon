# Pokemon Discovery App
## Overview
This is a React-based web application that allows users to discover Pokemon using the PokeAPI. The app features an infinite scrolling list of Pokemon cards and a personal collection where users can save their favorite Pokemon. The collection is persisted in localStorage and can be reordered via drag and drop.
## Features
- **Infinite Scrolling**: Automatically loads more Pokemon as the user scrolls down.
- **Pokemon Cards**: Each card displays the Pokemon's name, image, type(s), and basic stats (HP, Attack, Defense).
- **Add to Collection**: Each card has a button to add the Pokemon to the user's personal collection.
- **View Collection**: A separate tab to view the saved Pokemon.
- **Persistent Storage**: The collection is saved in localStorage and persists on page refresh.
- **Drag and Drop Reordering**: Users can drag and drop Pokemon in their collection to change the order.
## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **TanStack Query (React Query)**: For fetching, caching, and managing server state.
- **Intersection Observer API**: To implement infinite scrolling.
- **react-dnd**: A lightweight, performant library for building drag and drop interfaces.
- **localStorage**: For persisting the user's collection.
- **PokeAPI**: The RESTful API used to get Pokemon data.
## Installation and Setup
### Prerequisites
- Node.js and npm installed.
### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/MohdTariqueRaza/pokemon.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pokemon
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`.
## Usage
- **Discovery Page**: The home page shows Pokemon cards. Scroll down to load more. Click the "+" button on any card to add that Pokemon to your collection.
- **My Collection Tab**: Click on the "My Collection" tab to view your saved Pokemon. Here you can drag and drop to reorder your collection.
## API Reference
The app uses the [PokeAPI](https://pokeapi.co/api/v2/pokemon) to fetch Pokemon data. Each Pokemon object includes:
- `name`: The name of the Pokemon.
- `sprites`: Contains the URL for the Pokemon's image.
- `types`: An array of the Pokemon's types.
- `stats`: An array of base stat values (HP, Attack, Defense, etc.).
## Implementation Details
### Infinite Scroll
The infinite scroll is implemented using the Intersection Observer API. A sentinel element is placed at the bottom of the Pokemon list. When this element comes into view, the next set of Pokemon is fetched.
### Data Fetching with TanStack Query
We use TanStack Query to manage the data fetching for Pokemon. The `useInfiniteQuery` hook is particularly useful for handling infinite scroll data.
### Persisting the Collection
The user's collection is stored in localStorage. We use React hooks to synchronize the collection state with localStorage.
### Drag and Drop
The drag and drop functionality for reordering the collection is implemented using `react-dnd`.
