import React, {useState, useEffect, useRef} from 'react'
import {useFormik} from 'formik';
import ProductSchema from '../../../schemas/ProductSchema'
import {API_URL} from '../../../util/API_URL'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Product = () => {

  let navigate = useNavigate();
  let [cate, setCate] = useState([]);
  let [subcate, setSubCate] = useState([]);
  let file = useRef();

  useEffect(()=>{
    getCategory();
  })

  let getCategory = async ()=>{
    let response = await axios.get(`${API_URL}category`);
    setCate(response.data.result);
  }

  let [pro, setPro] = useState({
    title : "",
    price : "",
    discount : "",
    quantity : "",
    category : "",
    subcategory : "",
    detail : "",
    image : ""
  })

  let proForm = useFormik({
    validationSchema : ProductSchema,
    initialValues : pro,
    onSubmit : async(formdata)=>{
      let filedata = file.current.files[0];
      let frm = new FormData();
      frm.append("image", filedata);
      frm.append("formdata", JSON.stringify(formdata));
      let response = await axios.post(`${API_URL}product`, frm);
      navigate("/admin/product/list")
    }
  })

  let getSubCategory = async (a)=>{
      let response = await axios.get(`${API_URL}subcategory/subcate/${a}`)
      setSubCate(response.data.result);
  }

  return (
    <div className='container my-4'>
      <form onSubmit={proForm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <h4>Add New Product</h4>
            <div className="my-2">
              <label>Product Title</label>
              <input type='text' name='title' onChange={proForm.handleChange} className={'form-control ' + (proForm.errors.title && proForm.touched.title ? 'is-invalid' : '')} />
              {
                proForm.errors.title && proForm.touched.title ? <small className='text-danger'>{proForm.errors.title}</small> : ''
              }
            </div>
            <div className="my-2">
              <label>Product Price</label>
              <input type='text' name='price' onChange={proForm.handleChange} className={'form-control ' + (proForm.errors.price && proForm.touched.price ? 'is-invalid' : '')} />
            </div>
            <div className="my-2">
              <label>Product Image</label>
              <input type='file' ref={file} name='image' onChange={(event)=>proForm.handleChange(event)} className={'form-control ' + (proForm.errors.image && proForm.touched.image ? 'is-invalid' : '')} />
              {
                proForm.errors.image && proForm.touched.image ? <small className='text-danger'>{proForm.errors.image}</small> : ''
              }
            </div>
            <div className="my-2">
              <label>Product Category</label>
              <select name='category' onChange={(event)=>{proForm.handleChange(event); getSubCategory(event.target.value)}} className={'form-control ' + (proForm.errors.category && proForm.touched.category ? 'is-invalid' : '')} >
                <option value="">Select</option>
                {
                  cate.map(value=><option key={value._id} value={value.name}>{value.name}</option>)
                }
              </select>
            </div>
            <div className="my-2">
              <label>Product Sub-Category</label>
              <select name='subcategory' onChange={proForm.handleChange} className={'form-control ' + (proForm.errors.subcategory && proForm.touched.subcategory ? 'is-invalid' : '')} >
                <option value="">Select</option>
                {
                  subcate.map(value=><option value={value.name} key={value._id}>{value.name}</option>)
                }
              </select>
            </div>
            <div className="my-2">
              <label>Product Discount</label>
              <input type='text' name='discount' onChange={proForm.handleChange} className={'form-control ' + (proForm.errors.discount && proForm.touched.discount ? 'is-invalid' : '')} />
            </div>
            <div className="my-2">
              <label>Product Detail</label>
              <textarea name='detail' onChange={proForm.handleChange} className={'form-control ' + (proForm.errors.detail && proForm.touched.detail ? 'is-invalid' : '')} ></textarea>
            </div>
            <div className="my-2">
              <label>Product Quantity</label>
              <input type='text' name='quantity' onChange={proForm.handleChange} className={'form-control ' + (proForm.errors.quantity && proForm.touched.quantity ? 'is-invalid' : '')} />
            </div>
            <br />
            <button type='submit' className='btn btn-success'>Add</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Product