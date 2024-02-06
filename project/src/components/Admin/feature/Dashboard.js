import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL';
import { useFormik } from 'formik';


const Dashboard = () => {

  let [stu, setStu] = useState({ name : "rohit", age : "25" })
  let myForm = useFormik({
    enableReinitialize : true,
    initialValues : stu,
    onSubmit : (formdata)=>{

    }
  })
  let file = useRef();
  
  let upload = ()=>{
    // console.log(file.current.files[0])
    let filedata = file.current.files[0];
    let frm = new FormData(); // I have to create a <form> by FormData() fun
    frm.append("image", filedata);

    axios.post(`${API_URL}demo`, frm).then(response=>{
      console.log(response.data);
    })
  }
  return (
      <>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <h5>File Upload in React</h5>
                
                  <label>Select Any File</label>
                  <br /><br />
                  <input type='file' ref={file}/>
                  <br />
                  <br />
                  <button type='submit' onClick={upload} className='btn btn-primary'>Upload</button>
                
            </div>
          </div>

          <div className='row'>
            <div className='col-md-8'>
              <form>
                <label>Name</label>
                <input type='text' value={myForm.values.name} name='name' className='form-control'/>
                <label>Age</label>
                <input type='text' value={myForm.values.age} name='age' className='form-control'/>
              </form>
            </div>
          </div>
        </div>
      </>
  )
}

export default Dashboard