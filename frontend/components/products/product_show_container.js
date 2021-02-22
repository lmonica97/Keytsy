import { connect  } from 'react-redux'
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { addItem } from '../../actions/cartitem_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        product: state.entities.products[ownProps.match.params.id],
        currentUser: state.session.currentUser.id
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId)),
        addItem: cartItem => dispatch(addItem(cartItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);







