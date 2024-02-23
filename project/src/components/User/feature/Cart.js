import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IMAGE_PATH } from '../../../util/API_URL'
import { clear } from '../../../redux/CartSlice'


const Cart = () => {

	let disp = useDispatch();
	let cart = useSelector(state=>state.CartSlice);
	let total = 0;

	useEffect(()=>{
		window.scrollTo(0, 0)
	},[])

	
	let clearCart = ()=>{
		disp(clear());
	}

	let clearOneItem = (obj)=>{
		// disp(clearOne(obj));
	}

  return (
    <div className="cart-section mt-150 mb-150">
		<div className="container">
			<div className="row">
				{
					cart.length == 0 
					? 
					<div className='col-md-12'>
						<div className='alert alert-info'>No Item Found in Your Cart</div>
					</div>
					:
					<>
					<div className="col-lg-8 col-md-12">
					<div className="cart-table-wrap">
						<button data-target="#askModal" data-toggle="modal" className='btn btn-danger'>Clear Cart</button>
						<table className="cart-table my-2">
							<thead className="cart-table-head">
								<tr className="table-head-row">
									<th className="product-remove"></th>
									<th className="product-image">Product Image</th>
									<th className="product-name">Name</th>
									<th className="product-price">Price</th>
									<th className="product-quantity">Discounted Price</th>
									<th className="product-total">Total</th>
								</tr>
							</thead>
							<tbody>
								{
									cart.map(value=>{
										total = total + (value.price - (value.price * value.discount/100));
										return(<tr key={value._id} className="table-body-row">
											<td className="product-remove"><button onClick={()=>clearOneItem(value)} style={{border : "none"}}><i className="far fa-window-close"></i></button></td>
											<td className="product-image"><img src={`${IMAGE_PATH}/${value.image}`} alt=""/></td>
											<td className="product-name">{value.title}</td>
											<td className="product-price">{value.price.toFixed(2)}</td>
											<td className="product-price">{ (value.price - (value.price * value.discount/100)).toFixed(2)}</td>
											{/* <td className="product-quantity"><input type="number" placeholder="0"/></td> */}
											<td className="product-total">1</td>
										</tr>)
									})
								}
								

							</tbody>
						</table>
					</div>
				</div>

				<div className="col-lg-4">
					<div className="total-section">
						<table className="total-table">
							<thead className="total-table-head">
								<tr className="table-total-row">
									<th>Total</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr className="total-data">
									<td><strong>Subtotal: </strong></td>
									<td>{total.toFixed(2)}</td>
								</tr>
								<tr className="total-data">
									<td><strong>Shipping: </strong></td>
									<td>500.00</td>
								</tr>
								<tr className="total-data">
									<td><strong>Total: </strong></td>
									<td>{(total+500).toFixed(2)}</td>
								</tr>
							</tbody>
						</table>
						<div className="cart-buttons">
							<a href="cart.html" className="boxed-btn">Update Cart</a>
							<a href="checkout.html" className="boxed-btn black">Check Out</a>
						</div>
					</div>

					<div className="coupon-section">
						<h3>Apply Coupon</h3>
						<div className="coupon-form-wrap">
							<form action="index.html">
								<p><input type="text" placeholder="Coupon"/></p>
								<p><input type="submit" value="Apply"/></p>
							</form>
						</div>
					</div>
				</div>

				<div className='modal fade' id="askModal">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h3>Message !</h3>
							</div>
							<div className="modal-body">
								<p>Are You sure want to Clear Your Cart Items</p>
							</div>
							<div className="modal-footer">
								<button className='btn btn-danger btn-sm' data-dismiss="modal">Close</button>
								<button onClick={clearCart} className='btn btn-info btn-sm' data-dismiss="modal">Confirm</button>
							</div>
						</div>
					</div>
				</div>				

					</>
				}
			</div>
		</div>
	</div>
  )
}

export default Cart