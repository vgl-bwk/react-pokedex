import React from "react";
import BestPokemon from "./BestPokemon.jsx";
import CaughtPokemon from "./CaughtPokemon.jsx";
import Logo from "./Logo.jsx";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
let date = new Date().toLocaleDateString();

function App() {
  return (
    <div>
      <Logo appName={"Pokedex"} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
