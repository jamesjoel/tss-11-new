import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Student from './components/Student'
import User1 from './components/User1'
import User2 from './components/User2'
import Emi from './components/Emi'
import Test from './components/Test'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='student' element={<Student />} />
        <Route path='user1' element={<User1 />} />
        <Route path='user2' element={<User2 />} />
        <Route path='emi' element={<Emi />} />
        <Route path='test' element={<Test />} />
    </Routes>
  )
}

export default AllRoutes