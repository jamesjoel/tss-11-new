import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/featured/Home'
import Product from '../components/featured/Product'
import Details from '../components/featured/Details'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='details/:x' element={<Details />} />
    </Routes>
  )
}

export default AllRoutes