import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/featured/Home'
import About from '../components/featured/About'
import Contact from '../components/featured/Contact'
import Login from '../components/featured/Login'
import Demo1 from '../components/featured/Demo1'

const AllRoutes = () => {
  return (
              <Routes>
                    <Route path="" element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="contact" element={<Contact />}/>
                    <Route path="login" element={<Login />}/>
                    <Route path='demo1' element={<Demo1 />} />
                    
              </Routes>
  )
}

export default AllRoutes