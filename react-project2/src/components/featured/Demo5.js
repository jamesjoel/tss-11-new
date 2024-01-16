
import React, {useState , useEffect} from "react"
import axios from "axios"

const Demo5 = () => {

let [ user , setuser]=useState([]);

useEffect(()=>{
//net work request code here
 axios.get("https://jsonplaceholder.typicode.com/users").then(responce=>{
    setuser(responce.data)

 })

},[]);

  return (

    <div>
   <h3>All User</h3>
    <table className="table table-dark table-hover table-borderd table-striped">
        <thead>
            <tr>
                <th>s.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((value , index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.address.city}</td>
                           <td>{value.company.name}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>

    </div>
  )
}

export default Demo5