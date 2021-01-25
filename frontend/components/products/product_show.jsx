import React from 'react';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    render() {
        const { product } = this.props;
        debugger 
        return (
            <div className="product-show-page">
                <div>
                    <img className="product-show-image" src={this.props.product.image_url} />
                </div>
                <div>
                    <p className="product-show-name">{product.product_name}</p>
                </div>
                <div className="product-show-description">
                    <h4 className="product-show-tag">Description</h4>
                    <p className="product-description-box">{product.description}</p>
                </div>
                <div className="product-show-price">
                    <p>${product.price}</p>
                </div>
                <div>
                    <label className="product-show-quantity-label">Quantity</label>
                    <input className="product-quantity-box" type="number" min="1" max="100"></input>
                </div>
                <div>
                    <button className="product-show-add-button">Add to cart</button>
                </div>
            </div>
        )
    }
}

export default ProductShow;