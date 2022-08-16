import React from 'react';
import imgae from '../../assets/images/breakfast/breakfast1.png';
import { FiDelete } from 'react-icons/fi';
import { useFoodCartContext } from '../../context/RedOnionContext';
import { formatCurrency } from '../../utilities/formatCurrency';
const SingleCart = ({ item }) => {
	const {id,quantity}=item
	const { contextValue } = useFoodCartContext()
	const { data,decreaseCartQuantity,removeFromCart,increaseCartQuantity } = contextValue
	
	const newItem = data[0].find((i) => i.id === id);
	console.log(newItem);

	if (item == null) return null;
	return (
		<>
			<div className="cart-header">
			<li className="food-product">
				<img src={newItem?.img} alt="" width={'150px'} />
				
			</li>
			<li className='cart-product-name'>
			<p>{newItem?.name}</p>
			</li>
			<li className="cart-food-price">{formatCurrency(newItem?.price)}</li>
			<li className="cart-amount">
				<span onClick={()=>decreaseCartQuantity(id)}>-</span>
				<span>{quantity}</span> <span onClick={()=>increaseCartQuantity(id)}>+</span>
			</li>
			<li> {formatCurrency((newItem?.price * quantity))}</li>
			<li className="remove" onClick={()=>removeFromCart(id)}>
				<FiDelete />
			</li>
		</div>
		</>
	);
};

export default SingleCart;
