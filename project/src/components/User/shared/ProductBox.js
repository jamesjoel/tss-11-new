import React from 'react'
import { NavLink } from 'react-router-dom'
import { IMAGE_PATH } from '../../../util/API_URL'
import { UseDispatch, useDispatch } from 'react-redux'
import {add} from '../../../redux/CartSlice'


const ProductBox = (props) => {
	let disp = useDispatch();
  return (
    <>
    <div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src={`${IMAGE_PATH}/${props.info.image}`} style={{height : "180px"}} alt=""/></a>
						</div>
						<h3>{props.info.title}</h3>
						<p className="product-price mb-0 pb-0"><span>{props.info.category}</span> &#8377; { (props.info.price-(props.info.price*props.info.discount/100)).toFixed(2) } </p>
						<p><del>&#8377; {props.info.price.toFixed(2)}</del></p>
						<NavLink to={`/product/${props.info._id}`} className="cart-btn">Detail</NavLink>
						<button onClick={()=>disp(add(props.info))} className='btn buy-btn'>Add To Cart</button>
					</div>
				</div>
    </>
  )
}

export default ProductBox