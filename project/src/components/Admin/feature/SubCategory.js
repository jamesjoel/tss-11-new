import React, {useState, useEffect} from 'react'

import SubCateSchema  from '../../../schemas/SubCateSchema'

import {useFormik} from 'formik'
import {useNavigate, useParams} from 'react-router-dom'
import { getAllCategory } from '../../../services/CategoryService'
import { saveSubCategory, getOneSubCategory, updateSubCategory } from '../../../services/SubCategoryService'

const SubCategory = () => {
  let param = useParams();
  let navigate = useNavigate();
  let [subcate, setSubCate] = useState({
    category : "",
    name : ""
  })
  let [allCate, setAllCate] = useState([]);

  useEffect(()=>{
   
    
    if(param.id){
      getSubCate();
    }

    getAllcate();

  },[])

  let getSubCate = async()=>{
    let response = await getOneSubCategory(param.id);
    console.log(response)
    setSubCate(response.result);
  }
  let getAllcate = async()=>{
    let response = await getAllCategory();
    setAllCate(response.result);
  }

  let subCateForm = useFormik({
    enableReinitialize : true,
    validationSchema : SubCateSchema,
    initialValues : subcate,
    onSubmit : async (formdata)=>{
      if(param.id){
        await updateSubCategory(param.id, formdata);
        navigate("/admin/sub-category/list");
      }else{
        await saveSubCategory(formdata);
        navigate("/admin/sub-category/list");

      }
      
    }
  })

  return (
    <div className="container my-4">
      <form onSubmit={subCateForm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>{param.id ? "Update" : "Add"} Sub-Category</h4>
          <div className="my-3">
            <label>Select Category</label>
            <select value={subCateForm.values.category} name='category' onChange={subCateForm.handleChange} className={'form-control '+(subCateForm.errors.category && subCateForm.touched.category ? 'is-invalid' : '')}>
              <option value="">Select</option>
              {
                allCate.map(value=><option key={value._id} value={value.name}>{value.name}</option>)
              }

            </select>
          </div>
          <div className="my-3">
            <label htmlFor="">Sub-Category Name</label>
            <input value={subCateForm.values.name} name='name' onChange={subCateForm.handleChange} type='text' className={'form-control '+(subCateForm.errors.name && subCateForm.touched.name ? 'is-invalid' : '')} />
          </div>
          <br />
          <button type='submit' className='btn btn-success'>{param.id ? "Update" : "Add"}</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default SubCategory