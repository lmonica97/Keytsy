import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Route, Link } from 'react-router-dom';
import Splash from '../splash/splash';
import Modal from './modal/modal';
import GreetingContainer from './navbar/greeting_container';
import Footer from './footer/footer';



const App = () => (
    <div>
        <Modal />
        <header className="header">
            <Link to="/" className="header-link">
                {/* <img src={window.cart} /> */}
            </Link>
            <GreetingContainer />
        </header>
        <Splash />
        <Footer />
    </div>

)

export default App;

