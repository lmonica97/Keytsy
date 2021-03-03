import React from 'react';
import ReviewShow from './review_show';

class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.product.id)
    }

    render() {
        const { user, product, reviews, updateReview, deleteReview } = this.props;
        return (
            <div className="review-list-container">
                {reviews.map(review => (
                    <ReviewShow id={review.id} user={review.user.name} date={review.date} comment={review.comment} rating={review.rating} currentUser={user.id}
                    updateReview={updateReview} deleteReview={deleteReview} />
                ))}
            </div>
        )
    }
}

export default Review;