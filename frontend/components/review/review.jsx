import React from 'react';
import ReviewShow from './review_show';

class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.product.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.reviews.length !== this.props.reviews.length) {
            this.props.fetchReviews(this.props.product.id)
        }
    }

    randomKeyNum() {
        let min = 12390812491;
        let max = 565659380382;
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    render() {
        const { user, product, reviews, updateReview, deleteReview } = this.props;
        let reversed = reviews.reverse()
        if (!reviews) {
            return (
                <div>Fetching reviews..</div>
            )
        } else {
            return (
                <div className="review-list-container">
                        {reversed.map(review => (
                            <ReviewShow key={this.randomKeyNum()} id={review.id} reviewerId={review.reviewer_id} user={review.name} date={review.date}
                            comment={review.comment} rating={review.rating} currentUser={user}
                            updateReview={updateReview} deleteReview={deleteReview} productId={review.product_id} />
                        ))}
                </div>
            )
        }
    }
}

export default Review;