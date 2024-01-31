import React, {useEffect, useRef} from 'react'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL';


const Dashboard = () => {

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
        </div>
      </>
  )
}

export default Dashboard