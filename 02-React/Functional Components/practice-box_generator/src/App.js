import React, { useState } from 'react';
import './App.css';
import Box from './components/box'


function App() {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]);

  const newBox = (e) => {
    e.preventDefault();
    setColors(prevState => [...prevState, color] );
    setColor("");
  }
console.log(colors);
  return (
    <div className="App">
      <form onSubmit={newBox}>
        <input type='text' value={color} onChange={(e) => setColor(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>

      <div id='container' style={{display: 'flex', flexWrap: 'wrap'}}>
        {colors.map((color,index)=><Box key={index} color={color} />)}
      </div>

    </div>
  );
}

export default App;
