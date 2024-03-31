import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from '../Landing';
import ProductPage from './ProductPage';
const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<LandingPage/>} />
      <Route path='/products' element={<ProductPage/>} />
    </Routes>
  );
}

export default Main;