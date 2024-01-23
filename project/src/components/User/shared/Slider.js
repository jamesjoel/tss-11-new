import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const Slider = () => {
	const images = [
        "./assets/img/hero-bg.jpg",
        "./assets/img/feature-bg.jpg",
        "./assets/img/hero-bg-2.jpg",
        "./assets/img/hero-bg-3.jpg"
        
    ];
  return (
    <div className="hero-area">
		
				<div className="col-lg-12 m-0 p-0 text-center">
				<Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})`, backgroundSize : '100% 100%' }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})`, backgroundSize : '100% 100%' }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})`, backgroundSize : '100% 100%' }}>
                    
                </div>
            </div>
        </Slide>


					{/* <div className="hero-text">
						<div className="hero-text-tablecell">
							<p className="subtitle">Fresh & Organic</p>
							<h1>Delicious Seasonal Fruits</h1>
							<div className="hero-btns">
								<a href="shop.html" className="boxed-btn">Fruit Collection</a>
								<a href="contact.html" className="bordered-btn">Contact Us</a>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		
  )
}

export default Slider