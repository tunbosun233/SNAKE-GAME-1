import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';
import './Cart.css';

const Cart: React.FC = () => {
  const { cartItems, totalAmount, clearCart } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button onClick={clearCart} className="btn-clear">Clear Cart</button>
            <button className="btn-checkout">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;