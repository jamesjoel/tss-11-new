import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand h4" style={{margin : "5px 20px"}}  to="/admin">Administrator</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      {
        localStorage.getItem("admin-token") ? <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/dashboard">Dashborad</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/ludo">Ludo</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink data-toggle="dropdown" className="nav-link dropdown-toggle" to="/admin/dashboard">Product</NavLink>
          <div className='dropdown-menu dropdown-menu-new'>
            <NavLink className="dropdown-item" to="/admin/product">Add</NavLink>
            <NavLink className="dropdown-item" to="/admin/product/list">List</NavLink>
          </div>
        </li>
        <li className="nav-item dropdown">
          <NavLink data-toggle="dropdown" className="nav-link dropdown-toggle" to="/admin/dashboard">Category</NavLink>
          <div className='dropdown-menu dropdown-menu-new'>
            <NavLink className="dropdown-item" to="/admin/category">Add</NavLink>
            <NavLink className="dropdown-item" to="/admin/category/list">List</NavLink>
          </div>
        </li>
        <li className="nav-item dropdown">
          <NavLink data-toggle="dropdown" className="nav-link dropdown-toggle" to="/admin/dashboard">Sub-Category</NavLink>
          <div className='dropdown-menu dropdown-menu-new'>
            <NavLink className="dropdown-item" to="/admin/sub-category">Add</NavLink>
            <NavLink className="dropdown-item" to="/admin/sub-category/list">List</NavLink>
          </div>
        </li>
        <li className="nav-item dropdown">
          <NavLink data-toggle="dropdown" className="nav-link dropdown-toggle" to="/admin/dashboard">Users</NavLink>
          <div className='dropdown-menu dropdown-menu-new'>
            
            <NavLink className="dropdown-item" to="/admin/users">List</NavLink>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/logout">Logout</NavLink>
        </li>
        
      </ul> : ''
      }
    </div>
  </div>
</nav>
  )
}

export default Header