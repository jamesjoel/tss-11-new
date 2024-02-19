import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  let emp = useSelector(state=>state);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <div className="container-fluid">
    
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home ({emp.length})</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/employee">Employee</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/product">Product</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/student">Student</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about/more">More</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about/info">Info</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/teacher">Teacher</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/teacher/status">Teacher-Status</NavLink>
      </li>
      
    </ul>
  </div>

</nav>
  )
}

export default Header