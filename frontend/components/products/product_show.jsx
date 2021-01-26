import React from 'react';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        // this.fetchSeller = this.fetchSeller.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id);
    }

    randomNumberGenerator() {
        let min = 1;
        let max = 100;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        const { product } = this.props;
        if (!product){
            // debugger
            return(
                <div>Fetching Product...</div>
            );
        } else {
            // debugger
            return (
                <div className="product-show-page">
                    
                    <div className="product-show-image-block">
                        <img className="product-show-image" src={this.props.product.photoUrl} />
                    </div>
                    <div>
                        <p className="product-show-name">{product.product_name}</p>
                    </div>
                    <div className="product-available">
                        <img className="product-in-stock" src={window.check} />
                        <p>In stock</p>
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
                        <input className="product-quantity-box" type="number" min="1" max="100" defaultValue="1"></input>
                    </div>
                    <div>
                        <button className="product-show-add-button">Add to cart</button>
                    </div>
                    <div>
                        <img className="product-show-icon1" src={window.procart} /> 
                        <p className="product-in-cart">
                            <span className="highlight-text">Other people want this. </span> Over {this.randomNumberGenerator()} people have this in their carts right now.
                        </p>
                    </div>
                    <div>
                        <img  className="product-show-icon2" src={window.delivery} />
                        <p className="product-delivery">
                            <span className="highlight-text">Hooray!</span> This istem ships for free to the US.
                        </p>
                    </div>
                    <div>
                        <h6 className="product-highlight-header">Highlights</h6>
                        <ul className="product-highlight-list">
                            <li>
                                <img className="product-highlight1"src={window.hand} />
                                <p className="product-highlight-p">Handmade</p>
                            </li>
                            <li>
                                <img className="product-highlight2" src={window.made} />
                                <p className="product-highlight-p2">Materials: with love</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <p className="rating-header">
                                <span>{this.randomNumberGenerator()} </span> reviews <img className="rating"src={window.rating} />
                            </p>
                            <div>
                                <p className="rating-separator">Reviews for this item</p>
                            </div>
                            <div>
                                <ul>
                                    <li className="comment1">
                                        <img className="anon-pic1" src={window.anon} />
                                        <a className="comment1-user" href="#">DemoUser</a> <span className="comment1-date">Jan 25, 2020</span>
                                        <img className="rating1" src={window.rating} />
                                        <p>This product is awesome, I would highly recommend it to everyone! It literally changed my life!!!</p>
                                    </li> 
                                    <li className="comment2">
                                        <img className="anon-pic2" src={window.anon} />
                                        <a className="comment2-user" href="#">Monica</a> <span className="comment2-date">Jan 26, 2020</span>
                                        <img className="rating2" src={window.rating} />
                                        <p>Honestly, everyone should be buying this product. I agree with the user above, that the product really is awesome. :)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ProductShow;