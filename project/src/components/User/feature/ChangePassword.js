import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import ChangePasswordSchema from '../../../schemas/ChangePasswordSchema'
import {useFormik} from 'formik'

import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");
    let [formValues, setFormValues] = useState({
        current_password : "",
        new_password : "",
        confirm_new_password : ""
    })
    let changeForm = useFormik({
        validationSchema : ChangePasswordSchema,
        initialValues : formValues,
        onSubmit : (formdata)=>{
            axios.post(`${API_URL}auth/changepassword`, formdata, {
                headers : {Authorization : localStorage.getItem("access-token")}
            }).then(response=>{
                console.log(response.data)
                if(response.data.success==true)
                {
                    navigate("/my-profile")
                }else{
                    setErrMsg("Your Current Password is Wrong !!!");
                }
            })
        }
    })

  return (
    <div className="container" style={{minHeight : "600px", marginTop : "100px"}}>
        <div className="row">
            <div className="col-md-8 offset-md-2 p-5" style={{backgroundColor : "rgb(242, 129, 35)", borderRadius : "10px", boxShadow : "0px 0px 10px #000"}}>
                <h4 className='text-light text-center'>Change Your Password</h4>
                <div className='card'>
                    <form onSubmit={changeForm.handleSubmit}>
                    <div className='card-body'>
                        <div className="my-3">
                            <label>Current Password</label>
                            <input type='text' name='current_password' onChange={(event)=>{changeForm.handleChange(event); setErrMsg("")}} className={'form-control '+(changeForm.errors.current_password && changeForm.touched.current_password ? 'is-invalid' : '')} />
                            {
                                changeForm.errors.current_password && changeForm.touched.current_password ? <small className='text-danger'>{changeForm.errors.current_password}</small> : ''
                            }
                            {
                                errMsg ? <small className='text-danger'>{errMsg}</small> : ''
                            }
                        </div>
                        <div className="my-3">
                            <label>New Password</label>
                            <input type='text' name='new_password' onChange={changeForm.handleChange} className={'form-control '+(changeForm.errors.new_password && changeForm.touched.new_password ? 'is-invalid' : '')}  />
                            {
                                changeForm.errors.new_password && changeForm.touched.new_password ? <small className='text-danger'>{changeForm.errors.new_password}</small> : ''
                            }
                        </div>
                        <div className="my-3">
                            <label>Confirm New Password</label>
                            <input type='password' name='confirm_new_password' onChange={changeForm.handleChange} className={'form-control '+(changeForm.errors.confirm_new_password && changeForm.touched.confirm_new_password ? 'is-invalid' : '')}  />
                            {
                                changeForm.errors.confirm_new_password && changeForm.touched.confirm_new_password ? <small className='text-danger'>{changeForm.errors.confirm_new_password}</small> : ''
                            }
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                    </form>
                </div>

                <NavLink className="btn btn-dark m-3" to="/my-profile">Back</NavLink>
                
            </div>
        </div>
    </div>
  )
}

export default ChangePassword