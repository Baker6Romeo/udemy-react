import Player from "./Components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            initialName="player 1"
            symbol="x"/>
          <Player
            initialName="player 2"
            symbol="o"/>
        </ol>

        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
