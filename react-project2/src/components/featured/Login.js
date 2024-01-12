import React, {useState} from 'react'

const Login = () => {

let[ num , setnum]= useState(2500)
 
  let demo =()=>{
    setnum(()=>{
      if (num >1000)
      { 
        let x = num / 2;
        return x
      }
      else{
        let x =num / 4 ;
        return x
      }
      })  
      }

  return (
    <>
    <div className='container'>Login</div>
    <h1>{num}</h1>
    <button onClick={demo}>change</button>
    </>
  )
}

export default Login