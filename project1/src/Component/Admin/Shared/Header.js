import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark text-light">
            <div className="container-fluid h6">
                <NavLink to="" className="navbar-brand" style={{margin : "5px 25px"}}>AdminLogin</NavLink>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    
                    {
                        localStorage.getItem("admin-token") ?
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link "  to="/admin/dashboard"> Dashboard</NavLink>
                            </li>
                            {/* dropdown */}
                            <li className="nav-item dropdown">
                                <NavLink to="/admin/dashboard" className="nav-link dropdown-toggle" data-toggle="dropdown">Product</NavLink>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" to="/admin/product">Add</NavLink>
                                <NavLink className="dropdown-item" to="/admin/product/list">List</NavLink>
                            </div>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <NavLink to="/admin/dashboard" className="nav-link dropdown-toggle" data-toggle="dropdown">Category</NavLink>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" to="/admin/category">Add</NavLink>
                                <NavLink className="dropdown-item" to="/admin/category/list">List</NavLink>
                            </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink to="/admin/dashboard" className="nav-link dropdown-toggle" data-toggle="dropdown">sub-cotegory</NavLink>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" to="/admin/sub-category">Add</NavLink>
                                <NavLink className="dropdown-item" to="/admin/sub-category/list">List</NavLink>
                            </div>
                            </li>
                             <li className="nav-item dropdown">
                                <NavLink to="/admin/dashboard" className="nav-link dropdown-toggle" data-toggle="dropdown">Users</NavLink>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" to="/admin/user">List</NavLink>
                            </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "  to="/admin/logout"> Logout</NavLink>
                            </li>
                        </ul> : ""
                    }
                </div>
            </div>
        </nav>
</>
  )
}

export default Header;