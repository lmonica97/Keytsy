import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = props => {
    return (
     <ul>
            {props.product.map(item=> <li key={item.id}>
            <Link to={`/products/${item.id}`}>
                <img className="cart-suggest-img" src={item.photoUrl} />
            </Link>
            <p>{item.product_name}</p>
            <p>{item.seller.name}</p>
            <p>${item.price}</p>
            <button>Add to cart</button>
        </li>)}
    </ul>
    )
}

export default SingleProduct