import { fetchPokemonDetail } from "../api/call_api_detail";

document.getElementById("randomPokemon").addEventListener('click', () => {
    /*setInterval(displayPokemonRandom, 7500);*/
    

});

const displayPokemonRandom = () => {
    let random = Math.floor(Math.random()*150) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then(response => {
        return response.json();
})
.then(element => {
    let myContainer = document.getElementById("randomContainer");

    const cuerpoPokemon = 
    `<div class="pokemonStyle">
        <img class = "pokeImage" src = "${element.sprites.front_default}"/>
        <h4 class = "titlePokemon"> ${element.name}</h4>
        <p class = "weightPokemon"> Peso: ${element.weight}</p>
        <p class = "basePokemon"> Movimiento: ${element.moves[0].move.name}</p>
    </div>`
    
    myContainer.innerHTML = cuerpoPokemon;
    
    })
    
    
}



export { displayPokemonRandom }