import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'

const ProductList = () => {
  let [allPro, setAllPro] = useState([]);
  useEffect(()=>{
    getAllPro();
  },[])

  let getAllPro = async()=>{
    let response = await axios.get(`${API_URL}product`);
    setAllPro(response.data.result);
  }
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-12">
          <h4>List of All Product</h4>
          <table className="table table-bordered table-hover table-striped table-dark">
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
                      <td><button className='btn btn-danger btn-sm'>Delete</button></td>
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

export default ProductList