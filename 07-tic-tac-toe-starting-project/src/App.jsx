import { useState } from "react"

import GameBoard from "./Components/GameBoard"
import GameOver from "./Components/GameOver";
import Log from "./Components/Log";
import Player from "./Components/Player"
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]

]

function getActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  };

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState([
    {
      X: 'Player 1',
      O: "Player 2" 
    }
  ]);

  const activePlayer = getActivePlayer(gameTurns);

  let gameBoard = [...initialGameboard.map(array => [...array])];

  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;


    gameBoard[row][col]= player
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS ) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSqareSymbol = gameBoard[combination[2].row][combination[2].column];
    
    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSqareSymbol) {
        winner = players[firstSquareSymbol];        
      }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare (rowIndex, colIndex)
  { 
    setGameTurns(prevTurns => {
      const currentPlayer = getActivePlayer(prevTurns)
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex},
        player: currentPlayer},
        ...prevTurns
      ]
      return updatedTurns;
    });
  }

  function handlePlayerNameChange (symbol, newName) {
    setPlayers(previousPlayers => {
      return {
        ...previousPlayers,
        [symbol]: newName
      };
    });
  }

  function handleRematch () {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="x"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}/>
          <Player
            initialName="player 2"
            symbol="o"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner}/>}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
          onRematch={handleRematch}></GameBoard>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
