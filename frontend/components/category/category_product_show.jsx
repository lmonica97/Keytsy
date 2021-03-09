import React from 'react';
import { Link } from 'react-router-dom';

class CategoryProductShow extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        debugger
        const { product } = this.props;
        return (
            <li className="category-product-show">
                <Link to={`products/${product.id}`} style={{textDecoration:'none', color:'black'}}>
                    <img className="category-product-img" src={product.photoUrl} />
                    <p className="category-product-name">{product.product_name}</p>
                    <p className="category-product-seller">{product.name}</p>
                    <p className="category-product-price">${product.price}</p>
                </Link>
            </li>
        )
    }
}

export default CategoryProductShow;