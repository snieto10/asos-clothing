import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CartItem from './../../components/cart-item/cart-item';

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
      <h1>I am the checkout page</h1>
      <div className='checkout-container'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
        <span className='total'>Total: ${cartTotal}</span>
      </div>
    </>
  );
}

export default Checkout;
