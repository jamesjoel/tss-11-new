import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/featured/Home'
import About from '../components/featured/About'
import Contact from '../components/featured/Contact'
import Login from '../components/featured/Login'
import Demo1 from '../components/featured/Demo1'
import Demo2 from '../components/featured/Demo2'
import Demo3 from '../components/featured/Demo3'
import Demo4 from '../components/featured/Demo4'

const AllRoutes = () => {
  return (
              <Routes>
                    <Route path="" element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="contact" element={<Contact />}/>
                    <Route path="login" element={<Login />}/>
                    <Route path='demo1' element={<Demo1 />} />
                    <Route path='demo2' element={<Demo2 />} />
                    <Route path='demo3' element={<Demo3 />} />
                    <Route path='demo4' element={<Demo4 />} />
                    
              </Routes>
  )
}

export default AllRoutes