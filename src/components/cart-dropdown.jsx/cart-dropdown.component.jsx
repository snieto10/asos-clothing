import './cart-dropdown.styles.scss';
import Button from './../button/button.component';
import { useState } from 'react';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropDown;
