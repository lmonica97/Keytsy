import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productReducer from './product_reducer';
import cartitemReducer from './cartitem_reducer';
import reviewReducer from './review_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productReducer,
    cartitems: cartitemReducer,
    reviews: reviewReducer
})

export default entitiesReducer;