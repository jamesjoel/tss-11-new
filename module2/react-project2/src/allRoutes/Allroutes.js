import React from 'react'
import {Routes ,Route } from 'react-router-dom'
import Home from '../components/featured/Home'
import About from '../components/featured/About'
import Login from '../components/featured/Login'
import Contact from '../components/featured/Contact'
import Demo1 from '../components/featured/Demo1'
import Demo2 from '../components/featured/Demo2'
import Demo3 from '../components/featured/Demo3'
import Demo4 from '../components/featured/Demo4'
import Demo5 from '../components/featured/Demo5'
import Demo6 from '../components/featured/Demo6'
const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Demo1" element={<Demo1/>}/>
        <Route path="Demo2" element={<Demo2/>}/>
        <Route path="Demo3" element={<Demo3/>}/>
        <Route path="Demo4" element={<Demo4/>}/>
        <Route path="Demo5" element={<Demo5/>}/>
        <Route path ="Demo6" element ={<Demo6/>}/>
     </Routes>
    </>
  )
}

export default Allroutes