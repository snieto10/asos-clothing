import './cart-dropdown.styles.scss';
import Button from './../button/button.component';
import { useState } from 'react';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';

function CartDropDown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Link to='checkout'>
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
}

export default CartDropDown;
