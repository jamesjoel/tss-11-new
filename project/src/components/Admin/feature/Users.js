import React, {useState, useEffect} from 'react'
import { getAllUser, changeStatus } from '../../../services/UserService'

const Users = () => {

  let [allUser, setAllUser] = useState([]);
  useEffect(()=>{
    getUser();
  },[])

  let getUser = async()=>{
    let response = await getAllUser();
    setAllUser(response.result);
  }

  let change = async(obj)=>{
    let newobj = {};

    if(obj.status == 1){
      newobj.status = 0;
    }
    else{
      newobj.status = 1;
    }
    await changeStatus(obj._id, newobj);

   setAllUser((x)=>{
    let y = x.map(value=>{
        if(value._id == obj._id){
          return {...value, ...newobj}
        }else{
          return value;
        }
    })
    return y;
    
   })

  }
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-12">
          <h4>List of All Users</h4>
          <table className="table table-dark table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Change</th>
              </tr>

            </thead>
            <tbody>
              {
                allUser.map((value, index)=> <tr key={value._id}>
                    <td>{index+1}</td>
                    <td>{value.name}</td>
                    <td>{value.username}</td>
                    <td>{value.contact}</td>
                    <td>{value.status==1 ? 'Active' : 'Deactive' }</td>
                    <td><button onClick={()=>change(value)} className='btn btn-info btn-sm'>Change</button></td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users


/*
  let [data, setData] = useState(["rohit", "amar", "vijay", "nidhi"])
  let i = 2;
  let a = "nilesh";

  let newdata = data.map((value, index)=>{
                  if(index==i){
                    value = a;
                  }
                  return value;
                })

  setData(return data.map((value, index)=>{
                  if(index==i){
                    value = a;
                  }
                  return value;
                }));
  



*/