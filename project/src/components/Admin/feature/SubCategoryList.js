import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'



const SubCategoryList = () => {
  
  let [allSubCate, setAllSubCate] = useState([]);
  useEffect(()=>{
    axios.get(`${API_URL}subcategory`).then(response=>{
      setAllSubCate(response.data.result);
    })
  },[])
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Category</th>
                <th>Sub-Category</th>
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

export default SubCategoryList