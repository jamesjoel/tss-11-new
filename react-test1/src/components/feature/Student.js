import React, {useEffect, useState, useRef} from 'react'
import { getAllStudent, deleteStudent } from '../../services/StudentService'
import {NavLink, useNavigate} from 'react-router-dom'

const Student = () => {
  let navigate = useNavigate();
  let closeBtn = useRef();
  let [allStu, setAllStu] = useState([]);
  let [stu, setStu] = useState();

  useEffect(()=>{
    getStudent();
  },[])

  let getStudent = async()=>{
    let response = await getAllStudent();
    setAllStu(response);
  }

  let askDelete = (obj)=>{
    setStu(obj);
  }

  let confDelete = async()=>{
    await deleteStudent(stu);
    closeBtn.current.click();
    setAllStu(allstu=>{
      return allstu.filter(value=>value.id != stu.id);
    })

  }

  let askEdit = (obj)=>{
    navigate("/student/update/"+obj.id);
  }

  return (
    <>
    <div className='row'>
      <div className='col-md-12'>
        <NavLink to="/student/add" className="btn btn-info">Add New Student</NavLink>
        {
          allStu.length > 0 
          ?
          <table className='table table-dark my-4'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Class</th>
              <th>Contact</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allStu.map((value, index)=><tr key={value.id}>
                <td>{index+1}</td>
                <td>{value.name}</td>
                <td>{value.class}</td>
                <td>{value.contact}</td>
                <td><button onClick={()=>askEdit(value)} className='btn btn-info btn-sm'>Edit</button></td>
                <td><button onClick={()=>askDelete(value)} data-bs-toggle="modal" data-bs-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
              </tr>)
            }
          </tbody>
        </table>
        :
        <div className='alert alert-warning my-4'>
            No Data Found
        </div>
        }
      </div>
    </div>

        <div className="modal fade" id="delModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4>Delete Student</h4>
              </div>
              <div className="modal-body">
                <p>Are you sure want to delete {stu ? <b>{stu.name}</b> : ''}</p>
              </div>
              <div className="modal-footer">
                <button onClick={confDelete} className='btn btn-danger btn-sm'>Delete</button>
                <button data-bs-dismiss="modal" ref={closeBtn} className='btn btn-dark btn-sm'>Close</button>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default Student