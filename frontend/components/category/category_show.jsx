import React from 'react';
import CategoryProductShow from './category_product_show'

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllCategory(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps.category.id !== this.props.category.id) {
            debugger
            this.props.fetchAllCategory(this.props.match.params.id)
        }
    }

    render() {
        const { allProducts } = this.props;
        return (
            <div>
                <ul className="category-product-container">
                    {allProducts.map(product => 
                        <CategoryProductShow product={product} />    
                    )}
                </ul>
            </div>
        )
    }
}

export default CategoryShow