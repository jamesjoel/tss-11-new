
import React, {useState, useEffect, useRef} from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'
import { useDispatch } from 'react-redux'
import {add} from '../../../redux/CartSlice'
import { IMAGE_PATH } from '../../../util/API_URL'


const Product = () => {
	let dispatch = useDispatch();
	let [pro, setPro] = useState({});
	let param = useParams();
	let navigate = useNavigate();
	let btn = useRef()
	let btn2 = useRef();

	let [a, setA] = useState(new Date());

	useEffect(()=>{
		demo();
	}, [])

	let demo = ()=>{
		setA(new Date())
		setTimeout(()=>{
			demo();
		}, 3000);
	}
	

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

	let checkLogin = ()=>{
		if(localStorage.getItem("access-token")){

			navigate("/buynow")
		}else{
			btn.current.click();
		}
	}

	let addToCart = (obj)=>{
		dispatch(add(obj));
		setTimeout(()=>{
			btn2.current.click();
		}, 2000)
	}

  return (
	<>
    <div className="single-product mt-150 mb-150">
		<div className="container">
	{/* <h1>{a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()}</h1> */}
	
	
			<div className="row">
				<div className="col-md-5">
					<div className="single-product-img">
						<img style={{width : "100%"}} src={`${IMAGE_PATH}/${pro.image}`} alt=""/>
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
							
							{/* <NavLink to="/cart" className="cart-btn m-2"><i className="fas fa-shopping-cart"></i> Add to Cart</NavLink> */}
							<button data-toggle="modal" data-target="#showCartModal" onClick={()=>addToCart(pro)} className='btn buy-btn m-2'><i className="fas fa-shopping-cart"></i> Add to Cart</button>
							<button onClick={checkLogin} className="btn buy-btn m-2"><i className="fas fa fa-shopping-bag"></i> Buy Now</button>
							<p><strong>Categories: </strong>{pro.category}</p>
						</div>
						
					</div>
				</div> : ''
				}
			</div>
			<button ref={btn} style={{display : "none"}} data-toggle="modal" data-target="#askModal">ok</button>
		</div>
	</div>

	<div className='modal fade' id='askModal'>
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h4>Message !</h4>
				</div>
				<div className="modal-body">
					<p>You are not logged in, If you buy this product you have to <NavLink data-dismiss="modal" onClick={()=>navigate("/login")} to='/login'>Login</NavLink> firset</p>
				</div>
				<div className="modal-footer">
					<button className='btn btn-danger' data-dismiss="modal">Close</button>
					<button className='btn btn-primary' onClick={()=>navigate("/login")} data-dismiss="modal">Login</button>
				</div>
			</div>
		</div>
	</div>

	<div className='modal fade' id='showCartModal'>
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h4>Message !</h4>
				</div>
				<div className="modal-body">
					<p>One Item added in your cart Successfuly !!!</p>
					<button ref={btn2} style={{display : "none"}} data-dismiss="modal">close</button>
				</div>
				
			</div>
		</div>
	</div>


	</>
  )
}

export default Product