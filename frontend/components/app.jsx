import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Route, Link } from 'react-router-dom';
import Splash from '../splash/splash';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SigninFormContainer from './session/signin_container';
import RegisterFormContainer from './session/register_container';


const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link">
                <h1>Keytsy</h1>
            </Link>
            <GreetingContainer />
        </header>
        <Route exact path="/" component={Splash} />
        <Route path="/signin" component={SigninFormContainer} />
        <Route path="/signup" component={RegisterFormContainer} />
    </div>
)

export default App;

