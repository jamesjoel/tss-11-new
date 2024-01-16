import React, { useState } from 'react'

const About = () => {

let [user,setuser]=useState({name : "", age : "", fee : ""});


  return (
    <div className='container my-5' style={{minHeight: "600px"}}>
        <h1>About page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, provident, recusandae ducimus delectus doloribus perspiciatis optio facere quae dignissimos eos a voluptas quisquam consequatur inventore temporibus ut, ipsam magnam omnis voluptatum explicabo labore ipsum.
        <br />
        <br />
        <h3>{user.name}{user.age}{user.fee}</h3>  
        <br />
        Name <input type="text" onChange={(event)=>setuser({...user, name : event.target.value})} />
        <br />
        <br />
        Age <input type="text" onChange={(event)=>setuser({ ...user , age :event.target.value})} />
        <br />
        <br />
        Fee <input type="text" onChange={(event)=>setuser({...user ,fee :event.target.value})} />
    </div>
  )
}

export default About