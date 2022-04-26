import './App.css';
import React, {useEffect, useState} from 'react';

const PokemonNames = () => {
  const [ names, setNames] = useState([])

  useEffect( () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
    .then(response => response.json())
    .then(response => setNames(response.results))
    console.log(names[0].name)
  }, [] )
  return (
    <div>
      <ol>
      {names.map( (item, index) => {
          return (
          <li key={index}> {item.name} </li>
        )})}
      </ol>
    </div>
  );

};


function App() {
  return (
    <div className="App">
      <PokemonNames />
    </div>
  );
}

export default App;
