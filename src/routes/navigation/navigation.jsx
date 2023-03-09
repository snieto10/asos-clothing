import { useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown.jsx/cart-dropdown.component';
import './navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOut = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/signin'>
              SIGN IN
            </Link>
          )}
          <div onClick={() => console.log('hello')}>
            <CartIcon />
          </div>
        </div>
        <CartDropDown />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
