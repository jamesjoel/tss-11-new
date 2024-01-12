import React, {useState} from 'react'

const Contact = () => {

  let [type , settype] = useState("password")
  let [lable, setLable] = useState("show")
  
  let task =()=>{
    if(lable == "show")
    {
      settype("text")
      setLable("Hide")
    }
    else{
      
      settype("password")
      setLable("show")
      
    }
  }


  return (
    <>
    <div className='container mt-5' >

        password <input type={type} /> <button onClick={task}>{lable}</button> 
        
      </div>
    </>
  )
}

export default Contact