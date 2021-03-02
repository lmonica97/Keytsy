import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewer_id: this.props.user,
            product_id: this.props.product.id,
            rating: 1,
            comment: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onStarClick = this.onStarClick.bind(this);
    }

    update(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    onStarClick(newRating) {
        this.setState({rating: newRating})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview({productId: this.state.product_id}, {review: this.state } )
    }

    render() {
        const { rating } = this.state;
        debugger
        return (
            <div className="review-form-container">
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <h1 className="review-form-head">Write a review</h1>
                    <div className="review-rating-disp">
                        <p className="rating-text">Rating: </p>
                        <ReactStars
                        count={5}
                        value={rating}
                        size={34}
                        onChange={this.onStarClick}
                        activeColor="#ffd700"
                        className="review-star-rating"
                        />
                        <p className="rating-text1">{rating} Star(s)</p>
                    </div>
                    <p className="review-text-label">Comment: </p>
                    <textarea className="review-textarea" value={this.state.comment} onChange={this.update("comment")}></textarea>
                    <button className="review-submit-btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm;