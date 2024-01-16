import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div>
                <nav className="navbar navbar-expand-sm bg-info navbar-dark ">
            <div className="container-fluid">
            <i class="fa fa-skype" aria-hidden="true"></i>
                <a href="" className="navbar-brand text-dark "> <b>Text </b></a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">
                        <i class="fa fa-home" aria-hidden="true"></i> Home</NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/Users"> Users</NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/userDetail"> UserDetail</NavLink>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    </div></>
  )
}

export default Header