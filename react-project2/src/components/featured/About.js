
import React , {useState} from 'react'

const About = () => {

  let [a, b] = useState(14);

  let demo =()=>{
  
  b(()=>{
    let x = a+1;
    return x
  })
  }

  let demo1 =()=>{
  
    b(()=>{
      let x = a-1;
      return x
    })
    }
    
  return (
    <div className='container'>
        <div className="col-md-12">
        
          <h1>{a}</h1>
          
          <button onClick={demo}>+</button>
          <button onClick={demo1}>-</button>

        </div>
    </div>
  )
}

export default About