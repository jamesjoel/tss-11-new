import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Student from './components/Student'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='student' element={<Student />} />
    </Routes>
  )
}

export default AllRoutes