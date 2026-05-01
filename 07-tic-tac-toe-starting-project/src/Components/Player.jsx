import { useState } from "react";

export default function Player ({name, symbol}) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  let nameField = <span className="player-name">{name}</span>
  let editButton = <button onClick={handleEditClick}>Edit</button>

  if (isEditing) {
    nameField = <input
      type="text"
      required
      value = {name} />
  }

  if (isEditing) { 
        editButton = <button onClick={handleSaveClick}>Save</button> }

  function handleEditClick () {
      setIsEditing(true)
  }

  function handleSaveClick (event) {
    setPlayerName('Bob');
    console.log(event);
    setIsEditing(false);
  }

  return (
    <li>
      <span className="player">
        {nameField}
        <span className="player-symbol">{symbol}</span>
        {editButton}
      </span>
    </li>
  );
}