import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/User/shared/Header'
import Slider from '../components/User/shared/Slider'
import Footer from '../components/User/shared/Footer'

const UserModule = () => {
  return (
    <>
      <Header />
      <Slider />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserModule