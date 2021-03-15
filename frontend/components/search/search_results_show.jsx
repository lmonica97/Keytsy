import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultsShow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {product} = this.props;
        debugger
        return(
            <Link to={`/products/${product.id}`} style={{textDecoration:'none', color:'black'}}>
                <img className="category-product-img" src={product.photoUrl} />
                <p>{product.product_name}</p>
                <p>{product.price}</p>
            </Link>
        )
    }
}

export default SearchResultsShow;