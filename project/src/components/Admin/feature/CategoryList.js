import React, {useEffect, useState, useRef} from 'react'


import { getAllCategory, deleteCategory } from '../../../services/CategoryService'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {

  let navigate = useNavigate();
  let x = useRef();
  let [allCate, setAllCate] = useState([]);
  let [cate, setCate] = useState({});

  

  useEffect(()=>{
    getCate();
  },[])

  let getCate = async()=>{
   let response = await getAllCategory();
   setAllCate(response.result);
  
  }

  let askDelete = (obj)=>{
    // console.log("*****", obj);
    setCate(obj);
  }

  let confDelete = async()=>{
      // let response = await axios.delete(`${API_URL}category/${cate._id}`);
      let response = await deleteCategory(cate._id);


      setAllCate(()=>{
          return allCate.filter(value=> value._id != cate._id )
        })
      x.current.click();
  }

  let askEdit = (obj)=>{
    navigate(`/admin/category/edit/${obj._id}`);
  }

  return (
    <>
    
    <div className="container my-3">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h4>List of All Categories</h4>
          {
            allCate.length > 0 ? <table className="table table-bordered table-hover table-striped table-dark">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                allCate.map((value, index)=>{
                  return(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{value.name}</td>
                      <td><button onClick={()=>askEdit(value)} className='btn btn-info btn-sm'>Edit</button></td>
                      <td><button onClick={()=>askDelete(value)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table> 
          : 
          <div className='alert alert-danger'>No Data Found</div>

          }
        </div>
      </div>
    </div>

    <div id='delModal' className='modal fade'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4>Delete Category</h4>
          </div>
          <div className='modal-body'>
            <p>Are sure want to delete { cate ? <b>{cate.name}</b> : '' }</p>
          </div>
          <div className='modal-footer'>
            <button className='btn btn-info btn-sm' ref={x} data-dismiss="modal">Close</button>
            <button className='btn btn-danger btn-sm' onClick={confDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CategoryList