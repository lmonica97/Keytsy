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
        debugger
        return (
            <div>
                <form>
                    <h1>Write a review</h1>
                    <label>Comment
                    <input type="textarea"></input>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm;