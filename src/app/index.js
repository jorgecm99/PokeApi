
import { displayPokemonList, handleScroll } from './views/view_list';
import { displayPokemonDetail } from './views/view_detail';
import { displayPokemonRandom } from './views/view_random';

import {fetchPokemonDetail} from './api/call_api_detail'

import {  PokemonUtil } from'./utils/pokemon.util';

import './styles/styles.scss';
import 'bootstrap';
import { pokemonClass, pokemonDetailClass } from './models/pokemon';


const addListeners = () => {
	document.getElementById('allPokemons').addEventListener('click', displayPokemonList);
	document.getElementById('pokeFinder').addEventListener('click', displayPokemonDetail);
	document.querySelector('body').onscroll = handleScroll;
	document.getElementById('randomPokemon').addEventListener('click', displayPokemonRandom);
}

window.onload = () => {
    /*displayPokemonRandom();*/
	addListeners();
    fetchPokemonDetail();
    PokemonUtil();
	pokemonClass();
	pokemonDetailClass();
	handleScroll();
	
}
