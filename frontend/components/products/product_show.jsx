import React from 'react';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    render() {
        const { product } = this.props;
        debugger 
        return (
            <div>
                <div>
                    <img className="product-show-image" src={this.props.product.image_url} />
                </div>
                <div>
                    <h2>{product.product_name}</h2>
                </div>
                <div>
                    {product.description}
                </div>
                <div>
                    <p>{product.price}</p>
                </div>
            </div>
        )
    }
}

export default ProductShow;