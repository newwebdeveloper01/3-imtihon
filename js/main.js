var pokemonList = document.querySelector('.pokemon__list');
var minKg = document.querySelector('.min__weight').value - 0;
var maxKg = document.querySelector('.max__weight').value - 0;
var searchNames = document.querySelector('.search').value;
function createPokemon(pokemon) {
    var colElement = document.createElement('div');
    colElement.className = 'col-6 col-lg-3 col-md-6 col-sm-6 ';

    var cardElement = document.createElement('div');
    cardElement.className = 'card';

    var cardImg = document.createElement('img');
    cardImg.setAttribute('src', pokemon.img);
    cardImg.className = 'px-5 pt-3 img';

    var cardHeader = document.createElement('div')
    cardHeader.className = 'h3 text-center pt-1 ';

    var like = document.createElement('i')
    like.className = 'fa-regular fa-heart  like';

    var cardBody = document.createElement('div')
    cardBody.className = 'card-body ';

    var cardTitle = document.createElement('h5');
    cardTitle.className = 'title';
    cardTitle.textContent = pokemon.name;

    var cardDescription = document.createElement('h5');
    cardDescription.className = 'description';
    cardDescription.textContent = pokemon.type;

    var numbers = document.createElement('div')
    numbers.className = 'my-3 d-flex justify-content-between';

    var weight = document.createElement('div');
    weight.textContent = pokemon.weight;

    var avg_spawns = document.createElement('div');
    avg_spawns.textContent = pokemon.avg_spawns + "  avg spawns";

    cardElement.appendChild(cardImg);
    cardElement.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(like);
    cardBody.appendChild(cardDescription);
    cardDescription.appendChild(numbers);
    numbers.appendChild(weight);
    numbers.appendChild(avg_spawns);
    colElement.appendChild(cardElement);

    return colElement
}


render(pokemons)

function render(pokemon) {
    pokemonList.innerHTML = null;
    for (let i = 0; i < pokemon.length; i++) {
        let singleEl = createPokemon(pokemon[i]);
        pokemonList.appendChild(singleEl);
    }
}

function filterBtn() {
    

    if (minKg > 0 && maxKg > 0) pokemonList.innerHTML = null;

    for (let i = 0; i < pokemons.length; i++) {
        let value = pokemons[i].weight.split(' ');

        if (value[0] > minKg && value[0] < maxKg) {
            let chooseKg = createPokemon(pokemons[i]);
            pokemonList.appendChild(chooseKg);
        }

        if (searchNames.toLowerCase() == pokemons[i].name.toLowerCase()) {
            pokemonList.innerHTML = null;
            let chooseName = createPokemon(pokemons[i]);
            pokemonList.appendChild(chooseName);
            
        }
        if (searchNames.toLowerCase() == pokemons[i].type[0].toLowerCase() || searchNames.toLowerCase() == pokemons[i].type[1].toLowerCase()) {
            pokemonList.innerHTML = null;
            let chooseName = createPokemon(pokemons[i]);
            pokemonList.appendChild(chooseName);
            
        }
        
    }
}


