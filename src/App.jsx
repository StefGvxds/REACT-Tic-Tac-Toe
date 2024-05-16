import Player from "./components/Player.jsx";
import { useState } from "react";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <h1>Player</h1>
        <p>Game Board</p>
      </div>
    </main>
  );
}

export default App;
