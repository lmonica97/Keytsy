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
        if (prevProps.match.params.id !== this.props.match.params.id) {
            debugger
            this.props.fetchAllCategory(this.props.match.params.id)
        }
    }

    render() {
        const { allProducts, category } = this.props;
        debugger
        if (!category) {
            return (
                <div>Fetch Products...</div>
            )
        } else {
            return (
                <div>
                    <div>
                        <h1 className="category-header">{category.category_name}</h1>
                    </div>
                    <ul className="category-product-container">
                        {allProducts.map(product => 
                            <CategoryProductShow product={product} />    
                        )}
                    </ul>
                </div>
            )
        }
    }
}

export default CategoryShow