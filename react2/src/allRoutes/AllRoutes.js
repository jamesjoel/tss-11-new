import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/featured/Home'
import About from '../components/featured/About'
import Contact from '../components/featured/Contact'
import Login from '../components/featured/Login'

const AllRoutes = () => {
  return (
              <Routes>
                    <Route path="" element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="contact" element={<Contact />}/>
                    <Route path="login" element={<Login />}/>
                    
              </Routes>
  )
}

export default AllRoutes