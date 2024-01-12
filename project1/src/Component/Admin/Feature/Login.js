import React,{useState , useEffect} from 'react'
import {useFormik} from 'formik';
import AdminLoginSchema from '../../../schems/AdminLoginSchema';
import {API_URL} from '../../../Util/API_URL';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'

const Login = () => {

 useEffect(()=>{
 if(localStorage.getItem("admin-token")){
  nagivate("/admin/dashboard")
 }
 },[])

let [errMsg, setErrMsg] = useState('');
let nagivate=useNavigate();

let LoginForm = useFormik({
  validationSchema : AdminLoginSchema,
  initialValues : {
    username : "",
    password : ""
  },
  onSubmit : (formdata)=>{
    axios.post(`${API_URL}admin-auth`,formdata).then(response=>{
      //console.log(response.data);
          if(response.data.success==false && response.data.type==1)
          {
            setErrMsg('This username and password is invalid');
          }
          if(response.data.success==false && response.data.type==2)
          {
            setErrMsg('This password is invalid');
          }
          if(response.data.success==true )
          {
            localStorage.setItem("admin-token" , response.data.token)
            nagivate("/admin/dashboard ")
          }
    })
  }
});

  return (

    <>
    <div className="container ">
      <form onSubmit={LoginForm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <div className="card-header bg-dark text-light">
              <h4 className='text-light'>AdminLogin</h4>
              </div>
            <div className="card-body">
              <div className="form-group">
                <label>UserName</label>
                <input type="text " name="username" className={'form-control '+ (LoginForm.errors.username && LoginForm.touched.username ? 'is-invalid' : "")} onChange={LoginForm.handleChange} />
                 {
                  LoginForm.errors.username && LoginForm.touched.username ? <small className='text-danger'>{LoginForm.errors.username}</small> : ""
                 }
              </div>

              
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className={'form-control '+(LoginForm.errors.username && LoginForm.touched.username ? 'is-invalid' : "")} onChange={LoginForm.handleChange} />
                {
                  LoginForm.errors.password && LoginForm.touched.password ? <small className='text-danger'>{LoginForm.errors.password}</small> : ""
                }
              </div>
            </div>
            <div className="card-footer">
              <button type='submit' className='btn btn-info'> Login</button>
              {
                errMsg ? <div className="alert alert-danger my-2">{errMsg} </div> : ""
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