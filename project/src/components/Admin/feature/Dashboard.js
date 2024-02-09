import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL';
import { useFormik } from 'formik';


const Dashboard = () => {

  let sendMail = ()=>{
    axios.get(`${API_URL}sendmail`).then(response=>{
      console.log(response.data);
    })
  }
  
  return (
      <>
        <div className='container my-5'>
          <div className='row'>
            <div className="col-md-12">
            <h4 className='text-center'>Admin Dashboard</h4>
            <button onClick={sendMail} className='btn btn-info'>Send Mail</button>
            </div>
          </div>  
        </div>
      </>
  )
}

export default Dashboard