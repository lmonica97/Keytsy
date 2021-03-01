import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewer_id: this.props.user,
            product_id: this.props.product.id,
            rating: 0,
            comment: ''
        }
    }

    render() {
        return null;
    }
}

export default ReviewForm;