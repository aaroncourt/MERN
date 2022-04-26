import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import ProductUpdate from './components/ProductUpdate';


const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/api/products" default/>
        <Route element={<ProductDetails/>} path='/api/products/:id' />
        <Route element={<ProductUpdate/>} path='/api/products/edit/:id' />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
