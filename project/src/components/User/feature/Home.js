import React, {useState, useEffect} from 'react'
import Deal from '../shared/Deal';
import Discount from '../shared/Discount'
import ProductBox from '../shared/ProductBox';
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import Slider from '../shared/Slider';

const Home = () => {

	let [allProduct, setAllProduct] = useState([]);
	useEffect(()=>{
		getProduct();
	},[])

	let getProduct = async()=>{
		let response = await axios.get(`${API_URL}product`);
		setAllProduct(response.data.result);
	}

  return (
	<>
	<Slider />
    <div className="product-section mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Our</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>

			<div className="row">
				{
					allProduct.map(value=>{
						return(<ProductBox info={value}/>)
					})
				}
				
			</div>
		</div>
	</div>
	<Deal />
	<Discount />
	</>
  )
}

export default Home