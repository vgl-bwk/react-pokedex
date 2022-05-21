import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCount] = useState([]);

function catchPokemon() {
setCount(caught + 1);
  }
    return <>
  <p>Caught {caught.length} Pokémon on {props.date}</p>
  <button onClick={catchPokemon}>Click Me</button>
  </>;
};

export default CaughtPokemon;
