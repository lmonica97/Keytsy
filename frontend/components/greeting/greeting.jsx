import React from 'react';
import LogoutDropdown from './logout_dropdown';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, modalOpen }) => {

    const sessionLinks = () => (
        <nav className="signin-register">
            <button onClick={() => modalOpen('signin')}>Sign in</button>
            <Link to='/signin'>Sign in</Link>
            <Link to='/signup'>Sign up</Link>
        </nav>
    )
    console.log('greeting');
    debugger
    return (
        currentUser ?
        <LogoutDropdown currentUser={currentUser} signout={logout} /> :
        sessionLinks()
    );
}

export default Greeting;