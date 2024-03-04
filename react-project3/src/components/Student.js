import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {delStu, addStu, updateStu} from '../redux/StudentSlice'

const Student = () => {

  let [newStu, setNewStu] = useState({ name : "", age : ""})
  let dispatch = useDispatch();
  let data = useSelector(state=>state.StudentSlice);
  let del = (obj)=>{
    dispatch(delStu(obj));
  }
  let add = ()=>{
    if(newStu.id){
      dispatch(updateStu(newStu));

    }else{

      dispatch(addStu(newStu));
    }
    setNewStu({ name : "", age : ""});
  }


  let edit = (obj)=>{
    setNewStu(obj);
  }
  let reset = ()=>{
    setNewStu({ name : "", age : ""});
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <div className='row'>
          <div className='col-md-5'>
            <input type='text' value={newStu.name} onChange={(event)=>setNewStu({...newStu, name : event.target.value})} className='form-control' placeholder='Name'/>
          </div>
          <div className='col-md-5'>
            <input type='text' value={newStu.age} onChange={(event)=>setNewStu({...newStu, age : event.target.value})} className='form-control' placeholder='Age'/>
          </div>
          <div className='col-md-2'>
            <button onClick={add} className='btn btn-primary'>{newStu.id ? 'Update' : 'Add' }</button>
            {
              newStu.id ? <button onClick={reset} className='btn btn-danger'>X</button> : ''
            }
          </div>

        </div>
        <br />
        <table className="table table-dark">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((value, index)=><tr key={value.id}>
                <td>{index+1}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td><button onClick={()=>edit(value)} className='btn btn-info'>Edit</button></td>
                <td><button onClick={()=>del(value)} className='btn btn-danger'>Delete</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student