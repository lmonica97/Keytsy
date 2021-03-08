import React from 'react';
import ReactStars from 'react-rating-stars-component';

class ReviewShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.reviewId,
            reviewer_id: this.props.reviewerId,
            product_id: this.props.productId,
            rating: 1,
            comment: "",
            showUpdateForm: false
        }
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

    hideForm(name) {
        switch(name) {
            case 'showUpdateForm':
                this.setState({ showUpdateForm: !this.state.showUpdateForm })
                break;
            default: 
                null;
        }
    }

    render() {
        const { rating, comment, showUpdateForm } = this.state;
        let review = { id: this.state.id, reviewer_id: this.state.reviewer_id, product_id: this.state.product_id, rating: this.state.rating, comment: this.state.comment}
        const stars = {
            1: <img className="review-star-rating" src={window.rating1} />,
            2: <img className="review-star-rating" src={window.rating2} />,
            3: <img className="review-star-rating" src={window.rating3} />,
            4: <img className="review-star-rating" src={window.rating4} />,
            5: <img className="review-star-rating" src={window.rating5} />
        }
        if (!this.props.currentUser) {
            return (
                <div className="review-show-container">
                        <div className="review-user-date">
                            <img className="review-user-pic" src={window.anon} />
                            <p className="review-user">{this.props.user}</p>
                            <p className="review-date">{this.props.date}</p>
                        </div>
                        <p className="star-container">{stars[this.props.rating]}</p>
                        <p className="review-comment">{this.props.comment}</p>
                        <p><img src={window.thumbsup} />Is this review helpful?</p>
                </div>
            )
        } else {
        return (
            <li className="review-index-container" key={this.props.reviewId}>
                <div className="review-main-container">
                    { showUpdateForm ? 
                    <div className="review-edit-container">
                        <h1 className="review-edit-head">Update Your Review</h1>
                        <div className="review-rating-disp">
                            <p className="rating-text">Rating: </p>
                            <ReactStars
                            count={5}
                            value={this.props.rating}
                            size={34}
                            onChange={this.onStarClick}
                            activeColor="#ffd700"
                            className="review-star-rating"
                            />
                            <p className="rating-text1">{this.props.rating} Star(s)</p>
                        </div>
                        <textarea className="review-update-text" placeholder={this.props.comment} onChange={this.update("comment")}></textarea>
                        <button className="update-review" onClick={() => this.props.updateReview(review)}>Update</button>
                        <button className="delete-review" onClick={() => this.props.deleteReview(this.props.reviewId).then(this.hideForm("showUpdateForm"))}>Delete Review</button>
                    </div> :
                    <div className="review-show-container">
                        <div className="review-user-date">
                            <img className="review-user-pic" src={window.anon} />
                            <p className="review-user">{this.props.user}</p>
                            <p className="review-date">{this.props.date}</p>
                        </div>
                        <p className="star-container">{stars[this.props.rating]}</p>
                        <p className="review-comment">{this.props.comment}</p>
                        <p className="review-helpful"><img className="review-thumb" src={window.thumbsup} />Is this review helpful?</p>
                    </div>
                    }
                    { this.props.currentUser.id === this.props.reviewerId ? 
                        <div className="review-update-delete">
                            <form onClick={() => this.hideForm("showUpdateForm")} >
                                {showUpdateForm ? <button className="review-update-close">Cancel</button> : <button className="review-update">Update Review</button>}
                            </form>
                        </div> : null
                    }    
                </div>
            </li>
        )
        }
    }
}

export default ReviewShow