import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Contact = () => {

    let [user, setUser] = useState([]);

    useEffect(()=>{
        // network request code here
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
            // console.log(response.data)
            setUser(response.data);

        })

    },[])


  return (
    <div className="container my-5" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <h3>All Users</h3>
                <table className="table table-dark table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((value, index)=>{
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
        </div>
    </div>
  )
}

export default Contact