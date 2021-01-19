import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignUpContainer from './session/signup_container';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <AuthRoute path="/signup" component={SignUpContainer} />
    </div>
)

export default App;

