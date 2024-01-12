import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Feature/Home'
import Users from '../Component/Feature/Users'
import UserDetail from '../Component/Feature/UserDetail'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='users' element={<Users/>}/>
        <Route path='userdetail' element={<UserDetail/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes


