import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../util/API_URL';

const Details = () => {
    let [pro, setPro] = useState({});
    let param = useParams();
    console.log(param);


    

    // 
    // https://dummyjson.com/products/10
    useEffect(()=>{
        let id = param.x;
        console.log(id);
        axios.get(`${API_URL}/${id}`).then(response=>{
            console.log("******",response.data);
            setPro(response.data);
        })
    },[])

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='row'>
                            {
                                pro.images ? 
                            
                            (<div className='col-md-3'>
                                {
                                    pro.images[0] ? <img src={pro.images[0]} style={{height : "100px", width : "70px"}}/> : ''
                                }
                                {
                                    pro.images[1] ? <img src={pro.images[1]} style={{height : "100px", width : "70px"}}/> : ''
                                }
                                {
                                    pro.images[2] ? <img src={pro.images[2]} style={{height : "100px", width : "70px"}}/> : ''
                                }
                                {
                                    pro.images[3] ? <img src={pro.images[3]} style={{height : "100px", width : "70px"}}/> : ''
                                }
                                {
                                    pro.images[4] ? <img src={pro.images[4]} style={{height : "100px", width : "70px"}}/> : ''
                                }
                                
                                
                        </div>) : '' }
                            <div className='col-md-9'>
                            <img src={pro.thumbnail} style={{width : "350px", height : "550px"}}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <h3>{pro.title}</h3>
                        <small className='badge bg-info'>{pro.rating}</small>
                        <p>{pro.description}</p>
                        <h5><del>${pro.price}</del> ${pro.discountPercentage}</h5>
                        <p className='text-success'>{pro.category}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details