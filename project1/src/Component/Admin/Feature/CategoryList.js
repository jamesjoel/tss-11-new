import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {API_URL} from '../../../Util/API_URL'

const CategoryList = () => {

let [allCate, setAllCate]=useState([]);

useEffect(()=>{
  axios.get(`${API_URL}category`).then(response=>{
    setAllCate(response.data.result);
  })
},[])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-dark h4 text-center">
          List of Categories
        </div>
        <table className="table table-bordered table-hover table-dark table striped">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              allCate.map((value,index)=>{
                return(
                  <tr key={index}>
                    <th>{index+1}</th>
                    <th>{value.name}</th>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CategoryList