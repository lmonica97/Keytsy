import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import productErrorsReducer from './product_errors_reducer';
import cartitemErrorsReducer from './cartitem_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';

export default combineReducers({
  session,
  product: productErrorsReducer,
  cartitem: cartitemErrorsReducer,
  review: reviewErrorsReducer
});
