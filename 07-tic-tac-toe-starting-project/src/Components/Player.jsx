import { useState } from "react";

export default function Player ({initialName, symbol, isActive}) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    editablePlayerName =
    <input type="text" required value={playerName} onChange={handleChange} />
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick () {
    // passing an anonymous function allows for value evaluation at runtime instead of scheduling
      setIsEditing(editing => !editing)
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
}