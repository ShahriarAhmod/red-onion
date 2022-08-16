import React from 'react';
import { useFoodCartContext } from '../../context/RedOnionContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const FoodContainer = () => {
	const { contextValue } = useFoodCartContext();
	const { foodData, increaseCartQuantity } = contextValue;
	return (
		<div className="food-cart-group">
			{foodData &&
				foodData.map((item) => {
					const { id } = item;
					return (
						<div className="cart" key={item.id}>
							<div className="cart-info">
								<p className="food-categories">{item.categories}</p>
								<h4 className="food-name">{item.name}</h4>
							</div>
							<Link to={`${id}`} style={{width:"100%"}} >
							<img src={`../${item.img}`} alt="" />
							</Link>
							<div className="food-cart">
								<p className="food-price">{formatCurrency(item.price)}</p>

								<AiOutlinePlusCircle
									className="cart-icon"
									onClick={() => increaseCartQuantity(item?.id)}
								/>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default FoodContainer;
