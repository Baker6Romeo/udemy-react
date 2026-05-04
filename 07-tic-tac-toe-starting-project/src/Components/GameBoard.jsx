import { useState } from "react"

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]

]

export default function GameBoard ()
{
  const [gameBoard, setGameBoard] = useState(initialGameboard);

  function handleSquareSelect (rowIndex, colIndex)
  {
    setGameBoard((previousGameBoard) => {
    const newGameBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
    newGameBoard[rowIndex][colIndex] = 'X';
    return newGameBoard;})
  }

  return(
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => <li key={colIndex}>
              <button onClick={() => handleSquareSelect(rowIndex, colIndex)}>{playerSymbol}</button>
            </li>)}
        </ol>
      </li>)}
    </ol>
  )
}