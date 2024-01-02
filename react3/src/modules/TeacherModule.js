import React from 'react'
import { Outlet } from 'react-router-dom'
import GreenBox from '../components/shared/GreenBox';
const TeacherModule = () => {
  return (
    <>
        <GreenBox />
        <Outlet />
    </>
  )
}

export default TeacherModule