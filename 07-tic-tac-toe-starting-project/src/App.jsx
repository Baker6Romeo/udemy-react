import Player from "./Components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            name="player 1"
            symbol="x"/>
          <Player
            name="player 2"
            symbol="o"/>
        </ol>

        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
