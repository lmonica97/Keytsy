import React from 'react';

const ProductIndexItem = props => {

    debugger
    return (
        <li className="product-list-index">
            <img className="product-image" src={props.product.image_url} />
            {/* <p>{props.product.id}</p> */}
            <h3 className="product-name">{props.product.product_name}</h3>
            <p className="product-price">${props.product.price}</p>
        </li>
    )
}

export default ProductIndexItem;