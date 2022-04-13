import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';


const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/api/products" default/>
        <Route element={<ProductDetails/>} path='/api/products/:id' />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
