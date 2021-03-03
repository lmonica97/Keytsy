import React from 'react';

class ReviewShow extends React.Component {
    render() {
        const stars = {
            1: <img className="review-star-rating" src={window.rating1} />,
            2: <img className="review-star-rating" src={window.rating2} />,
            3: <img className="review-star-rating" src={window.rating3} />,
            4: <img className="review-star-rating" src={window.rating4} />,
            5: <img className="review-star-rating" src={window.rating5} />
        }
        return (
            <div className="review-index-container">
                <div className="review-user-date">
                    <p>{this.props.user}</p>
                    <p>{this.props.date}</p>
                </div>
                <p>{stars[this.props.rating]}</p>
                <p>{this.props.comment}</p>
            </div>
        )
    }
}

export default ReviewShow