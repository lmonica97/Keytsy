import React from 'react';
import { Link } from 'react-router-dom';

const ProductPiece = props => {
    return (
        <div className="selections-list-index" >
            {props.product.map(product => 
                <Link to={`/products/${product.id}`} style={{ textDecoration:'none', color:'black'}} key={product.id}>
                <img className="selections-image" src={product.photoUrl} />
                <p className="selection-quote" >{props.title}</p>
            </Link>)}
        </div>
    )
}

export default ProductPiece;