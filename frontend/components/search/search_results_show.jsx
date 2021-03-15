import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultsShow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {product} = this.props;
        return(
            <li className="recommendation-list" key={product.id}>
                <Link to={`/products/${product.id}`} style={{textDecoration:'none', color:'black', cursor: 'pointer'}}>
                    <img className="category-product-img" src={product.photoUrl} />
                    <p className="category-product-name">{product.product_name}</p>
                    <p className="category-product-seller">{product.seller.name}</p>
                    <p className="category-product-price">${product.price}</p>
                </Link>
            </li>
        )
    }
}

export default SearchResultsShow;