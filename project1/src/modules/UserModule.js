import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Component/User/Shared/Header'
import Footer from '../Component/User/Shared/Footer'

const UserModule = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserModule