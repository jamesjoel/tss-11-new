import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/featured/Home'
import Product from '../components/featured/Product'
import Details from '../components/featured/Details'
import Student from '../components/featured/Student'
import About from '../components/featured/About'
import More from '../components/featured/More'
import Info from '../components/featured/Info'
import AboutModule from '../modules/AboutModule'
import TeacherModule from '../modules/TeacherModule'
import Teacher from '../components/featured/Teacher'
import Status from '../components/featured/Status'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='details/:x' element={<Details />} />
        <Route path='student' element={<Student />} />
        {/* <Route path='about' element={<About />} />
        <Route path='about/more' element={<More />} />
        <Route path='about/info' element={<Info />} /> */}
        <Route path='about' element={<AboutModule />}>
          <Route path='' element={<About />} />
          <Route path='more' element={<More />}/>
          {/* :3000/about/more */}
          <Route path='info' element={<Info />}/>
        </Route>

        <Route path='teacher' element={<TeacherModule />}>
          <Route path='' element={<Teacher />} />
          <Route path='status' element={<Status />} />
        </Route>


    </Routes>
  )
}

export default AllRoutes