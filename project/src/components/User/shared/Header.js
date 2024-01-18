import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import './Header.css';

const Header = () => {

	let [allCate, setAllCate] = useState([]);

	useEffect(()=>{
		axios.get(`${API_URL}category`).then(response=>{
			setAllCate(response.data.result);
		})
	},[])

  return (
    <nav className="navbar navbar-expand-md sticky-wrapper navbar-light">
  
		<div className='container'>
		<a className="navbar-brand" href="#">
			<img src="/assets/img/logo.png" alt="" />
		</a>
	<button style={{backgroundColor : "#F28123"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    	<span className="navbar-toggler-icon"></span>
  	</button>
  
  <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">Category</NavLink>
		<ul class="dropdown-menu dropdown-menu-new" role="menu" aria-labelledby="dropdownMenu">
                <li class="dropdown-item"><a href="#">Electronics</a></li>
                <li class="dropdown-submenu">
                  <a  class="dropdown-item" href="#">Home Appliance</a>
                  <ul class="dropdown-menu multi-level">
                    <li class="dropdown-item"><a href="#">Second level</a></li>
                    
                    <li class="dropdown-item"><a href="#">Second level</a></li>
                    <li class="dropdown-item"><a href="#">Second level</a></li>
                  </ul>
                </li>
              </ul>
      </li>
      
    </ul>
  </div>
		</div>
	</nav>

	
  )
}

export default Header