import React from 'react';
import { useSelector } from 'react-redux'


const Home = () => {

  let x = useSelector(state=>state);


  return (
    <div className='row'>
        <div className='col-md-12'>
            <h1>{x}</h1>
            <h2>Home Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa rem amet non eaque laborum sed laboriosam voluptatem asperiores, cumque molestiae, aliquam recusandae ipsam voluptas esse eveniet ullam eos alias deserunt.</p>
        </div>
    </div>
  )
}

export default Home