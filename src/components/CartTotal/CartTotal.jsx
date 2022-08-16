import React from 'react'
import { useFoodCartContext } from '../../context/RedOnionContext'
import { formatCurrency } from '../../utilities/formatCurrency'

const CartTotal = () => {
    
    const { contextValue } = useFoodCartContext()
    const {total,tax}=contextValue||{}
    return (
        <div className='cart-total'>
       
          <div className="cart-total-col">
              <li>Total</li>
              <li>{formatCurrency(total)}</li>
          </div>
          <div className="cart-total-col">
              <li>Shipping</li>
              <li>{formatCurrency(tax)}</li>
          </div>
          <div className="cart-total-col">
              <li>GrandTotal</li>
              <li>{formatCurrency(total + tax)}</li>
          </div>
          <button className="proceed-checkout-btn">Proceed to checkout</button>
    </div>
  )
}

export default CartTotal