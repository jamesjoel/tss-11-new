import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useFormik} from 'formik'

import SignupSchema from '../../schems/SignupSchema';

import { API_URL } from '../../Util/API_URL';

const Signup = () => {

  let signupForm= useFormik({
    validationSchema : SignupSchema,
    initialValues : {
      name : "",
      username  : "",
      password : "",
      repassword : "",
      address : "",
      state : "",
      city : "",
      contact : "",
      gender : "",
  },
  onSubmit: (formdata)=>{
    axios.post(`${API_URL}signup`,formdata).then(response=>{
      console.log(response.data);
    })
  }
  });
 
  let [city, setcity]= useState([]);
  let [state, setstate]=useState([]);


  useEffect(()=>{
    axios.get(`${API_URL}city/state`).then(response=>{
        setstate(response.data)
    })
  },[])


  let getcity =(event)=>{
    let x = event.target.value;
    axios.get(`${API_URL}city/getcity/${x}`).then(response=>{
      setcity(response.data);
    })
  }

  return (
    <form onSubmit={ signupForm.handleSubmit}>
    <div className="row" >
      <div className="col-md-6 offset-md-3 mt-5 my-5">
        <div className="card">  

        <div className="card-header">User Login</div>

            <div className="card-body">
            <div className="my-3">

                <label >Full Name</label>
                <input type="text " name ='name' onChange={ signupForm.handleChange} className={'form-control  ' + (signupForm.errors.name && signupForm.touched.name ? 'is-invalid' : '')}/>
                {
                  signupForm.errors.name && signupForm.touched.name? <small className='text-danger'>{signupForm.errors.name}</small> : ""
                }
            </div>
            <div className="my-3">
                <label >username/Email</label>
                <input type="password " name='username' onChange={signupForm.handleChange} className={'form-control ' + (signupForm.errors.username && signupForm.touched.username ? 'is-invalid'  :'')}/>
                {signupForm.errors.username && signupForm.touched.username ? <small className='text-danger'>{signupForm.errors.username}</small> : ''}
            </div>
            <div className="my-3">
                <label >Password</label>
                <input type="password" name='password' onChange={signupForm.handleChange} className={'form-control ' + (signupForm.errors.password && signupForm.touched.password ? 'is-invalid' : '')}/>
                {
                  signupForm.errors.password && signupForm.touched.password ? <small className="text-danger">{signupForm.errors.password}</small> : ""
                }
            </div>
            <div className="my-3">
                <label >Re-Password</label>
                <input type="password" name ='repassword' onChange={signupForm.handleChange}
                className={'form-control '+ (signupForm.errors.repassword && signupForm.touched.repassword ? 'is-invalid' :'')}/>
                {
                  signupForm.errors.repassword && signupForm.touched.repassword? <small className='text-danger'>{signupForm.errors.repassword}</small> : ''
                }
            </div>
            <div className="my-3">
                <label >Address </label>
                 <textarea  className={'form-control ' +(signupForm.errors.address && signupForm.touched.address ? 'is-invalid' : '')} onChange={signupForm.handleChange} name='address'> </textarea>
                 {
                  signupForm.errors.address && signupForm.touched.address ? <small className='text-danger'> {signupForm.errors.address}</small> : ''
                 }
            </div>
            <div className="my-3">
                <label >State </label>
                 <select className={'form-control ' +(signupForm.errors.state && signupForm.touched.state ? 'is-invalid' : '')} name='state' onChange={(e)=>{getcity(e) ; signupForm.handleChange(e)}}>
                    <option > select </option>
                    {
                        state.map(value=><option>{value}</option>)
                    }
                 </select>
                 {
                    signupForm.errors.state && signupForm.touched.state ? <small className='text-danger'>{signupForm.errors.state}</small> : ''
                  }
            </div>
            <div className="my-3">
                <label >City</label>
                 <select className={'form-control ' + (signupForm.errors.city && signupForm.touched.city ? 'in-invalid' : '')} name='city' onChange={signupForm.handleChange}>
                    <option > select </option>
                    {
                        city.map(value=><option>{value.name}</option>)
                    }
                 </select>
                 {
                    signupForm.errors.city && signupForm.touched.city ? <small className='text-danger'>{signupForm.errors.city}</small>  : ''
                  }
            </div>
            <div className="my-2">
                <label >Contact </label>
                <input type="text " onChange={signupForm.handleChange} className={'form-control ' + (signupForm.errors.contact && signupForm.touched.contact ? 'is-invalid' : "")} name='contact'/>
                {
                  signupForm.errors.contact && signupForm.touched.contact ? <small className='text-danger'>{signupForm.errors.contact}</small> : ''
                }
            </div>
        </div>
        
        <div className="my-3">
          <label>Gender</label><br/>
          Male <input type='radio' name='gender' onChange={signupForm.handleChange} value="male" ></input>
          FeMale <input type='radio' name='gender' onChange={signupForm.handleChange} value="female"></input>
        </div>
        
        <div className="card-footer">
            <button type='submit'className='btn btn-denger'>submit</button>
        </div>
        
        </div>
      </div>
    </div>
    </form>
  )
}

export default Signup