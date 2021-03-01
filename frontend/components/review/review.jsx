import React from 'react';

class Review extends React.Component {
    render() {
        const { user, product } = this.props;
        debugger
        return (
            <div>
                {user}
                {product.id}
            </div>
        )
    }
}

export default Review;