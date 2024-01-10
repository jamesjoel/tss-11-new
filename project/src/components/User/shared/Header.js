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
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">Category</NavLink>
		<div className='dropdown-menu'>
        	<NavLink className="dropdown-item" to="/category/home">Home Appliance</NavLink>

		</div>
      </li>
      
    </ul>
  </div>
		</div>
	</nav>
  )
}

export default Header