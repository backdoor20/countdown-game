import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const playerNameValue = useRef();

  function handleSetNameClick() {
    setPlayerName(playerNameValue.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerNameValue} />
        <button onClick={handleSetNameClick}>Set Name</button>
      </p>
    </section>
  );
}
