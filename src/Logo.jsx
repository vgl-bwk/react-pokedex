import React from 'react'

const Logo = (props) => {
    function logWhenClicked(){
        console.log("A wild Pidgey has appeared!")
    }
return (
    <div>
        <header>
        <h1>Welcome to the {props.appName}</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pidgey" onClick={logWhenClicked}/>
        </header>
    </div>
)
}

export default Logo