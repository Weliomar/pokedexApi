function convertPokemonToLi(pokemon) {
    return ` 
    <li class="pokemon">
        <span class="number">${pokemon.offset}</span>
        <span class="name">${pokemon.name}
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
            </div>
    </li> 
    `
}

const pokemonList = document.getElementById('pokemonList')


// Forma de fazer utilizando 'FOR'
/*
    pokeApi.getPokemons().then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }})
*/