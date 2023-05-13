const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return ` 
    <li class="pokemon">
        <span class="number">${pokemon.order}</span>
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

pokeApi.getPokemons().then((pokemons = [])=> {
   pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
   
   // const newList = pokemons.map((pokemon)=> {
     //   return convertPokemonToLi(pokemon)
  //  })
   // pokemonList.innerHTML += newList
})











// Forma de fazer utilizando 'FOR'
/*
    pokeApi.getPokemons().then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }})
*/