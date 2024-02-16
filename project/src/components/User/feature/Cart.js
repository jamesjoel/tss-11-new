import React from 'react'
import { useSelector } from 'react-redux'
import { IMAGE_PATH } from '../../../util/API_URL'

const Cart = () => {

	let cart = useSelector(state=>state);
	let total = 0;
	

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
						<table className="cart-table">
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
											<td className="product-remove"><a href="#"><i className="far fa-window-close"></i></a></td>
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
					</>
				}
			</div>
		</div>
	</div>
  )
}

export default Cart