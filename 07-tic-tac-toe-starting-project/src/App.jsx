import Player from "./Components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            playerName="player 1"
            playerSymbol="x"/>
          <Player
            playerName="player 2"
            playerSymbol="o"/>
        </ol>

        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
