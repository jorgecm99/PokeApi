import {pokemonClass, pokemonDetailClass} from '../models/pokemon'
import { PokemonUtil } from '../utils/pokemon.util'

const fetchPokemonList = async (offset) => {
	PokemonUtil.tooglePokeLoader();
	const endPoint = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`;
	const pokemonListRequest = await fetch(endPoint)
		.catch((error) => console.log(error)
	);

	if (pokemonListRequest.status !== 200) {
		PokemonUtil.handleError({message: 'Error'});
		PokemonUtil.tooglePokeLoader();
		return Promise.reject;
	}
	const pokemonAnswer = await pokemonListRequest.json();
	
	const getIdFromUrl = (url) => {
		const urlPokemonSplit = url.split('/');
		return urlPokemonSplit[urlPokemonSplit.length-2]
	}

	const getImg = (endPoint)=>{
        let pokemonUrl= endPoint.split('/');
        let pokemonId = pokemonUrl[pokemonUrl.length-2];
        let pokemonImg = `https://pokeapi.co/api/v2/pokemon/sprites/${pokemonId}.png`;
        return pokemonImg;

	};
	const pokemonList = pokemonAnswer.results.map(({name, url}) =>({name, url, id:getIdFromUrl(url)}));
	PokemonUtil.tooglePokeLoader();
	return pokemonList;
}

export { fetchPokemonList }
