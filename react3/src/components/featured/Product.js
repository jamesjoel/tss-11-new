import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../util/API_URL'
import { NavLink } from 'react-router-dom'

const Product = () => {
    let [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}`).then(response=>{
            setProduct(response.data.products);
        })
    },[])

  return (
    <div className="container my-4">
        <div className="row">

            {
                product.map(value=>{
                    return(
                    <div className="col-md-3">
                        <div className="card m-3">
                            <img className="card-img-top" src={value.thumbnail} style={{height : "200px"}} alt="Card image" />
                            <div className="card-body">
                                <h6 style={{height : "50px"}} className="card-title m-0">{value.title}</h6>
                                <p className="card-text ">{value.category} ${value.price}</p>
                                <NavLink to={"/details/"+value.id} className="btn btn-primary">Detail</NavLink>
                            </div>
                        </div>
                    </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Product

/*

let arr = {};

arr.map()



*/