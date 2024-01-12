import React from 'react'
import { Outlet } from 'react-router-dom'
import RedBox from '../components/shared/RedBox'
const AboutModule = () => {
  return (
    <>
        <RedBox />
        <Outlet />
    </>
  )
}

export default AboutModule