import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/featured/Home'
import Product from '../components/featured/Product'
import Details from '../components/featured/Details'
import Student from '../components/featured/Student'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='details/:x' element={<Details />} />
        <Route path='student' element={<Student />} />
    </Routes>
  )
}

export default AllRoutes