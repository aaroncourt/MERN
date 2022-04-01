import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios'

const PokemonNames = () => {
  const [ names, setNames] = useState([])

  useEffect( () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
    .then(response => {setNames(response.data.results)})
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
