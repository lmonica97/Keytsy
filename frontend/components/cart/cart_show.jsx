import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

class CartShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: this.props.user,
            product: this.props.id,
            quantity: { label: this.props.quantity, value: this.props.quantity }
        }
        this.options = [
            {label: 1, value: 1},
            {label: 2, value: 2},
            {label: 3, value: 3},
            {label: 4, value: 4},
            {label: 5, value: 5},
            {label: 6, value: 6},
            {label: 7, value: 7},
            {label: 8, value: 8},
            {label: 9, value: 9},
            {label: 10, value: 10},
            {label: 11, value: 11},
            {label: 12, value: 12},
            {label: 13, value: 13},
        ]
    }

    componendDidUpdate(prevProps, prevState) {

    }

    update(value) {
        this.setState({quantity: value})
    }

    render() {
        let quantity = this.props.quantity
        let totalPrice = (quantity * this.props.price)
        let item = {id: this.props.cartItem, user: this.props.user, product: this.props.id, quantity: this.state.quantity.value}
        return (
            <li className="cartshow-index" key={this.props.id}>
                <div className="cartshow-seller">
                    <div>
                        <img className="cartshow-seller-pic" src={window.anon} />
                    </div>
                    <div>
                        <h3 className="cartshow-seller-name">{this.props.seller}</h3>
                    </div>
                </div>
                <div className="item-index">
                    <div> 
                        <Link to={`/products/${this.props.id}`} ><img className="cartshow-image"src={this.props.photo} /></Link>
                    </div>
                    <div className="cartshow-strings">
                        <div className="cartshow-name">
                            <Link to={`/products/${this.props.id}`} style={{textDecoration:'none', color:'black'}}><p className="cart-name">{this.props.name}</p></Link>
                        </div>
                        <div className="select-cart">
                            <Select 
                                className="cart-quant"
                                options={this.options}
                                value={this.state.quantity}
                                onChange={value => this.update(value)}
                                defaultValue={{ label: this.state.quantity, value: this.state.quantity }}
                            />
                        </div>
                        <div className="cartshow-price">
                            { quantity === 1 ? (
                                <div>
                                    <span className="cartitem-single">${this.props.price}</span>
                                </div>
                            ) : (
                                <div>
                                    <span className="cartitem-total">${totalPrice.toFixed(2)}</span>  
                                    <p className="cartitem-each">(${this.props.price} each)</p>
                                </div>
                            )
                            }   
                        </div>
                    </div> 
                    <div className="remove-item">
                            <button className="update-button" onClick={() => this.props.updateItem(item)}>Update</button>
                            <button className="remove-button" onClick={() => this.props.removeitem(this.props.cartItem)}>Remove</button>
                    </div>
                </div>
                <div>
                    <label className="checkbox-container">
                        <input type="checkbox" className="checkmark"></input>
                        This order is a gift
                    </label>
                    <p className="side-comment">Prices will not be shown on packing slip</p>
                </div>
                <textarea className="cart-textarea" placeholder={"Add a note to " + this.props.seller + " (optional)"}></textarea>
            </li>
        )
        }
}

export default CartShow