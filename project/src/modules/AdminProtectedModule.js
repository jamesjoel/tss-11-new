import React, {useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminProtectedModule = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("admin-token"))
        {
            navigate("/");
        }
    },[])

  return (
    <Outlet />
  )
}

export default AdminProtectedModule