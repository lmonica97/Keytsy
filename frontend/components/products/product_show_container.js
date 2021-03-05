import { connect  } from 'react-redux'
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { addItem } from '../../actions/cartitem_actions';
import { createReview, receiveReviewErrors } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.id],
        currentUser: state.session.currentUser,
        errors: state.errors.review,
    }
    debugger
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId)),
        addItem: cartItem => dispatch(addItem(cartItem)),
        createReview: (productId, review) => dispatch(createReview(productId, review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);







