import React, {useEffect, useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL';
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
    <div className="container" style={{minHeight : "600px", marginTop : "100px"}}>
        <div className="row">
            <div className="col-md-8 offset-md-2 p-5" style={{backgroundColor : "rgb(242, 129, 35)", borderRadius : "10px", boxShadow : "0px 0px 10px #000"}}>
                <h4 className='text-light text-center'>User Profile</h4>
                <table className="table table-light table-bordered table-striped table-hover">
                    <tbody>
                        <tr>
                            <td>Full Name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Email/Username</td>
                            <td>{user.username}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{user.address}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{user.contact}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{user.state}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{user.city}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{user.gender}</td>
                        </tr>
                    </tbody>
                </table>

                <NavLink className="btn btn-dark m-3" to="/my-profile/update">Update Profile</NavLink>
                <NavLink className="btn btn-dark m-3" to="/my-profile/changepassword">Change Password</NavLink>
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