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
                {}
            </div>
        )
    }
}

export default Review;