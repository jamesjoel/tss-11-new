import React,{useState,useEffect} from 'react'
import {useFormik} from 'formik'
import CateSchema from '../../../schems/CateSchema'
import axios from 'axios'
import { API_URL } from '../../../Util/API_URL'
import { useNavigate } from 'react-router-dom'

const Category = () => {


let [cate,setCate]=useState({name : ""})
let navigate = useNavigate();

let cateForm = useFormik({
  validationSchema : CateSchema,
  initialValues : cate,
  //initialValues : name:""
  onSubmit : (formdata)=>{
  axios.post(`${API_URL}category` , formdata).then(response=>{
  console.log(response.data);
   navigate ('/admin/category/list')
  })

  }
});

  return (
    <div className="container">
      <form onSubmit={cateForm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card mt-2">
              <div className="card-header "><h4 className='text-center'>Add new Category</h4></div>
              <div className="card-body">
                <label className='text-dark mt-2' >Category Name</label>
                <input type="text" onChange={cateForm.handleChange} name='name' className={'form-control '+(cateForm.errors.name && cateForm.touched.name ? 'is-invalid' : "")}/></div>
              <div className="card-footer">
                <button type='submit' className='btn btn-info'>Add</button>
              </div>
            </div>
          </div>
      </div>
      </form>
    </div>
  )
}

export default Category;