import React, {useState} from 'react'

const Contact = () => {

  let [name, setName] = useState("Gaurav");
  let [age, setAge] = useState(20);

  let demo = ()=>{
    setName("Nilesh");
    setAge(25);
  }

  return (
    <div className='container my-5'>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={demo}>Change</button>
    </div>
  )
}

export default Contact