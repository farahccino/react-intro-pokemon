import './App.css';
import Card from './Card';
import {useState} from 'react';
import Pokeball from './Pokeball'

function App() {
  const initialPokemon = [
    { name: 'Pikachu', type: 'Elektro' },
    { name: 'Glumanda', type: 'Feuer' },
    { name: 'Bisasam', type: 'Pflanze' },
    { name: 'Schiggy', type: 'Wasser' },
    { name: 'Smettbo', type: 'Käfer' },
    { name: 'Smettbo', type: 'Elektro' },
    { name: 'Vulpix', type: 'Feuer' },
    { name: 'Pummeluff', type: 'Fee' },
  ];
const [pokemon, setPokemon] = useState(initialPokemon);
const [pokedex, setPokedex] = useState([]);

function placeToPokedex(name) {
  const pokemonToAdd = pokemon.find((pokemon) => pokemon.name === name);
  setPokedex([pokemonToAdd, ...pokedex]);
  removePokemon(name);
}

function removePokemon(name) {
  const remainingPokemon = pokemon.filter((pokemon) => pokemon.name !== name);
  setPokemon(remainingPokemon);
  
}

// render function
  return (
    <div>
      <h1>Pokemon</h1>
      <h3>MyPokeball</h3>
      <section className="flex-container">
        {pokedex.map((pokemon) => (
          <Pokeball name={pokemon.name} type={pokemon.type} />
        ))}
      </section>
      {pokemon.map((pokemon) => (
        <Card name={pokemon.name} type={pokemon.type} onPlaceToPokedex={placeToPokedex} />
      ))}
      
    </div>
  );
}

export default App;
