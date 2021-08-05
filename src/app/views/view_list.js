import { fetchPokemonList} from './../api/call_api_list'

let offset = 0;

const displayPokemonList = (event, offset = 0) => {
	const pokedex = document.getElementById('randomContainer');
	if (offset === 0) {
		pokedex.innerHTML = '';
	}
	const pokemonListPromise = fetchPokemonList(offset);

	pokemonListPromise.then((pokemonList) => {
		pokemonList.forEach(pokemonItem => {
			const newDiv = document.createElement('div');
			newDiv.id = pokemonItem.id;
			newDiv.classList.add('flex-item');

		
			/*const img = document.createElement('img');
			img.src = pokemonId.sprites.front_default;
			newDiv.appendChild(img);*/

			const p = document.createElement('p');
			p.innerHTML = `Nº ${pokemonItem.id}`;
			newDiv.appendChild(p);

			

			const h3 = document.createElement('h3');
			h3.setAttribute('class', 'flex-item-title');
			h3.innerText = pokemonItem.name;

			newDiv.appendChild(h3);
			pokedex.appendChild(newDiv);

			
		});
	});

}

const handleScroll = (event) => {
	if (Math.ceil(window.scrollY) >= (Math.ceil(document.querySelector('body').scrollHeight - window.innerHeight))) {
		offset += 30;
		if (document.getElementById('randomContainer').childElementCount > 1 && offset < 150) {
			displayPokemonList(event, offset)
		}
		else {
			alert("No existen mas pokemon")
	}
}
	
}

export {displayPokemonList, handleScroll};
