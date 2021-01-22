import React from 'react';
// import SearchBar from './search_bar';
import Dropdown from './logout_dropdown';
// import DemoUserContainer from '../session/demouser_container'
import CategoryNav from '../category/category_nav';

const Greeting = ({ currentUser, signout, openModal }) => {
    // console.log(currentUser);
  const sessionLinks = () => (
    <div>
      <nav className="signin-logout">
        <img className="logo" src={window.logo} />
        <button className="signin" onClick={() => openModal('signin')}>Sign in</button>
        <input type="text" className="searchBar" placeholder="Search for anything"></input>
        <img className="cart" src={window.cart} />
      </nav>
      <CategoryNav />
    </div>
  );
  
  const personalGreeting = () => (
    <div>
      <nav className="signin-signout">
        <img className="logo" src={window.logo} />
        <Dropdown currentUser={currentUser} signout={signout} />
        <input type="text" className="searchBar" placeholder="Search for anything"></input>
        <img className="cart" src={window.cart} />
      </nav>
      <CategoryNav />
    </div>
  );

  return (
    !currentUser ?
    sessionLinks() : 
    personalGreeting(currentUser, signout)
  );
};

export default Greeting;