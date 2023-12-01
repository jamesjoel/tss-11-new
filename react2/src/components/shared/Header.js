import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/demo1">Demo1</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/demo2">Demo2</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/demo3">Demo3</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/demo4">Demo4</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/demo5">Demo5</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/demo6">Demo6</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/demo8">Demo8</NavLink>
                </li>
                
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header