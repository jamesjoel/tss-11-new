import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/User/feature/Home';
import About from '../components/User/feature/About';
import Product from '../components/User/feature/Product';
import Cart from '../components/User/feature/Cart'
import Contact from '../components/User/feature/Contact';
import Demo from '../components/User/feature/Demo';
import Signup from '../components/User/feature/Signup';
import Login from '../components/User/feature/Login';
import Logout from '../components/User/feature/Logout';
import MyProfile from '../components/User/feature/MyProfile';
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import AdminLogin from '../components/Admin/feature/Login'
import Dashboard from '../components/Admin/feature/Dashboard';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<UserModule />}>
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
        </Route>


        <Route path='admin' element={<AdminModule />}>
          <Route path='' element={<AdminLogin />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
    </Routes>
  )
}

export default AllRoutes