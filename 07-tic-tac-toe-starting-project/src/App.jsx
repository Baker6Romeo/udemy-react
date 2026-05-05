import { act, useState } from "react"
import GameBoard from "./Components/GameBoard"
import Log from "./Components/Log";
import Player from "./Components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [prevTurns, setGameTurns] = useState([]);

  function handleSelectSquare (rowIndex, colIndex)
  {
    setGameTurns(prevTurns =>{
        let currentPlayer = 'X';
        if (prevTurns.length > 0 && prevTurns[0].player === 'X') {currentPlayer = 'O'}
        const updatedTurns = [
          {square: {row: rowIndex, col: colIndex},
          player: currentPlayer},
          ...prevTurns
        ]
        return updatedTurns;
      }
    );
    setActivePlayer(curActivePlayer => activePlayer === 'X' ? 'O' : 'X');
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
        <GameBoard onSelectSquare={handleSelectSquare} turns={prevTurns}></GameBoard>
      </div>
      <Log turns={prevTurns}/>
    </main>
  )
}

export default App
