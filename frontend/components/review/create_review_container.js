import { connect } from 'react-redux';
import ReviewForm from './create_review_form';
import { createReview, receiveReviewErrors } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.session.currentUser,
        errors: state.errors.review,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReview: (productId, review) => dispatch(createReview(productId, review)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);