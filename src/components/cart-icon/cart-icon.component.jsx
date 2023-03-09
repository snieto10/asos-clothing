import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import React from 'react';
import SignUp from './../signup/signupform.component';

function CartIcon() {
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>10</span>
    </div>
  );
}

export default CartIcon;
