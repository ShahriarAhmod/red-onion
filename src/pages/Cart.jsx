import React from 'react';
import Header from '../components/Header/Header';
import '../styles/cart.css';
import { useFoodCartContext } from '../context/RedOnionContext.jsx';
import EmptyCart from '../components/EmptyCard/EmptyCard.jsx'
import SingleCart from '../components/SingleCart/SingleCart.jsx'
import CartTotal from '../components/CartTotal/CartTotal.jsx'


const Cart = () => {
	const { contextValue } = useFoodCartContext();
	const { cartItem } = contextValue;


	if (cartItem.length >= 1) {
		
		return (
	
	
	
			<section className="cart-page">
				<Header />
	
				<div className="cart-container">
					<div className="cart-header-main">
						<li className="food-product">Product</li>
						<li className="cart-product-name">Product Name</li>
						<li className="cart-food-price">Price</li>
						<li>Quantity</li>
						<li>Subtotal</li>
						<li>Remove</li>
					</div>
					{cartItem &&
						cartItem.map((item) => {
							return <SingleCart item={item} key={item.id} />;
						})}
					<CartTotal cartItem={cartItem}/>
				</div>
			</section>
		);
	}
	else {
		return (
			<EmptyCart/>
			
		)
	}


};

export default Cart;
