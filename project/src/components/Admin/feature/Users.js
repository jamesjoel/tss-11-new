import React, {useState, useRef} from 'react'

const Users = () => {

  let a = useRef();
  
  let demo = ()=>{
    // console.log(a.current);
    
    
    a.current.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, eum? Laborum ratione blanditiis cupiditate tenetur, unde totam. Illo vitae, architecto tempore quas aperiam quia eaque consequatur magni, nam, temporibus laborum.";
  }

  return (
    <>
      <button onClick={demo}>OK</button>
      <h1 ref={a}>Mumbai</h1>
    </>
  )
}

export default Users