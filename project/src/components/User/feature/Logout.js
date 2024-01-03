import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Logout = () => {
    // let navigate = useNavigate();
    localStorage.removeItem("access-token");
    // navigate("/login");
  return (
    <Navigate to="/login" />
  )
}

export default Logout