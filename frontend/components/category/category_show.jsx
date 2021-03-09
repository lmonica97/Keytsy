import React from 'react';
import CategoryProductShow from './category_product_show'

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllCategory(this.props.match.params.id)
    }

    render() {
        const { allProducts } = this.props;
        return (
            <ul>
                {allProducts.map(product => 
                    <CategoryProductShow product={product} />    
                )}
            </ul>
        )
    }
}

export default CategoryShow