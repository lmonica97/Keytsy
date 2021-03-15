import React from 'react';
import { Link } from 'react-router-dom';

const SingleRecommendation = props => {
    return (
        <ul className="cart-suggest-single">
            {props.product.map(item => 
            <li key={item.id}>
                <Link to={`/products/${item.id}`} style={{textDecoration:'none', color:'black', cursor: 'pointer'}}>
                    <img className="cart-suggest-img" src={item.photoUrl} />
                    <p className="cart-suggest-name">{item.product_name}</p>
                    <p className="cart-suggest-seller">{item.seller.name}</p>
                    <p className="cart-suggest-price">${item.price}</p>
                </Link>
            </li>
            )}
        </ul>
    )
}

export default SingleRecommendation;