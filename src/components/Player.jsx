import { useState } from "react";

export default function Player({ defaultName, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(defaultName);
  const [editing, setEditing] = useState(false);

  function handleEditing() {
    // setEditing(true ||editing ? fase : true ||!editing ||(editing)=>!editing --pdating on prev. State)
    setEditing((edits) => !edits);
    if(editing){
      onNameChange(symbol, playerName);
    }
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  let editableName = <span className="player-name">{playerName}</span>;

  if (editing) {
    editableName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange} 
        // ex of two way binding: value={playerName} onChange={handleNameChange}
      />
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
