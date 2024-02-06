import React, {useState, useEffect, useRef} from 'react'
import { getAllSubCategory, deleteSubCategory } from '../../../services/SubCategoryService'
import { useNavigate } from 'react-router-dom';


const SubCategoryList = () => {
  let navigate = useNavigate();
  let [subCate, setSubCate] = useState({});
  let btn = useRef();
  
  
  let [allSubCate, setAllSubCate] = useState([]);
  useEffect(()=>{
    getSubCate();
  },[])

  let getSubCate = async()=>{
    let response = await getAllSubCategory();
    setAllSubCate(response.result);
  }

  let askDelete=(obj)=>{
    setSubCate(obj);
  }
  let confDelete = async()=>{
    await deleteSubCategory(subCate._id);
    
    setAllSubCate(()=>{
      return allSubCate.filter(value=>value._id != subCate._id);
    })
    btn.current.click();
    
  }

  let askEdit = (obj)=>{
    navigate(`/admin/sub-category/edit/${obj._id}`);
  }
  return (
    <>
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Category</th>
                <th>Sub-Category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                allSubCate.map((value, index)=>{
                  return(
                    <tr key={value._id}>
                      <td>{index+1}</td>
                      <td>{value.category}</td>
                      <td>{value.name}</td>
                      <td><button onClick={()=>askEdit(value)} className='btn btn-info btn-sm'>Edit</button></td>
                      <td><button onClick={()=>askDelete(value)} data-target="#delModal" data-toggle="modal" className='btn btn-danger btn-sm'>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="modal fade" id="delModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Delete Sub-Category</h4>
          </div>
          <div className="modal-body">
            <p>Are you sure want to delete {subCate ? <b>{subCate.name}</b> : ''}</p>
          </div>
          <div className="modal-footer">
            <button className='btn btn-dark btn-sm' ref={btn} data-dismiss="modal">Close</button>
            <button onClick={confDelete} className='btn btn-danger btn-sm' >Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SubCategoryList