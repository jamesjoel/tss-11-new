import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SubCateSchema  from '../../../schemas/SubCateSchema'
import { API_URL } from '../../../util/API_URL'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom'

const SubCategory = () => {
  let navigate = useNavigate();
  let [subcate, setSubCate] = useState({
    category : "",
    name : ""
  })
  let [allCate, setAllCate] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}category`).then(response=>{
      setAllCate(response.data.result);
    })
  },[])

  let subCateForm = useFormik({
    validationSchema : SubCateSchema,
    initialValues : subcate,
    onSubmit : (formdata)=>{
      axios.post(`${API_URL}subcategory`, formdata).then(response=>{
        navigate("/admin/sub-category/list");
      })
    }
  })

  return (
    <div className="container my-4">
      <form onSubmit={subCateForm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="my-3">
            <label>Select Category</label>
            <select name='category' onChange={subCateForm.handleChange} className={'form-control '+(subCateForm.errors.category && subCateForm.touched.category ? 'is-invalid' : '')}>
              <option value="">Select</option>
              {
                allCate.map(value=><option key={value._id} value={value.name}>{value.name}</option>)
              }

            </select>
          </div>
          <div className="my-3">
            <label htmlFor="">Sub-Category Name</label>
            <input name='name' onChange={subCateForm.handleChange} type='text' className={'form-control '+(subCateForm.errors.name && subCateForm.touched.name ? 'is-invalid' : '')} />
          </div>
          <br />
          <button type='submit' className='btn btn-success'>Add</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default SubCategory