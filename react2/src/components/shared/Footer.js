import React from 'react'
import { useSelector } from 'react-redux'


const Footer = () => {
  let z = useSelector(data=>data)
  return (
    <div className='container-fluid bg-dark'>
        <h1 className='text-light'>{z}</h1>
        <h3 className='text-center text-light m-0 p-4'>This is Footer</h3>

    </div>
  )
}

export default Footer