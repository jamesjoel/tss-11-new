import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import './Header.css';
import { useSelector } from 'react-redux'

const Header = () => {
  
  let cart = useSelector(state=>state);

	let [allCate, setAllCate] = useState([]);

	useEffect(()=>{
		axios.get(`${API_URL}category-subcategory`).then(response=>{
			setAllCate(response.data.result);
		})
	},[])

  return (
    <nav className="navbar navbar-expand-md sticky-wrapper navbar-dark" style={{backgroundColor : "#000"}}>
  
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
          <ul className="dropdown-menu dropdown-menu-new" role="menu" aria-labelledby="dropdownMenu">
                {
                  allCate.map(value=>{

                    return(
                      <li key={value._id} className="dropdown-submenu">
                      <NavLink  className="dropdown-item" to={`/category/${value.name}`}>{value.name}</NavLink>
                      <ul className="dropdown-menu multi-level">
                        
                        {
                          value.subcate.map(value2=>{
                            return(
                              <li key={value2._id} className="dropdown-item"><NavLink href="#">{value2.name}</NavLink></li>
                            )
                          })
                        }
                        
                        
                      </ul>
                    </li>
                    )
                  })
                }
                
                
              </ul>
      </li>
      {
									localStorage.getItem("access-token") ? 
									<>
										<li className='nav-item dropdown'>
                      <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">{localStorage.getItem("name")}</NavLink>
                      <ul className="dropdown-menu dropdown-menu-new" role="menu" aria-labelledby="dropdownMenu">
                        <NavLink className="dropdown-item" to="/my-profile">My Profile</NavLink>
                        <NavLink className="dropdown-item" to="/logout">Logout</NavLink>
                      </ul>
                    </li>
									</> 
									: 
									<>
										<li className="nav-item"><NavLink className="nav-link" to="/signup">Signup</NavLink></li>
										<li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
									</>
								}
          <li className="nav-item"><NavLink className="nav-link" to="/cart">My Cart {cart.length}</NavLink></li>
      </ul>
  </div>
		</div>
	</nav>

	
  )
}

export default Header