import React, {useState} from 'react'

const Demo4 = () => {

    let [type, setType] = useState("password")
    let [lable, setLable] = useState("Show")

    let task = ()=>{
        if(lable=="Show")
        {
            setType("text");
            setLable("Hide");
        }
        else{
            setType("password");
            setLable("Show");
        }
    }

    let hello = (event)=>{
        event.preventDefault();
    }

  return (
    <>
        <div onContextMenu={(event)=>hello(event)} className='container-fluid' style={{minHeight : "700px"}}>

            Password <input type={type} /><button onClick={task}>{lable}</button>
        </div>
    </>

  )
}

export default Demo4