import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = props => {
    return (
     <ul className="cart-suggest-single">
            {props.product.map(item=> <li key={item.id}>
            <Link to={`/products/${item.id}`}>
                <img className="cart-suggest-img" src={item.photoUrl} />
            </Link>
            <p className="cart-suggest-name">{item.product_name}</p>
            <p className="cart-suggest-seller">{item.seller.name}</p>
            <p className="cart-suggest-price">${item.price}</p>
            <button>Add to cart</button>
        </li>)}
    </ul>
    )
}

export default SingleProduct