import React from "react";
import ReactDOM from "react-dom";
import Pokegame from "./components/Pokegame/Pokegame";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokegame />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
