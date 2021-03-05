import React from 'react'
import CartShow from './cart_show';
import { Link } from 'react-router-dom';
import SingleProduct from './single_product';
import products_container from '../products/products_container';

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.handleCheckout = this.handleCheckout.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllitems();
        this.props.fetchProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps.items.length !== this.props.items.length){
            this.props.fetchAllitems();
        }
    }

    handleCheckout() {
       this.props.items.map((item) => {
           this.props.removeItem(item.id)
       }) 
    }

    render() {
        const { items, removeItem, updateItem, products, addItem, user } = this.props;
        debugger
        if (items.length === 0) {
            return(
                <div className="empty-cart-containter">
                    <h1 className="emptycart">Your cart is empty.</h1>
                    <Link to="/" className="carthome-link">
                        <p className="carthome-link">Discover something unique to fill it up</p>
                    </Link>
                    <p className="carbon"><img className="carbon-img" src={window.leaf} />Keytsy offsets carbon emissions from every delivery</p>
                    <p className="line-divider"></p>
                    <div className="cart-likes">
                        <h2 className="cart-likes-header">You may also like</h2>
                        <div className="cart-suggest-list">
                            <SingleProduct product={products.slice(25,26)} addItem={addItem} user={user}/>
                            <SingleProduct product={products.slice(26,27)} addItem={addItem} user={user} />
                            <SingleProduct product={products.slice(27,28)} addItem={addItem} user={user} />
                            <SingleProduct product={products.slice(28,29)} addItem={addItem} user={user} />
                            <SingleProduct product={products.slice(29,30)} addItem={addItem} user={user} />
                        </div>
                    </div>
                </div>
            )
        }
        let total = 0
        items.forEach( item => total += (parseFloat(item.price) * parseFloat(item.quantity)))
        let quarter = total / 4
        if (!items) {
            return (
                <h1>Fetching items...</h1>
            )
        } else {
            return (
                <div className="cart-whole">
                    <div className="cartshow-topheader">
                        <h2 className="cartshow-header">{items.length} item(s) in your cart</h2>
                        <Link to="/" ><button className="home-button">Keep shopping</button></Link>
                    </div>
                    <div className="cart-mainbody">
                        <ul className="cartshow-container">
                            {
                                items.map(item => (
                                        <CartShow user={this.props.user} seller={item.name} quantity={item.quantity} name={item.product_name} price={item.price} photo={item.photoUrl} id={item.product_id} cartItem={item.id}
                                            removeitem={removeItem} total={total.toFixed(2)} updateItem={updateItem} />
                                ))
                            }
                        </ul>
                        <div className="paymentbox-container">
                            <div className="paymentbox">
                                <h3 className="payment-header">How you'll pay</h3>
                                <div>
                                    <input type="radio" name="payment" className="creditcard"/>
                                        <img className="pay-img" src={window.mastercard} /> 
                                        <img className="pay-img" src={window.visa} />
                                        <img className="pay-img" src={window.ae} />
                                        <img className="pay-img" src={window.discover} />
                                    <br />
                                    <input type="radio" name="payment" className="paypal" />
                                        <img className="pay-img" src={window.paypal} />
                                    <br />
                                    <input type="radio" name="payment" className="paypal" />
                                        <label className="klarna-info1"><img className="pay-img" src={window.klarna} /> 4 interest-free installments</label>
                                        <p className="klarna-info">Pay in 4 installments of ${quarter.toFixed(2)}. <span className="boldme">Klarna.</span></p>
                                </div>
                                <div className="items-total">
                                    <p>Item(s) total</p>
                                    <p>${total.toFixed(2)}</p>
                                </div>
                                <p className="line-divider"></p>
                                <div className="items-total">
                                    <p className="sub-items">Subtotal</p>
                                    <p>${total.toFixed(2)}</p>
                                </div>
                                <div className="items-total">
                                    <p>Shipping</p>
                                    <p>FREE</p>
                                </div>
                                <p className="line-divider"></p>
                                <div className="items-total">
                                    <p className="final-price">Total ({items.length} items)</p>
                                    <p className="final-price">${total.toFixed(2)}</p>
                                </div>
                                <button onClick={() => this.handleCheckout()} className="checkout-button">Proceed to checkout</button>
                            </div>
                            <div>
                                <p className="donation">The Uplift Fund Supports nonprofits that provide <br />resources to creative entrepreneurs in <br />communities that need it most. You can donate <br />your change at Checkout.</p>
                            </div>
                        </div>
                    </div>
                    <p className="carbon"><img className="carbon-img" src={window.leaf} />Keytsy offsets carbon emissions from every delivery</p>
                    <p className="line-divider1"></p>
                </div>
            )
        }
    }
}

export default Cart
