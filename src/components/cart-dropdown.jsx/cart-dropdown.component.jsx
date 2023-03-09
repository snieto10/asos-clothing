import './cart-dropdown.styles.scss';
import Button from './../button/button.component';
import { useState } from 'react';

function CartDropDown() {
  return (
    <div className='cart-dropdown-container'>
      CartDropDown
      <div className='cart-items'>
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
}

export default CartDropDown;
