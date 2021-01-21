import React from 'react';
// import SearchBar from './search_bar';
import Dropdown from './logout_dropdown';
// import DemoUserContainer from '../session/demouser_container'

const Greeting = ({ currentUser, signout, openModal }) => {
    // console.log(currentUser);
  const sessionLinks = () => (
    <nav className="signin-logout">
      <img className="logo" src={window.logo} />
      <button className="signin" onClick={() => openModal('signin')}>Sign in</button>
      <input type="text" className="searchBar" placeholder="Search for anything"></input>
      <img className="cart" src={window.cart} />
    </nav>
  );
  
  const personalGreeting = () => (
    <nav className="signin-signout">
      <img className="logo" src={window.logo} />
      <Dropdown currentUser={currentUser} signout={signout} />
      <input type="text" className="searchBar" placeholder="Search for anything"></input>
      <img className="cart" src={window.cart} />
    </nav>
  );

  return (
    !currentUser ?
    sessionLinks() : 
    personalGreeting(currentUser, signout)
  );
};

export default Greeting;
