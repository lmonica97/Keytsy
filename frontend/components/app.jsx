import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Route, Link, Switch } from 'react-router-dom';
import SplashContainer from '../splash/splash_container';
import Modal from './modal/modal';
import GreetingContainer from './navbar/greeting_container';
import Footer from './footer/footer';
import ProductShowContainer from '../components/products/product_show_container';



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
            <Route path="/products/:id" component={ProductShowContainer} />
            <Route path="/" component={SplashContainer} />
        </Switch>
        <Footer />
    </div>

)

export default App;

