import { connect  } from 'react-redux'
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { addItem } from '../../actions/cartitem_actions';
import { createReview, receiveReviewErrors } from '../../actions/review_actions';
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {

    return {
        product: state.entities.products[ownProps.match.params.id],
        currentUser: state.session.currentUser,
        errors: state.errors.review,
        reviews: Object.values(state.entities.reviews)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId)),
        addItem: cartItem => dispatch(addItem(cartItem)),
        createReview: (productId, review) => dispatch(createReview(productId, review)),
        fetchReviews: (productId) => dispatch(fetchReviews(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);







