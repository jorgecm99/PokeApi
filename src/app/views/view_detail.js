
import { fetchPokemonDetail } from "../api/call_api_detail";
import { PokemonDetailClass } from "../models/pokemon";


function displayPokemonDetail() {
    let juegoPokemon = document.getElementById("pokeName").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${juegoPokemon}`)
    .then(response => {
        return response.json();

})
.then(element => {
    let myContainer = document.getElementById("randomContainer");

	const detallePokemon = 
    `<div class="pokemonStyle">
        <img class = "pokeImage" src = "${element.sprites.front_default}"/>
        <h4 class = "titlePokemon"> ${element.name}</h4>
        <p class = "weightPokemon"> Peso: ${element.weight}</p>
        <p class = "attackPokemon"> Ataque: ${element.abilities[0].ability.name}</p>
        <p class = "basePokemon"> Movimiento: ${element.moves[0].move.name}</p>
    </div>`
    

	myContainer.innerHTML = detallePokemon;
    
    
    }) .catch (error => {
        alert("No hay pokemon con ese nombre!!");
    })
}


export { displayPokemonDetail }



