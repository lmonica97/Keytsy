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
            <li className="review-index-container" key={this.props.id}>
                <div className="review-user-date">
                    <img className="review-user-pic" src={window.anon} />
                    <p className="review-user">{this.props.user}</p>
                    <p className="review-date">{this.props.date}</p>
                </div>
                <p className="star-container">{stars[this.props.rating]}</p>
                <p className="review-comment">{this.props.comment}</p>
            </li>
        )
    }
}

export default ReviewShow