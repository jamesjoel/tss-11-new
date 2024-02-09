import React, {useState} from 'react'
import { useFormik } from 'formik'
import LoginSchema from '../../../schemas/LoginSchema'
import axios from 'axios';
import {API_URL} from '../../../util/API_URL';
import {useNavigate} from 'react-router-dom'
import ProductBox from '../shared/ProductBox';

const Login = () => {

    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");
    let loginFrm = useFormik({
        validationSchema : LoginSchema,
        initialValues : {
            username : "",
            password : ""
        },
        // localhost:8080/api/auth
        onSubmit : (formdata)=>{
            axios.post(`${API_URL}auth`, formdata).then(response=>{

                //console.log(response.data);

                if(response.data.success == true)
                {
                    // console.log(response.data);
                    localStorage.setItem("name", response.data.name);
                    localStorage.setItem("access-token", response.data.token)
                    navigate("/");
                }

                if(response.data.success == false && response.data.type == 1)
                {
                    setErrMsg("This Username/Email and Password is Incorrect !");
                }
                if(response.data.success == false && response.data.type == 2)
                {
                    setErrMsg("This Password is Incorrect !");
                }
                if(response.data.success == false && response.data.type == 3)
                {
                    setErrMsg("You are De-Activate Now...");
                }
            })
        }
    })

  return (
    <div className="container" style={{minHeight : "700px", marginTop : "150px"}}>
        <form onSubmit={loginFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h5>User Login</h5>
                    </div>
                    <div className="card-body">
                        <div className='my-3'>
                            <label>Username/Email</label>
                            <input type='text' onChange={loginFrm.handleChange} name='username' className={'form-control '+(loginFrm.errors.username && loginFrm.touched.username ? 'is-invalid' : '')} />
                            {
                                loginFrm.errors.username && loginFrm.touched.username ? <small className='text-danger'>{loginFrm.errors.username}</small> : ''
                            }
                        </div>
                        <div className='my-3'>
                            <label>Password</label>
                            <input type='password' onChange={loginFrm.handleChange} name='password' className={'form-control '+(loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')} />
                            {
                                loginFrm.errors.password && loginFrm.touched.password ? <small className='text-danger'>{loginFrm.errors.password}</small> : ''
                            }
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-success'>Login</button>
                        {
                            errMsg ? <div className='alert my-3 alert-danger'>{errMsg}</div> : ''
                        }
                    </div>
                </div>
                
            </div>
        </div>
        </form>
        
    </div>
  )
}

export default Login
/*
    when you send formdata into this api
    "http://localhost:8080/api/auth"
    then we will return these type of response
        1. if username and password both are incorrect then you receive
            a object { success : false, type : 1}
        2. if username is correct  and password  incorrect then you receive
            a object { success : false, type : 2}
        3. if username and password both are correct then you reve
            a object {success : true, token : "any token"}
        */

// eyJjYyI6eyJ0dGwiOjE3MDI5NzA1ODEsInZhbCI6IlUyRnRaVk5wZEdVOVRHRjRPdz09In0sImRkdGMiOnsidHRsIjoxNzAyOTcwNTgxLCJ2YWwiOiIxIn19