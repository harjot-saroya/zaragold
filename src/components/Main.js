import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from '../Landing';
import ProductPage from './ProductPage';
import SelectedProduct from './SelectedProduct';
const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/products' element={<ProductPage/>} />
      <Route path='/selectedProduct' element={<SelectedProduct/>} />
    </Routes>
  );
}

export default Main;