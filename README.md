## Overview

This project is a Tic-Tac-Toe game implemented using React. The application allows two players to play against each other, taking turns to place their marks ("X" and "O") on a 3x3 grid. The game dynamically updates the board based on the players' moves and determines the winner or if the game ends in a draw. The application is designed with modular React components, making it easy to manage and extend.

##Preview:

<img src="/public/t3-home.png" alt="home-page" />
<img src="/public/t3-win.png" alt="Won" />
<img src="/public/t3-lose.png" alt="draw" />


## Features

- **Player Customization:** Users can customize player names.
- **Dynamic Game Board:** The game board updates in real-time as players take turns.
- **Game Logic:** The app checks for a winner after each move and declares a draw if all squares are filled without a winner.
- **Game History:** A log of moves is maintained to track the game progress.
- **Restart Game:** Players can restart the game at any time.

## Project Structure

### Components

- **Header**
  - **Path:** `./components/Header.jsx`
  - **Description:** Displays the header of the game, potentially including the game title.

- **Player**
  - **Path:** `./components/Player.jsx`
  - **Description:** Displays player information, including name and active status. Allows players to change their names.

- **GameBoard**
  - **Path:** `./components/GameBoard.jsx`
  - **Description:** Renders the 3x3 grid for the Tic-Tac-Toe game. It handles user interactions for selecting squares and displays the current state of the game board.

- **GameLog**
  - **Path:** `./components/GameLog.jsx`
  - **Description:** Maintains a log of all moves made during the game, displaying the history of the game turns.

- **GameOver**
  - **Path:** `./components/GameOver.jsx`
  - **Description:** Displays the game over screen, indicating the winner or if the game ended in a draw. Provides an option to restart the game.

### Game Logic

- **Winning Combinations**
  - **Path:** `./components/winning-combinations.js`
  - **Description:** Contains the predefined winning combinations used to determine if a player has won the game.

### State Management

- **Player State**
  - **Initialization:** `useState({ X: "Player 1", O: "Player 2" })`
  - **Purpose:** Manages the names of the players ("X" and "O"). This state is updated when a player changes their name.

- **Game Turns State**
  - **Initialization:** `useState([])`
  - **Purpose:** Tracks the history of moves made during the game. Each turn is recorded with the player and the square they selected.

- **Derived State: Active Player**
  - **Function:** `derivedActivePlayer(gameTurns)`
  - **Purpose:** Determines the current active player based on the number and order of moves made.

- **Game Board State**
  - **Initialization:** `const initialGameBoard`
  - **Purpose:** Represents the current state of the game board as a 3x3 array. It is derived from the game turns.

- **Winner Detection**
  - **Logic:** Compares the current game board against the winning combinations to determine if a player has won.

- **Draw Detection**
  - **Logic:** Checks if the board is full and if there is no winner, indicating a draw.

## Application Flow

1. **Initialization:** The app initializes with the default player names and an empty game board.
2. **Player Interaction:** Players take turns selecting squares on the game board. The active player is determined based on the game history.
3. **Game State Update:** The game board and game history are updated after each move. The application checks for a winner or draw after each move.
4. **Game Over:** If a winner is detected or the game ends in a draw, the GameOver component is displayed.
5. **Restart:** Players can restart the game at any time, resetting the game state.

## Technologies Used

- **React:** A JavaScript library for building user interfaces, used for creating the dynamic components of the game.
- **JSX:** Syntax used in React components, allowing for the combination of JavaScript and HTML.

## Conclusion

This Tic-Tac-Toe game is a demonstration of using React to build an interactive and responsive web application. The modular structure of the components, along with the use of state and derived state, ensures that the game logic is clean and easy to maintain. The project can be extended with additional features, such as a scoring system or AI for a single-player mode.

