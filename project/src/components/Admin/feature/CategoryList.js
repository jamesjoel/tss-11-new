import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'

const CategoryList = () => {

  let [allCate, setAllCate] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}category`).then(response=>{
      setAllCate(response.data.result);
    })
  },[])

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h4>List of All Categories</h4>
          <table className="table table-bordered table-hover table-striped table-dark">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {
                allCate.map((value, index)=>{
                  return(
                    <tr key={index}>
                      <td>{index+1}</td>
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

export default CategoryList