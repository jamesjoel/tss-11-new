import React, {useState} from 'react'

const Login = () => {

  let [num, setNum] = useState(0)

  let demo1 = ()=>{
      setNum(()=>{
        let x = num+1;
        return x;
      })
  }
  let demo2 = ()=>{
    setNum(()=>{
      let x = num-1;
      return x;
    })
  }
  


  return (
    <div className='container my-5'>
      <h2>{num}</h2>
      <button onClick={demo1} className='btn btn-info'>+</button>
      <button onClick={demo2} className='btn btn-danger'>-</button>
    </div>
  )
}

export default Login
