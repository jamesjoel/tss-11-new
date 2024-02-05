import React, { useState, useEffect } from 'react'
import {useFormik} from 'formik'
import CateSchema from '../../../schemas/CateSchema'
import {useNavigate} from 'react-router-dom'
import { saveCategory } from '../../../services/CategoryService'

const Category = () => {

  let [cate, setCate] = useState({ name : "" })
  let navigate = useNavigate();

  let cateForm = useFormik({
    validationSchema : CateSchema,
    initialValues : cate,
    onSubmit : async (formdata)=>{
        let response = await saveCategory(formdata);
        navigate("/admin/category/list")
    }
  })

  return (
    <div className='container my-4'>
      <form onSubmit={cateForm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <h4>Add New Category</h4>
            <div className="my-2">
              <label>Category Name</label>
              <input type='text' name='name' onChange={cateForm.handleChange} className={'form-control ' + (cateForm.errors.name && cateForm.touched.name ? 'is-invalid' : '')} />
            </div>
            <br />
            <button type='submit' className='btn btn-success'>Add</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Category