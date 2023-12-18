import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Component/Feature/Home'
import About from '../Component/Feature/About'
import Cart from '../Component/Feature/Cart'
import SingleProduct from '../Component/Feature/SingleProduct'
import Signup from '../Component/Feature/Signup'
import Login from '../Component/Feature/Login'



const AllRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/> 
       <Route path='cart' element={<Cart/>}/>  
       <Route path='singleproduct' element={<SingleProduct/>}/>
       <Route path='signup' element={<Signup/>}/>
       <Route path='login'element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes