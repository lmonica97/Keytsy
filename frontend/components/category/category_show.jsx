import React from 'react';

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllCategory(this.props.category.id)
    }

    render() {
        debugger
        return null;
    }
}

export default CategoryShow