import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../Util/API_URL';


const Profile = () => {

let [pro ,setPro] = useState({})
let navigate= useNavigate();
useEffect(()=>{
    if (! localStorage.getItem("access-token"))
    {
        navigate("/login")
    }
},[]);

useEffect(()=>{
    axios.get(`${API_URL}user-profile`,{
        headers : { Authorization : localStorage.getItem("access-token")}
    })
    .then(response=>{
        setPro(response.data.result)
    })
})

  return (
   <div className="container" style={{minHeight : "700px"}}>
    <div className="col-md-6 offset-md-3">
        <div className="row">
            <table className='table table-dark table-hover'>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{pro.name}</td>
                    </tr>
                    <tr>
                        <td>UserName</td>
                        <td>{pro.username}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{pro.address}</td>
                    </tr><tr>
                        <td>City</td>
                        <td>{pro.city}</td>
                    </tr><tr>
                        <td>State</td>
                        <td>{pro.state}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
   </div>
  )
};

export default Profile