import React from 'react'
import Header from '../components/Admin/shared/Header'
import Footer from '../components/Admin/shared/Footer'
import {Outlet} from 'react-router-dom'

const AdminModule = () => {
  return (
    <>
    <Header />
    <div className='container' style={{minHeight : "700px"}}>

      <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default AdminModule