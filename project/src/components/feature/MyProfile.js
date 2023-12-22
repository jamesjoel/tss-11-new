import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../util/API_URL';
const MyProfile = () => {
    let [user, setUser] = useState({});
    let navigate = useNavigate();
    useEffect(()=>{

        if(! localStorage.getItem("access-token"))
        {
            navigate("/login");
        }

    },[])
    // localhost:8080/api/user-profile
    useEffect(()=>{
        axios.get(`${API_URL}user-profile`, {
            headers : { Authorization : localStorage.getItem("access-token") }
        }).then(response=>{
            console.log(response.data);
            setUser(response.data.result);
        })
    },[])


  return (
    <div className="container my-4" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-12">
                <h4>User Profile</h4>
                <b>Full Name : {user.name}</b>
                <br />
                <br />
                <b>Username/Email : {user.username}</b>
            </div>
        </div>
    </div>
  )
}

export default MyProfile
/*
    let a = 100;
    if(a)



*/