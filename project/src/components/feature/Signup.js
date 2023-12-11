import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useFormik } from 'formik';

const Signup = () => {

    let signupForm = useFormik({ 
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
            console.log("*******", formdata);
        }
     });


    let [city, setCity] = useState([]);
    let [state, setState] = useState([]);
    

    


    useEffect(()=>{
        axios.get("http://localhost:8080/api/city/state").then(response=>{
            setState(response.data);
        })
    },[])
 

    let getCity = (event)=>{
        // console.log("******", event.target.value);
        let x = event.target.value;
        axios.get("http://localhost:8080/api/city/getcity/"+x).then(response=>{
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
                            <input type='text' onChange={signupForm.handleChange} name='name' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <label>Email/Username</label>
                            <input type='text' onChange={signupForm.handleChange} name='username' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <label>Password</label>
                            <input type='password' onChange={signupForm.handleChange} name='password' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <label>Re-Password</label>
                            <input type='password' onChange={signupForm.handleChange} name='repassword' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <label>Address</label>
                            <textarea className='form-control' onChange={signupForm.handleChange} name='address' ></textarea>
                        </div>
                        <div className='my-3'>
                            <label>State</label>
                            <select onChange={(e)=>{ getCity(e); signupForm.handleChange(e) }} name='state' className='form-control'>
                                <option>Select</option>
                                {
                                    state.map(value=><option>{value}</option>)
                                }
                            </select>
                        </div>

                        <div className='my-3'>
                            <label>City</label>
                            <select className='form-control' onChange={signupForm.handleChange} name='city'>
                                <option>Select</option>
                                {
                                    city.map(value=><option>{value.name}</option>)
                                }
                            </select>
                        </div>
                        <div className='my-3'>
                            <label>Gender</label><br />
                            Male&nbsp;&nbsp;&nbsp;<input type='radio' onChange={signupForm.handleChange} name='gender' value="male"/>
                            &nbsp;&nbsp;&nbsp;
                            Female&nbsp;&nbsp;&nbsp;<input type='radio' onChange={signupForm.handleChange} name='gender' value="female"/>
                        </div>
                        <div className='my-3'>
                            <label>Contact</label>
                            

                                    <input type='text' onChange={signupForm.handleChange} name='contact' placeholder='Contact' className='form-control' />
                            
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