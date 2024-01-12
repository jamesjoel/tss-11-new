import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div>
                <nav className="navbar navbar-expand-sm bg-info navbar-dark ">
            <div className="container-fluid">
            <i class="fa fa-skype" aria-hidden="true"></i>
                <a href="" className="navbar-brand text-dark "> <b>The Steaping Stone </b></a>
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
                            <NavLink className="nav-link text-dark" to="/About"> About</NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/Login"> Login</NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/Contact"> Contact</NavLink>
                        </li>
                    </ul>
                    
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/Demo1"> Demo1</NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/Demo2"> Demo2</NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/Demo3"> Demo3</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/Demo4"> Demo4</NavLink>
                        </li> <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/Demo5"> Demo5</NavLink>
                        </li>
                         
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/Demo6"> Demo6</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/Demo7"> Demo7</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header