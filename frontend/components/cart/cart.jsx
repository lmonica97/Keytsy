import React from 'react'
import CartShow from './cart_show';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllitems();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cartitems !== this.props.items){
            this.props.fetchAllitems();
        }
    }

    render() {
        const { items, removeItem, updateItem } = this.props;
        if (items.length === 0) {
            return(
                <div>
                    <h1>Your cart is empty.</h1>
                    <Link to="/">
                        Discover something unique to fill it up
                    </Link>
                </div>
            )
        }
        debugger
        let total = 0
        items.forEach( item => total += (parseFloat(item.price) * parseFloat(item.quantity)))
        if (!items) {
            return (
                <h1>Fetching items...</h1>
            )
        } else {
            return (
                <div>
                    <div className="cartshow-topheader">
                        <h2 className="cartshow-header">{items.length} items in your cart</h2>
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
                        <div>
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
                                        <img className="pay-img" src={window.klarna} />
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
                                    <p>Total ({items.length} items)</p>
                                    <p>${total.toFixed(2)}</p>
                                </div>
                                <button className="checkout-button">Proceed to checkout</button>
                            </div>
                            <div>
                                <p className="donation">The Uplift Fund Supports nonprofits that provide <br />resources to creative entrepreneurs in <br />communities that need it most. You can donate <br />your change at Checkout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Cart
