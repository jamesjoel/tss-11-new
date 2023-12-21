import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as YUP from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

let loginSchema = YUP.object({
  email : YUP.string().email("Invalid Email").required("Insert Email Id"),
  password : YUP.string().required("Insert Password")
})

const Login = () => {

  let navigate = useNavigate();
  let [errMsg, setErrMsg] = useState("")
  let [spinner, setSpinner] = useState(false);

  let loginFrm = useFormik({
    validationSchema : loginSchema,
    initialValues : {
      email : "",
      password : ""
    },
    onSubmit : (formdata)=>{
      setSpinner(true);
      axios.post("https://api.escuelajs.co/api/v1/auth/login", formdata)
      .then(response=>{
        localStorage.setItem("access-token", response.data.access_token);
        navigate("/profile");
      })
      .catch((err)=>{
        setSpinner(false);
        setErrMsg("This Email Id and Password is Invalid");
      })
    }
  })

  return (
    <div className="container my-4">
      <form onSubmit={loginFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <div className="my-3">
                <label>Username/Email</label>
                <input name='email' onChange={loginFrm.handleChange} type='text' className={'form-control '+ (loginFrm.errors.email && loginFrm.touched.email ? 'is-invalid' : '')} />
              </div>
              <div className="my-3">
                <label>Password</label>
                <input name='password' onChange={loginFrm.handleChange} type='password' className={'form-control '+ (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')} />
              </div>
            </div>
            <div className="card-footer">
              <button type='submit' className='btn btn-success'>Login {spinner ? <span className='spinner-border spinner-border-sm'></span> : '' }</button>
              {
                errMsg ? <div className='alert mt-4 alert-danger'>
                          {errMsg}
                        </div> 
                      : 
                        ''
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