import React, { useState} from 'react'
import axios from 'axios';

const Demo6 = () => {

let [pro, setpro]=useState([]);

let getProduct  =()=>{
    axios.get("https://dummyjson.com/products").then(responce=>{
        setpro(responce.data.products);
    })


}

  return (
    <div>
    <div className="container my-4" style={{minHeight : " 700px"}}> 
    
    <button className='btn btn-success' onClick={getProduct}>Show Product</button>
     <div className="row">
        
     <div className="col-md-12">
     </div>

    <div className="row">
        
        {
            pro.map((value)=>{
                return( <div className="col-md-4">
                <br />
                <br />
             
                        <div className="card border-dark">
                            <div className="  card-header"><h3>{value.brand}</h3></div>
                            <div className="  card card-body">
                                <img src={value.thumbnail} style={{height:"250px"}} className='m-0 p-0'/>
                                <p className='m-0 p-0'><b>Price</b>={value.price}</p>
                                <b>{value.category}</b>
                            </div>
                            <div className="card-footer"></div>
                        </div>
                    </div>)
            })
        }
    </div>
     </div>
    </div>
    </div>
  )
}

export default Demo6