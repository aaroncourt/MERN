import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';

const Home = (props) => {
  return (
    <h2>Welcome home!</h2>
  );
};

const Number = (props) => {
  const {number} = useParams();
  return (
    <h2>The number is: {number}</h2>
  );
};

const Word = (props) => {
  const {word} = useParams();
  return (
    <h2>The wrod is: {word}</h2>
  );
};

const Colors = (props) => {
  const {word} = useParams();
  const {color} = useParams();
  const {bgColor} = useParams();

  return (
    <h2 style={{color: `${color}`, backgroundColor: `${bgColor}`}}>The word is: {word}</h2>
  );
};


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/:number' element={<Number />} />
          <Route path='/:word' element={<Word />} />
          <Route path='/:word/:color/:bgColor' element={<Colors />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
