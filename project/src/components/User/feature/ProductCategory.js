import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios, { all } from 'axios';
import { API_URL } from '../../../util/API_URL';
import ProductBox from '../shared/ProductBox';


const ProductCategory = () => {
  let param = useParams();
  let catename = param.catename;
  let [allPro, setAllPro] = useState([]);
  useEffect(()=>{
    getProduct();
  },[catename])

  let getProduct = async()=>{
    let response = await axios.get(`${API_URL}product-category/category/${catename}`);
    setAllPro(response.data.result);
  }

  return (
    <div className='container mb-4' style={{minHeight : "600px", marginTop : "120px"}}>
        
        <div className='row'>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-header'>
                <h5>Filters</h5>
              </div>
              <div className="card-body">

              </div>
            </div>
          </div>
          <div className='col-md-9'>
          <h4>Category : {catename}</h4>
          <div className='row'>
          {
            allPro.map(value=>{
              return <ProductBox info={value}/>
            })
          }
          </div>
          </div>
        </div>
        
    </div>
  )
}

export default ProductCategory