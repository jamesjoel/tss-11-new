import React ,{useState} from 'react'
import {useFormik } from 'formik'
import * as YUP from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../../Util/API_URL'


let loginSchema = YUP.object({
  username :  YUP.string().email("insert email").required("Insert your email"),
  password : YUP.string().required("Insert your password")

})

const Login = () => {

  let navigate = useNavigate();
  let [errMsg , setErrMsg] = useState("");

let loginFrm = useFormik({
  validationSchema : loginSchema,
  initialValues : {
    username : "",
    password : ""
  }, 
  onSubmit : (formdata)=>{
    axios.post(`${API_URL}auth`,formdata).then(response=>{
      if(response.data.success == true)
      {
        localStorage.setItem("access-token",response.data.token);
          navigate("/")
      };
        //err mes ke liye
      if(response.data.success == false && response.data.type == 1){
        setErrMsg("This email and password is invalid")
      }
      
      if(response.data.success == false && response.data.type == 2){
        setErrMsg("This password is invalid")
      }
    }) 
  }
})

  return (
    <div className='container my-5 '> 
    <form onSubmit={loginFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header bg-info">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <div className="my-3">
              <label> Username/email</label>
              <input type="text" name='username'  onChange={loginFrm.handleChange} className={'form-control ' +  (loginFrm.errors.username && loginFrm.touched.username ? 'is-invalid' : "")} />
              {
                loginFrm.errors.username && loginFrm.touched.username ? <small className='text-danger'>{loginFrm.errors.username}</small> : ""
              }
              </div>
              
              <div className="my-3">
              <label> Password</label>
              <input type="password" name="password" onChange={loginFrm.handleChange} className={'form-control '+ (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : "")} />
              {
                loginFrm.errors.password && loginFrm.touched.password ? <small className='text-danger' > {loginFrm.errors.password}</small> : ""
              }
              </div>
            </div>
            <div className="card-footer">
              <button  className='btn btn-info'type='submit' >Login </button>
              {
                errMsg ? 
                <div className="alert mt-3 alert-danger">{errMsg}</div>
                : ""
              }
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Login;