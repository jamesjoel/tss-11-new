import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {isLoggedInAdmin} from '../../../redux/AdminAuthSlice'

const Logout = () => {
  let disp = useDispatch();
    localStorage.removeItem("admin-token");
    disp(isLoggedInAdmin(false));
  return (
    <Navigate to="/" />
  )
}

export default Logout