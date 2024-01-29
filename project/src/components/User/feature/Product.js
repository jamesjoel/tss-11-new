import React, {useState, useEffect} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'

const Product = () => {
	let [pro, setPro] = useState({});
	let param = useParams();

	useEffect(()=>{
		getPro();
	},[])

	let getPro = async()=>{
		let response = await axios.get(`${API_URL}product/${param.id}`);
		setPro(response.data.result);
		console.log(response.data)
	}

	useEffect(()=>{
		window.scrollTo(0, 0)
	},[])
  return (
    <div className="single-product mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-md-5">
					<div className="single-product-img">
						<img src="/assets/img/products/product-img-5.jpg" alt=""/>
					</div>
				</div>
				{
					pro ? <div className="col-md-7">
					<div className="single-product-content">
						<h3>{pro.title}</h3>
						<p className='m-0 py-0 px-3 badge badge-danger text-light'>Discount {pro.discount}%</p>
						<p className="single-product-pricing mb-0 pb-0">&#8377; {(pro.price-(pro.price*pro.discount/100)).toFixed(2)}</p>
						<p><del>&#8377; { pro.price ? pro.price.toFixed(2) : ''}</del></p>
						<p>{pro.detail}</p>
						<div className="single-product-form">
							
							<NavLink to="/cart" className="cart-btn m-2"><i className="fas fa-shopping-cart"></i> Add to Cart</NavLink>
							<NavLink to="/buynow" className="cart-btn m-2"><i className="fas fa fa-shopping-bag"></i> Buy Now</NavLink>
							<p><strong>Categories: </strong>{pro.category}</p>
						</div>
						
					</div>
				</div> : ''
				}
			</div>
		</div>
	</div>
  )
}

export default Product