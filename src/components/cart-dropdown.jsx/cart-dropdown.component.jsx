import './cart-dropdown.styles.scss';
import Button from './../button/button.component';
import { useState } from 'react';

function CartDropDown({ open }) {
  return (
    <div
      className='cart-dropdown-container'
      style={{ display: open ? 'flex' : 'none' }}
    >
      CartDropDown
      <div className='cart-items'>
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
}

export default CartDropDown;
