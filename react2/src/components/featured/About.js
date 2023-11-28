import React, {useState} from 'react'

const About = () => {

  // let a = 10;
  let [a, b] = useState(10);

  let demo = ()=>{
    b(30);
  }

  return (
    <div className='row'>
        <div className='col-md-12'>
            <h1>{a}</h1>
            <button onClick={demo}>OK</button>
            <h2>About Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusamus atque tenetur saepe ipsum delectus iste sint deleniti? Laborum, sint placeat natus quas velit minus id deleniti totam harum dolor? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa rem amet non eaque laborum sed laboriosam voluptatem asperiores, cumque molestiae, aliquam recusandae ipsam voluptas esse eveniet ullam eos alias deserunt.</p>
        </div>
    </div>
  )
}

export default About