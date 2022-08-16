import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useFoodCartContext } from '../context/RedOnionContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import '../styles/singlefood.css'

const SingleProductPage = () => {
  let { id } = useParams()
  console.log(id);

  const { contextValue } = useFoodCartContext()
  const { data,increaseCartQuantity,getItemQuantity } = contextValue;

  const food = data[0].find((item) => item.id === Number(id))
 

  return (
    <section className='single-food-page'>
      <Header />
      <div className="single-food-container">
        <div className="single-food-info">
          <h4>{food.name}</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta cupiditate omnis soluta eaque atque!</p>
          <div className="single-food-price">{formatCurrency(food.price)}</div>
          
          <button className='single-food-add' onClick={()=>increaseCartQuantity(id)}> <AiOutlineShoppingCart size={"1.2rem"} />  ADD TO CART</button>
        </div>
        <img src={food.img} alt="" className="single-food-img" />
      </div>
    </section>
  )
}

export default SingleProductPage