import React from 'react'
import{Navigate} from 'react-router-dom'

const AdminLogout = () => {
  localStorage.removeItem("admin-token")
  return (

    <Navigate to='/'/>
  )
}

export default AdminLogout