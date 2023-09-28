import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1 className='cart-title'>Items in Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img className='cart-image' src={item.image} alt={item.title} />
            <div className='cart-details'>
              <h4 className='cart-item-title'><strong>{item.title}</strong></h4>
              <p className='cart-price'><strong>Price: $</strong>{item.price}</p>
              <br></br>
            </div>
          </div>
        ))}
      </div>
      <h2 className='total-price'>Total Price: ${total}</h2>
      <button className="checkout-button">Check Out</button> 
    </div>
  );
};

export default Cart;
