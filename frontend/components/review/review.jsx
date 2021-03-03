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
        const { user, product, reviews } = this.props;
        return (
            <div>
                {reviews.map(review => (
                    <ReviewShow user={review.user.name} date={review.date} comment={review.comment} rating={review.rating} />
                ))}
            </div>
        )
    }
}

export default Review;