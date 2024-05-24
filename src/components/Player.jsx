import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleEditing() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, name);
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && (
          <input
            type="text"
            required
            value={name}
            onChange={handleChange}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
