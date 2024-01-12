import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik';
import AdminLoginSchema from '../../../schemas/AdminLoginSchema'
import { API_URL } from '../../../util/API_URL';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let [errMsg, setErrMsg] = useState("");
  let navigate = useNavigate();


  useEffect(()=>{
    if(localStorage.getItem("admin-token")){
      navigate("/admin/dashboard");
    }
  },[])

  let loginForm = useFormik({
    validationSchema : AdminLoginSchema,
    initialValues : {
      username : "",
      password : ""
    },
    onSubmit : (formdata)=>{
      axios.post(`${API_URL}admin-auth`, formdata).then(response=>{

        if(response.data.success == true)
        {
          localStorage.setItem("admin-token", response.data.token);
          navigate("/admin/dashboard");
        }


        if(response.data.success == false && response.data.type == 1)
        {
          setErrMsg("This Username and Password is Incorrect");
        }
        if(response.data.success == false && response.data.type == 2)
        {
          setErrMsg("This Password is Incorrect");
        }
      })
    }
  })

  return (
    <>
      <div className="container">
        <form onSubmit={loginForm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card my-5">
              <div className="card-header">
                <h4>Administator Login</h4>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Username</label>
                  <input type='text' name='username' onChange={loginForm.handleChange} className={'form-control ' + (loginForm.errors.username && loginForm.touched.username ? 'is-invalid' : '')} />
                  {
                    loginForm.errors.username && loginForm.touched.username ? <small className='text-danger'>{ loginForm.errors.username }</small> : ''
                  }
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type='password' name='password' onChange={loginForm.handleChange} className={'form-control ' + (loginForm.errors.password && loginForm.touched.password ? 'is-invalid' : '')} />
                  {
                    loginForm.errors.password && loginForm.touched.password ? <small className='text-danger'>{ loginForm.errors.password }</small> : ''
                  }
                </div>
                <br />
                <button type="submit" className='btn btn-success'>Login</button>
                <br />
                {
                  errMsg ? <div className='alert alert-danger my-2'>{errMsg}</div>: ''
                }
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default Login