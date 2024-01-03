import React, {useState} from 'react'

const About = () => {

  let [user, setUser] = useState({ name : "", age : "", fee : ""  })
  

  

  return (
    <div className='container my-4' style={{minHeight : "600px"}}>
        <h2>About Page</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem pariatur explicabo nihil harum, consequuntur minus aperiam officiis consequatur ipsa ut? Beatae aut ipsam quia incidunt sapiente illo nobis harum quibusdam?</p>
        <h3>{ user.name} {user.age} {user.fee}</h3>
        Name <input type='text' onChange={(e)=>setUser({ ...user, name : e.target.value })} />
        <br />
        <br />
        Age <input type='text' onChange={(e)=>setUser({ ...user, age : e.target.value })}/>
        <br />
        <br />
        Fee <input type='text' onChange={(e)=>setUser({ ...user, fee : e.target.value })}/>
    </div>
  )
}

export default About