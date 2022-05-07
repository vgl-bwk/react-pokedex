import react from "react";
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon.js";
import CaughtPokemon from "./CaughtPokemon.js";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
let date = new Date().toLocaleDateString();

function App() {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
