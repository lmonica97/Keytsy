import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productReducer from './product_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productReducer
})

export default entitiesReducer;