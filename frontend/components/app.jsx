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
import CategoryShowContainer from './category/category_show_container';
import SearchContainer from './search/search_container';

const App = () => (
    <div>
        <Modal />
        <header className="header">
            <Link to="/" className="header-link">
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/products/:id" component={ProductShowContainer} />
            <Route exact path="/categories/:id" component={CategoryShowContainer} />
            <Route exact path="/search" component={SearchContainer} />
            <ProtectedRoute exact path="/cart" component={CartContainer} />
        </Switch>
        <Footer />
    </div>

)

export default App;

