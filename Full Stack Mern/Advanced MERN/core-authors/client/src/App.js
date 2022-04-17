import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AuthorAdd from './components/AuthorAdd';
import AuthorUpdate from './components/AuthorUpdate';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/authors" default/>
        <Route element={<AuthorAdd/>} path='/authors/new' />
        <Route element={<AuthorUpdate/>} path='/authors/edit/:id' />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
