import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home';
import About from '../components/feature/About';
import Product from '../components/feature/Product';
import Cart from '../components/feature/Cart'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product />} />
        <Route path='cart' element={<Cart />} />
    </Routes>
  )
}

export default AllRoutes