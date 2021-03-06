import React from 'react';
import { Link } from 'react-router-dom';

const ProductSlice = (props) => {
    return (
        <ul className="product-list">
            {props.products.map(product=> <li className="product-list-index" key={product.id}>
            <Link to={`/products/${product.id}`}>
                <img className="product-image" src={product.photoUrl} />
            </Link>
            <p className="product-price">${product.price}</p>
        </li>)}
        </ul>
    )
}

export default ProductSlice;