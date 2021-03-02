import { connect } from 'react-redux';
import Review from './review';
import { fetchReviews, createReview, updateReview, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        user: state.session.currentUser,
        product: state.entities.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: (productId) => dispatch(fetchReviews(productId)),
        createReview: (productId, review) => dispatch(createReview(productId, review)),
        updateReview: (productId, review) => dispatch(updateReview(productId, review)),
        deleteReview: (productId, review) => dispatch(deleteReview(productId, review))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Review);