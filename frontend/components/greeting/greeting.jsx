import React from 'react';

const Greeting = ({ currentUser, signout, openModal }) => {
    console.log(currentUser);
  const sessionLinks = () => (
    <nav className="signin-logout">
      <button onClick={() => openModal('signin')}>Sign in</button>
    </nav>
  );
  
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.name}!</h2>
      <button className="header-button" onClick={signout}>Sign out</button>
    </hgroup>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, signout) :
    sessionLinks()
  );
};

export default Greeting;
