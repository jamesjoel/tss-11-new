import React,{useState} from 'react'
const Demo1 =()=>{

  let [ a , seta ] = useState(0);
  let [ b , setb] = useState(0);

  let task = (event)=>{
    seta (event.clientX)
    setb(event.clientY)
  }

  return (

    <>
    <br />
    <br />
    <h2>X : {a}, Y : {b} </h2>
    <div onMouseMove={(event)=>task(event)}    
     style={{height : "300px", width : "300px", backgroundColor : 'yellow', }}></div>
    <br />
    <br />
    </>
  )
  }

export default Demo1