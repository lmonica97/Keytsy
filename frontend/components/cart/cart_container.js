import { connect } from 'react-redux';
import Cart from './cart';
import { addItem, updateItem, removeItem } from '../../actions/cartitem_actions';


const mapDispatchToProps = dispatch => {
    return {
        addItem: cartitem => dispatch(addItem(cartitem)),
        updateItem: cartitem => dispatch(updateItem(cartitem)),
        removeItem: cartitemId => dispatch(removeItem(cartitemId))
    }
}

export default connect(null, mapDispatchToProps)(Cart);
