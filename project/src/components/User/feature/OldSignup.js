import React, {useState, useEffect} from 'react'
import axios from 'axios'

const OldSignup = () => {


    let [city, setCity] = useState([]);
    let [state, setState] = useState([]);
    let [country, setCountry] = useState([]);

    let [code, setCode] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:8080/api/country").then(response=>{
            setCountry(response.data);
        })
    },[])


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

    let getCode = (event)=>{
        let x = event.target.value;
        axios.get("http://localhost:8080/api/country/getcode/"+x).then(response=>{
            // console.log(response.data);
            setCode(response.data.dial_code);
        })
    }


  return (
    <div className="container my-5" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3">

                
                <div className='card'>
                    <div className='card-header'>
                        <h5>User Registration</h5>
                    </div>
                    <div className='card-body'>
                        <div className='my-3'>
                            <label>Full Name</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <label>Email/Username</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <label>Password</label>
                            <input type='password' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <label>Re-Password</label>
                            <input type='password' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <label>Address</label>
                            <textarea className='form-control' ></textarea>
                        </div>
                        <div className='my-3'>
                            <label>State</label>
                            <select onChange={(event)=>getCity(event)} className='form-control'>
                                <option>Select</option>
                                {
                                    state.map(value=><option>{value}</option>)
                                }
                            </select>
                        </div>

                        <div className='my-3'>
                            <label>City</label>
                            <select className='form-control' >
                                <option>Select</option>
                                {
                                    city.map(value=><option>{value.name}</option>)
                                }
                            </select>
                        </div>
                        <div className='my-3'>
                            <label>Gender</label><br />
                            Male&nbsp;&nbsp;&nbsp;<input type='radio' />
                            &nbsp;&nbsp;&nbsp;
                            Female&nbsp;&nbsp;&nbsp;<input type='radio' />
                        </div>
                        <div className='my-3'>
                            <label>Contact</label>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <select onChange={(event)=>getCode(event)} className='form-control'>
                                        <option>Country</option>
                                        {
                                            country.map(value=><option>{value.name}</option>)
                                        }
                                    </select>

                                </div>
                                <div className='col-md-3'>
                                    <input type='text' value={code} placeholder='Code' className='form-control' />

                                </div>
                                <div className='col-md-6'>

                                    <input type='text' placeholder='Contact' className='form-control' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-success'>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OldSignup