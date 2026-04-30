import { useState } from "react";

export default function Player ({name, symbol}) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState({name});
  console.log(playerName);

  let nameField = <span className="player-name">{name}</span>

  if (isEditing) {
    nameField = <input type="text" name="" id="" />
  }

  function handleEditClick () {
      setIsEditing(true)
  }

  return (
    <li>
      <span className="player">
        {nameField}
        <span className="player-symbol">{symbol}</span>
        <button onClick={() => handleEditClick()}>Edit</button>
      </span>
    </li>
  );
}