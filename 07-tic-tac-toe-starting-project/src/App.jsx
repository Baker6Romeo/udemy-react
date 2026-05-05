import { act, useState } from "react"
import GameBoard from "./Components/GameBoard"
import Log from "./Components/Log";
import Player from "./Components/Player"

function getActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {currentPlayer = 'O'};

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = getActivePlayer(gameTurns);

  function handleSelectSquare (rowIndex, colIndex)
  { 
    setGameTurns(prevTurns =>{
      const currentPlayer = prevTurns
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex},
        player: currentPlayer},
        ...prevTurns
      ]
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="x"
            isActive={activePlayer === 'X'}/>
          <Player
            initialName="player 2"
            symbol="o"
            isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}></GameBoard>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
