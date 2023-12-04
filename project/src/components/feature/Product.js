import React from 'react'

const Product = () => {
  return (
    <div className="single-product mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-md-5">
					<div className="single-product-img">
						<img src="/assets/img/products/product-img-5.jpg" alt=""/>
					</div>
				</div>
				<div className="col-md-7">
					<div className="single-product-content">
						<h3>Green apples have polyphenols</h3>
						<p className="single-product-pricing"><span>Per Kg</span> $50</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
						<div className="single-product-form">
							<form action="index.html">
								<input type="number" placeholder="0" />
							</form>
							<a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
							<p><strong>Categories: </strong>Fruits, Organic</p>
						</div>
						<h4>Share:</h4>
						<ul className="product-share">
							<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i className="fab fa-twitter"></i></a></li>
							<li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
							<li><a href=""><i className="fab fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Product