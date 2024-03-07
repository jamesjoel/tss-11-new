import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/feature/Home'
import Student from '../components/feature/Student'
import StudentAdd from '../components/feature/StudentAdd'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='student' element={<Student />} />
            <Route path='student/add' element={<StudentAdd />} />
            <Route path='student/update/:id' element={<StudentAdd />} />
        </Routes>
    </>
  )
}

export default AllRoutes