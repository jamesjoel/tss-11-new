import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useFormik } from 'formik';


import SignupSchema from '../../schemas/SignupSchema';
import { API_URL } from '../../util/API_URL';
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    let navigate = useNavigate();
    let signupForm = useFormik({ 
        validationSchema : SignupSchema,
        initialValues : {
            name : "",
            username : "",
            password : "",
            repassword : "",
            contact : "",
            state : "",
            city : "",
            gender : "",
            address : ""
        },
        onSubmit : (formdata)=>{
            axios.post(`${API_URL}signup`, formdata).then(response=>{
                if(response.data.success==true)
                {
                    navigate("/login");
                }
            })
        }
        // localhost:8080/api/signup
     });


    let [city, setCity] = useState([]);
    let [state, setState] = useState([]);
    

    


    useEffect(()=>{
        axios.get(`${API_URL}city/state`).then(response=>{
            setState(response.data);
        })
    },[])
 

    let getCity = (event)=>{
        // console.log("******", event.target.value);
        let x = event.target.value;
        axios.get(`${API_URL}city/getcity/${x}`).then(response=>{
            // console.log(response.data);
            setCity(response.data);
        })
    }

    


  return (
    <div className="container my-5" style={{minHeight : "700px"}}>
        <form onSubmit={signupForm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">

                
                <div className='card'>
                    <div className='card-header'>
                        <h5>User Registration</h5>
                    </div>
                    <div className='card-body'>
                        <div className='my-3'>
                            <label>Full Name</label>
                            <input type='text' onChange={signupForm.handleChange} name='name' className={'form-control ' + (signupForm.errors.name && signupForm.touched.name ? 'is-invalid' : '')} />
                            {
                                signupForm.errors.name && signupForm.touched.name ? <small className='text-danger'>{signupForm.errors.name}</small> : ''
                            }
                            
                        </div>
                        <div className='my-3'>
                            <label>Email/Username</label>
                            <input type='text' onChange={signupForm.handleChange} name='username' className={'form-control '+ (signupForm.errors.username && signupForm.touched.username ? 'is-invalid' : '')} />
                            {
                                signupForm.errors.username && signupForm.touched.username ? <small className='text-danger'>{signupForm.errors.username}</small> : ''
                            }
                        </div>
                        <div className='my-3'>
                            <label>Password</label>
                            <input type='password' onChange={signupForm.handleChange} name='password' className={'form-control ' + (signupForm.errors.password && signupForm.touched.password ? 'is-invalid' : '')} />
                            {
                                signupForm.errors.password && signupForm.touched.password ? <small className='text-danger'>{signupForm.errors.password}</small> : ''
                            }
                        </div>
                        <div className='my-3'>
                            <label>Re-Password</label>
                            <input type='password' onChange={signupForm.handleChange} name='repassword' className={'form-control ' + (signupForm.errors.repassword && signupForm.touched.repassword ? 'is-invalid' : '')} />
                            {
                                signupForm.errors.repassword && signupForm.touched.repassword ? <small className='text-danger'>{signupForm.errors.repassword}</small> : ''
                            }
                        </div>
                        <div className='my-3'>
                            <label>Address</label>
                            <textarea className={'form-control ' + (signupForm.errors.address && signupForm.touched.address ? 'is-invalid' : '')} onChange={signupForm.handleChange} name='address' ></textarea>
                            {
                                signupForm.errors.address && signupForm.touched.address ? <small className='text-danger'>{signupForm.errors.address}</small> : ''
                            }
                        </div>
                        <div className='my-3'>
                            <label>State</label>
                            <select onChange={(e)=>{ getCity(e); signupForm.handleChange(e) }} name='state' className={'form-control ' + (signupForm.errors.state && signupForm.touched.state ? 'is-invalid' : '')}>
                                <option>Select</option>
                                {
                                    state.map(value=><option>{value}</option>)
                                }
                            </select>
                            {
                                signupForm.errors.state && signupForm.touched.state ? <small className='text-danger'>{signupForm.errors.state}</small> : ''
                            }
                        </div>

                        <div className='my-3'>
                            <label>City</label>
                            <select className={'form-control ' + (signupForm.errors.city && signupForm.touched.city ? 'is-invalid' : '')} onChange={signupForm.handleChange} name='city'>
                                <option>Select</option>
                                {
                                    city.map(value=><option>{value.name}</option>)
                                }
                            </select>
                            {
                                signupForm.errors.city && signupForm.touched.city ? <small className='text-danger'>{signupForm.errors.city}</small> : ''
                            }
                        </div>
                        <div className='my-3'>
                            <label>Gender</label><br />
                            Male&nbsp;&nbsp;&nbsp;<input type='radio' onChange={signupForm.handleChange} name='gender' value="male"/>
                            &nbsp;&nbsp;&nbsp;
                            Female&nbsp;&nbsp;&nbsp;<input type='radio' onChange={signupForm.handleChange} name='gender' value="female"/>
                            <br />
                            {
                                signupForm.errors.gender && signupForm.touched.gender ? <small className='text-danger'>{signupForm.errors.gender}</small> : ''
                            }
                        </div>
                        <div className='my-3'>
                            <label>Contact</label>
                            

                                    <input type='text' onChange={signupForm.handleChange} name='contact' placeholder='Contact' className={'form-control ' + (signupForm.errors.contact && signupForm.touched.contact ? 'is-invalid' : '')} />
                                    {
                                signupForm.errors.contact && signupForm.touched.contact ? <small className='text-danger'>{signupForm.errors.contact}</small> : ''
                            }
                            
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-success'>Signup</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Signup