import { act, useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare ()
  {
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
        <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer}></GameBoard>
      </div>
      LOG
    </main>
  )
}

export default App
