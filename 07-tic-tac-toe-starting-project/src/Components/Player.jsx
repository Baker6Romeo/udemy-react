import { useState } from "react";

export default function Player ({initialName, symbol}) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    editablePlayerName =
    <input type="text" required value={playerName} onChange={handleChange} />
  }

  function handleChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  }

  function handleEditClick () {
    // passing an anonymous function allows for value evaluation at runtime instead of scheduling
      setIsEditing(editing => !editing)
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
}