import React from 'react';
import ProductIndexItem from './product_index_item';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products } = this.props;
        return(
                <ul className="product-list">
                    {
                        products.map(product => (
                            <ProductIndexItem 
                                product={product}
                                key={product.id}
                            />
                        ))
                    }
                </ul>
        )
    }
}

export default Product