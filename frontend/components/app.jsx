import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Route, Link, Switch } from 'react-router-dom';
import SplashContainer from '../splash/splash_container';
import Modal from './modal/modal';
import GreetingContainer from './navbar/greeting_container';
import Footer from './footer/footer';
import ProductShowContainer from './products/product_show_container';
import CartContainer from './cart/cart_container';


const App = () => (
    <div>
        <Modal />
        <header className="header">
            <Link to="/" className="header-link">
                {/* <img src={window.cart} /> */}
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/products/:id" component={ProductShowContainer} />
            <ProtectedRoute exact path="/cart" component={CartContainer} />

        </Switch>
        <Footer />
    </div>

)

export default App;

