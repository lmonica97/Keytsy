import { connect } from 'react-redux';
import ReviewForm from './create_review_form';
import { createReview, receiveReviewErrors } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.session.currentUser.id,
        product: state.entities.products,
        errors: state.errors.review,
        formType: 'review' 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReview: (productId, review) => dispatch(createReview(productId, review)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);