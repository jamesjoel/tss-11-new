import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEmp, delEmp } from '../../redux/EmployeeSlice'


const Employee = () => {

  let disp = useDispatch();
  let [employee, setEmployee] = useState({
    id : "",
    name : "",
    salary : ""
  })

  let emp = useSelector(state=>state); 

  let submit = ()=>{
   disp(addEmp(employee))   
  }
  let empty = ()=>{
    
    setEmployee({id : "", name : "", salary : ""})
    console.log(employee)
  }
  return (
    <>
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <button onClick={empty} data-bs-toggle="modal" data-bs-target="#addModal" className='btn btn-info'>Add</button>
          <table className='table table-dark my-4'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                emp.map((value, index)=><tr key={value.id}>
                  <td>{index+1}</td>
                  <td>{value.name}</td>
                  <td>{value.salary}</td>
                  <td><button onClick={()=>disp(delEmp(value))} className='btn btn-danger'>Del</button></td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>


        <div id="addModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4>Add Employee</h4>
              </div>
              <div className="modal-body">
                <div className="my-3">
                  <label>Name</label>
                  <input type='text' value={employee.name} onChange={(event)=>setEmployee({...employee, name : event.target.value })} className='form-control' /> 
                </div>
                <div className="my-3">
                  <label>Salary</label>
                  <input type='text' value={employee.salary} onChange={(event)=>setEmployee({...employee, salary : event.target.value })} className='form-control' /> 
                </div>
              </div>
              <div className="modal-footer">
                <button onClick={submit} className='btn btn-success' data-bs-dismiss="modal">Submit</button>
                <button className='btn btn-danger' data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Employee