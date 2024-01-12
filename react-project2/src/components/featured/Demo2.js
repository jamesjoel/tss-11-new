import React, {useState}from 'react'

const Demo2 =()=>{

    let [ t , setT ] = useState(0);
    let [ l , setL] = useState(0);
    let [ color , setColor] = useState(0);

    let task =()=>{
     let X = Math.random()*500;
     let Y = Math.floor(X);

     
     let a =Math.random()*800;
     let b = Math.floor(a);

     let temp="";
     for (let i=1; i <=6; i++)
     {
        let num = Math.floor(Math.random()*9);
        temp += num;
     }       
     setT(Y);
     setL(b);
     setColor(temp);
    }
  
  
    return (
  
      <>
      <br />
      <br />
      <div onMouseMove={task}    
       style={{height : "200px", width : "200px", backgroundColor : '#'+color, borderRadius: "550px", marginTop :t+"px" , marginLeft : l+"px" }}></div>
      <br />
      <br />
      </>
    )
    }

export default Demo2