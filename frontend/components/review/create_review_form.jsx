import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

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
    }

    update(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
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
                    <h1>Write a review</h1>
                    <StarRatingComponent 
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                    />
                    <label>Comment
                    <textarea type="textarea" value={this.state.comment} onChange={this.update("comment")}></textarea>
                    </label>
                    <button className="review-submit-btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm;