import React, {useState} from 'react'
import axios from 'axios'

const Demo = () => {

    let [pro, setPro] = useState([]);
    let [spinner, setSpinner] = useState(false);

    let getproduct = ()=>{
        setSpinner(true);
        axios.get("https://fakestoreapi.com/products").then(response=>{
            setPro(response.data);
            setSpinner(false);
        })
    }

  return (
    <div className="container my-4" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-12">
                  <button className='btn btn-success' onClick={getproduct}>Get Product { spinner==true ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>  
                  <div className='row'>

                        {
                            pro.map((value, index)=>{
                                return(
                                    <div className='col-md-3'>
                                        <div className='card m-3 border border-dark'>
                                            <div className='card-header' style={{minHeight : "60px"}}>
                                                <h6>{value.title}</h6>
                                            </div>
                                            <div className='card-body'>
                                                <img src={value.image} style={{height : "200px"}}/>
                                                <p className='m-0 p-0'><b>Price : </b>$ {value.price}</p>
                                                <p className='m-0 p-0'>{value.category}</p>
                                            </div>
                                            <div className='card-footer'>
                                                <button className='btn btn-info btn-sm'>Buy</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                  </div>
            </div>
        </div>
    </div>
  )
}

export default Demo