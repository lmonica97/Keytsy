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
                                <h3 className="">How you'll pay</h3>
                                    <input type="radio" name="creditcard" />
                                    <label>
                                        <img src={window.mastercard} /> 
                                        <img src={window.visa} />
                                        <img src={window.ae} />
                                        <img src={window.discover} />
                                    </label>
                                    <br />
                                    <input type="radio" name="paypal" />
                                    <label>
                                        <img src={window.paypal} />
                                    </label>
                                <h3>${total.toFixed(2)}</h3>
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
