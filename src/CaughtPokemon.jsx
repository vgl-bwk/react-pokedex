import React, { useState } from "react";

const pokeList = [];
fetch("https://pokeapi.co/api/v2/pokemon?limit=1126")
  .then((data) => data.json())
  .then((json) => json.results.forEach((result) => pokeList.push(result.name)));

console.log(pokeList);

const CaughtPokemon = (props) => {
  const [caught, setCought] = useState([]);

  function catchPokemon() {
    let totalPokes = caught.concat(
      pokeList[Math.floor(Math.random() * pokeList.length)]
    );
    setCought(totalPokes);
  }
  return (
    <>
      <p>
        Caught {caught.length} Pokémon on {props.date}
      </p>
      <button onClick={catchPokemon}>Click Me</button>
      <ul>
        {caught.map((poke) => (
          <li>{poke}</li>
        ))}
      </ul>
    </>
  );
};

export default CaughtPokemon;
