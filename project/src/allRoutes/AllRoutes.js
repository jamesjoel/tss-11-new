import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home';
import About from '../components/feature/About';
import Product from '../components/feature/Product';
import Cart from '../components/feature/Cart'
import Contact from '../components/feature/Contact';
import Demo from '../components/feature/Demo';
import Signup from '../components/feature/Signup';
import Login from '../components/feature/Login';
import Logout from '../components/feature/Logout';
import MyProfile from '../components/feature/MyProfile';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='logout' element={<Logout />} />
        <Route path='my-profile' element={<MyProfile />} />
        <Route path='product' element={<Product />} />
        <Route path='contact' element={<Contact />} />
        <Route path='demo' element={<Demo />} />
        <Route path='signup' element={<Signup />} />
        <Route path='cart' element={<Cart />} />
    </Routes>
  )
}

export default AllRoutes