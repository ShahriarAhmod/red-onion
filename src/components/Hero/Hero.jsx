import React from 'react';
import './Hero.css';
import banner from '../../assets/bannerbackground.png';
import { useFoodCartContext } from '../../context/RedOnionContext';
const Hero = () => {
	
	return (
		<section className="hero">
			<img src={banner} alt="" className="banner" />
			<div className="banner-info">
				<h1>Eat & Enjoy The true test</h1>
				<div className="search-food">
					<input type="text" name="" id="search" placeholder='Search food items...'
			
					/>
					<button className="search-btn">Search</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
