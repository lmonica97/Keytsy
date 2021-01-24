import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {fetchProduct, fetchProducts} from './actions/product_actions';

// console.log('DOMContent');
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

    // window.fetchProduct = fetchProduct;
    // window.fetchProducts = fetchProducts;
    // window.state = state
    ReactDOM.render(<Root store={store} />, root)
})

