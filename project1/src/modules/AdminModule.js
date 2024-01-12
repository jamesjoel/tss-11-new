import React from 'react'
import Header from '../Component/Admin/Shared/Header'
import Footer from '../Component/Admin/Shared/Footer'
import { Outlet } from 'react-router-dom'

const AdminModule = () => {
  return (
    <>
    <Header/>
    <div className="container" style={{minHeight : '700px'}}>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default AdminModule;