import React,{useState} from 'react'

const Demo2 = () => {

    let [a, setA] = useState(0)
    let [b, setB] = useState(0)

    let task = (event)=>{
        setA(event.clientX)
        setB(event.clientY)
    }
    

    
  return (
    <>
        <h2>X : {a}, Y : {b}</h2>
        <div onMouseMove={(event)=>task(event)} style={{height : "300px", width : "300px", backgroundColor : "red"}}></div>
    </>
  )
}

export default Demo2