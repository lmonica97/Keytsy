import { connect } from 'react-redux';
import Cart from './cart';
import { fetchAllitems, addItem, updateItem, removeItem } from '../../actions/cartitem_actions';
import {fetchProducts} from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.session.currentUser.id,
        items: Object.values(state.entities.cartitems),
        products: Object.values(state.entities.products)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchAllitems: () => dispatch(fetchAllitems()),
        updateItem: cartitem => dispatch(updateItem(cartitem)),
        removeItem: cartitemId => dispatch(removeItem(cartitemId)),
        addItem: cartitem => dispatch(addItem(cartitem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
