import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Demo7 = () => {

  let[demo,setDemo]=useState([]);

  useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
    setDemo(response.data);
  })
  
  })
  
  return (
    <>

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center h3 my-10" >
          All users
          <table className="table table-hover table-dark table-borderd ">
            <thead>
              <tr>
                <td>S.no</td>
                <td>Name</td>
                <td>Email</td>
                <td>City</td>
              </tr>
            </thead>
            <tbody>
              {
                demo.map((value,index)=>{
                  return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{value.name}</td>
                      <td>{value.email}</td>
                      <td>{value.address.city}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Demo7