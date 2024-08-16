import { useState } from "react";

import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/gameBoard";
import GameLog from "./components/GameLog";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [player, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);

  let game = [...initialGameBoard.map((array) => [...array])];
  //deriving state
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    game[row][col] = player;
  }

  const activePlayer = derivedActivePlayer(gameTurns);

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstBlock = game[combination[0].row][combination[0].column];
    const secondBlock = game[combination[1].row][combination[1].column];
    const thirdBlock = game[combination[2].row][combination[2].column];

    if (firstBlock && firstBlock == secondBlock && firstBlock == thirdBlock) {
      winner = player[firstBlock];
    }
  }

  const draw = gameTurns.length === 9 && !winner;

  function handleSelecedSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updateTurns;
    });
  } //state updating function : immutsble, avoid to use one state function in another state function

  function handleRestart() {
    setGameTurns([]);
  }

  function handleNameChange({symbol, newName}) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <>
      <Header/>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              defaultName="Player-1"
              symbol="X"
              isActive={activePlayer === "X"}
              onNameChange={handleNameChange}
            />
            <span> VS </span>
            <Player
              defaultName="Player-2"
              symbol="O"
              isActive={activePlayer === "O"}
              onNameChange={handleNameChange}
            />
          </ol>
          {(winner || draw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
          <GameBoard onSelectedSquare={handleSelecedSquare} board={game} />
        </div>
        <GameLog turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
