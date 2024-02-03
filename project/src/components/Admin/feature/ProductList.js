import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'

const ProductList = () => {
  let btn = useRef();
  let [allPro, setAllPro] = useState([]);
  let [pro, setPro] = useState({})
  useEffect(()=>{
    getAllPro();
  },[])

  let getAllPro = async()=>{
    let response = await axios.get(`${API_URL}product`);
    setAllPro(response.data.result);
  }

  let askDelete = (obj)=>{
    setPro(obj);
  }

  let confDelete = async()=>{
    let response = await axios.delete(`${API_URL}product/${pro._id}`);
    setAllPro(()=>{
      return allPro.filter(value=> value._id != pro._id);
    });
    btn.current.click();
  }
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-12">
          <h4>List of All Product</h4>
          
          {
            allPro.length > 0 ? <table className="table table-bordered table-hover table-striped table-dark">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Sub-Category</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                allPro.map((value, index)=>{
                  return(
                    <tr key={value._id}>
                      <td>{index+1}</td>
                      <td>{value.title}</td>
                      <td>{value.price}</td>
                      <td>{value.category}</td>
                      <td>{value.subcategory}</td>
                      <td><button data-toggle="modal" data-target="#delModal" onClick={()=>askDelete(value)} className='btn btn-danger btn-sm'>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table> : <div className='alert alert-info my-4'>No Record Found !</div>
          }
          
          

          
        </div>
      </div>

            <div className="modal fade" id="delModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4>Delete Product</h4>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure want to delete this { pro ? <b>{pro.title}</b> : "" }</p>
                  </div>
                  <div className="modal-footer">
                    <button className='btn btn-dark btn-sm' data-dismiss="modal" ref={btn}>Close</button>
                    <button className='btn btn-danger btn-sm' onClick={confDelete}>Delete</button>
                  </div>
                </div>
              </div>
            </div>

    </div>
  )
}

export default ProductList