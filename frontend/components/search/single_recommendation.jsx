import React from 'react';
import { Link } from 'react-router-dom';

const SingleRecommendation = props => {
    return (
        <ul className="recommendation-ul">
            {props.product.map(item => 
            <li className="recommendation-list" key={item.id}>
                <Link to={`/products/${item.id}`} style={{textDecoration:'none', color:'black', cursor: 'pointer'}}>
                    <img className="category-product-img" src={item.photoUrl} />
                    <p className="category-product-name">{item.product_name}</p>
                    <p className="category-product-seller">{item.seller.name}</p>
                    <p className="category-product-price">${item.price}</p>
                </Link>
            </li>
            )}
        </ul>
    )
}

export default SingleRecommendation;