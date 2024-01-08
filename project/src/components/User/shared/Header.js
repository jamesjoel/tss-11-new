import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'

const Header = () => {

	let [allCate, setAllCate] = useState([]);

	useEffect(()=>{
		axios.get(`${API_URL}category`).then(response=>{
			setAllCate(response.data.result);
		})
	},[])

  return (
    <div className="top-header-area" id="sticker">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-sm-12 text-center">
					<div className="main-menu-wrap">
						
						<div className="site-logo">
							<a href="index.html">
								<img src="/assets/img/logo.png" alt="" />
							</a>
						</div>
						

						
						<nav className="main-menu">
							<ul>
								
								
								
								
								<li><NavLink to="/">Home</NavLink></li>
								<li><NavLink to="/about">About</NavLink></li>
								<li><NavLink to="/contact">Contact</NavLink></li>

								{
									localStorage.getItem("access-token") ? 
									<>
										<li><NavLink to="/my-profile">My Profile</NavLink></li>
										<li><NavLink to="/logout">Logout</NavLink></li>
									</> 
									: 
									<>
										<li><NavLink to="/signup">Signup</NavLink></li>
										<li><NavLink to="/login">Login</NavLink></li>
									</>
								}
								
								<li><a href="#">Categories</a>
									<ul className="sub-menu">
										{
											allCate.map((value, index)=>{
												return(

													<li key={index}><NavLink to="">{value.name}</NavLink></li>
												)
											})
										}

									</ul>
								</li>
								<li>
									<div className="header-icons">
										<NavLink className="shopping-cart" to="/cart"><i className="fas fa-shopping-cart"></i></NavLink>
										<a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
									</div>
								</li>
							</ul>
						</nav>
						<a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
						<div className="mobile-menu"></div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Header