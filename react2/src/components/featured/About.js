import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { inc, dec, multi, div } from '../../redux/CounterSlice'


const About = () => {
  
  let dispatch = useDispatch();
  let counter = useSelector(state=>state);

  let demo1 = ()=>{
    dispatch(inc(1));
  }

  return (
    <div className="container my-4">
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <h1>About Page</h1>
          <h2>{counter}</h2>
          <br />
          <button onClick={demo1} className='btn btn-success'>+</button>
          <button onClick={()=>dispatch(dec(2))}  className='btn btn-danger'>-</button>
          <button onClick={()=> dispatch(multi(5))} className='btn btn-info'>X</button>
          <button onClick={()=>dispatch(div(2))} className='btn btn-warning'>/</button>
        </div>
      </div>
    </div>    
  )
}

export default About