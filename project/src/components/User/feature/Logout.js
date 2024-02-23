import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { isLoggedin } from '../../../redux/UserAuthSlice'

const Logout = () => {
  let disp = useDispatch();
    // let navigate = useNavigate();
    localStorage.removeItem("name");
    localStorage.removeItem("access-token");
    disp(isLoggedin(false));
    // navigate("/login");
  return (
    <Navigate to="/login" />
  )
}

export default Logout