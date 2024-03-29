import React, { useState, useEffect } from 'react'
import {useFormik} from 'formik'
import CateSchema from '../../../schemas/CateSchema'
import {useNavigate} from 'react-router-dom'
import { saveCategory, getOneCategory, updateCategory } from '../../../services/CategoryService'
import { useParams } from 'react-router-dom'

const Category = () => {

  let param = useParams();
  let [cate, setCate] = useState({ name : "" })
  useEffect(()=>{
    if(param.id){
      getCategory();
    }else{
      setCate({ name : ""})
    }
  },[param])
  
  let getCategory = async()=>{
    let response = await getOneCategory(param.id);
    // console.log(response)
    setCate(response.result);
  }


  
  let navigate = useNavigate();

  let cateForm = useFormik({
    enableReinitialize : true,
    validationSchema : CateSchema,
    initialValues : cate,
    onSubmit : async (formdata)=>{
      if(param.id){
        await updateCategory(param.id, formdata);
        navigate("/admin/category/list")
      }else{

        let response = await saveCategory(formdata);
        navigate("/admin/category/list")
      }
    }
  })

  return (
    <div className='container my-4'>
      <form onSubmit={cateForm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <h4>{param.id ? "Update" : "Add New"} Category</h4>
            <div className="my-2">
              <label>Category Name</label>
              <input type='text' value={cateForm.values.name} name='name' onChange={cateForm.handleChange} className={'form-control ' + (cateForm.errors.name && cateForm.touched.name ? 'is-invalid' : '')} />
            </div>
            <br />
            <button type='submit' className='btn btn-success'>{param.id ? "Update" : "Add" }</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Category