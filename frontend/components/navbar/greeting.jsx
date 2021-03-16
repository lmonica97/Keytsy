import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './logout_dropdown';
import CategoryContainer from '../category/category_container';
import CartContainer from '../cart/cart_container';
import Search from '../search/search';

const Greeting = ({ currentUser, signout, openModal }) => {
  const sessionLinks = () => (
    <div>
      <nav className="signin-logout">
        <Link to="/"> 
          <img className="logo" src={window.logo} />
        </Link>
        <Search />
         <a href={"https://www.linkedin.com/in/monica-liang-a06510146/"}><img className="logo-1" src={window.linkedin} /></a>
        <a href={"https://github.com/lmonica97"}><img className="logo-2" src={window.github} /></a>
        <button className="signin" onClick={() => openModal('signin')}>Sign in</button>
        <Link to="/cart" onClick={() => alert("Please sign in or sign up.")}>
        <img className="cart" src={window.cart} />
        </Link>
      </nav>
      <CategoryContainer />
    </div>
  );
  
  const personalGreeting = () => (
    <div>
      <nav className="signin-signout">
        <Link to="/">
          <img className="logo" src={window.logo} />
        </Link>
        <Search />
        <a href={"https://www.linkedin.com/in/monica-liang-a06510146/"}><img className="logo-1" src={window.linkedin} /></a>
        <a href={"https://github.com/lmonica97"}><img className="logo-2" src={window.github} /></a>
        <Dropdown currentUser={currentUser} signout={signout} />
        <Link to="/cart">
          <img className="cart" src={window.cart} />
        </Link> 
      </nav>
      <CategoryContainer />
    </div>
  );

  return (
    !currentUser ?
    sessionLinks() : 
    personalGreeting(currentUser, signout)
  );
};

export default Greeting;
