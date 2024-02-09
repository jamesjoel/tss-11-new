import React, {useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const UserProtectedModule = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("access-token"))
        {
            navigate("/login")
        }
    },[])


  return (
    <Outlet />
  )
}

export default UserProtectedModule