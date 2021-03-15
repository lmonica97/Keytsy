import React from 'react';
import { Link } from 'react-router-dom';

class CategoryProductShow extends React.Component {
    constructor(props){
        super(props)
    }

    randomNumberGenerator() {
        let min = 1;
        let max = 100;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        const storeStars = {
            1: <img className="review-star-rating2" src={window.rating1} />,
            2: <img className="review-star-rating2" src={window.rating2} />,
            3: <img className="review-star-rating2" src={window.rating3} />,
            4: <img className="review-star-rating2" src={window.rating4} />,
            5: <img className="review-star-rating2" src={window.rating5} />
        }
        const { product } = this.props;
        let ratings = [];
        product.reviews.map(review => ratings.push(review.rating));
        let total = ratings.reduce((a , b) => a + b, 0);
        let average = Math.round(total / ratings.length);
        return (
            <li className="category-product-show" key={product.id}>
                <Link to={`/products/${product.id}`} style={{textDecoration:'none', color:'black'}}>
                    <img className="category-product-img" src={product.photoUrl} />
                    <p className="category-product-name">{product.product_name}</p>
                    <p className="category-product-seller">{product.name}</p>
                    { product.reviews.length !== 0 ? 
                    <div className="category-product">
                        <p className="category-sales">{storeStars[average]}</p>
                        <p className="category-sales-num"> ({this.randomNumberGenerator()})</p>
                    </div> : null}
                    <p className="category-product-price">${product.price}</p>
                </Link>
            </li>
        )
    }
}

export default CategoryProductShow;