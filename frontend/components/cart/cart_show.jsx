import React from 'react';
import Select from 'react-select';

class CartShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: this.props.user,
            product: this.props.id,
            quantity: { label: this.props.quantity, value: this.props.quantity }
        }
        debugger
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

    update(value) {
        debugger
        this.setState({quantity: value})
        debugger
    }

    render() {
        let quantity = this.props.quantity
        let totalPrice = (quantity * this.props.price)
        let item = {id: this.props.cartItem, user: this.props.user, product: this.props.id, quantity: this.state.quantity.value}
        return (
            <li className="cartshow-index" key={this.props.id}>
                <div className="cartshow-item-index">
                    <div>
                        <div className="cartshow-seller">
                            <div>
                                <img className="cartshow-seller-pic" src={window.anon} />
                            </div>
                            <div>
                                <h3 className="cartshow-seller-name">{this.props.seller}</h3>
                            </div>
                        </div>
                        <div> 
                            <img className="cartshow-image"src={this.props.photo} />
                        </div>
                    </div>
                    <div className="cartshow-strings">
                        <div className="cartshow-name">
                            <p>{this.props.name}</p>
                        </div>
                        <div>
                            <Select 
                                options={this.options}
                                value={this.state.quantity}
                                onChange={value => this.update(value)}
                                defaultValue={{ label: this.state.quantity, value: this.state.quantity }}
                            />
                        </div>
                        <div className="cartshow-price">
                            { quantity === 1 ? (
                                <span>${this.props.price}</span>
                            ) : (
                                <span>${totalPrice.toFixed(2)} <br /> (${this.props.price} each)</span>  
                            )
                            }   
                        </div>
                    </div> 
                    <div className="remove-item">
                        <button className="remove-button" onClick={() => this.props.removeitem(this.props.id)}>Remove</button>
                        <button className="update-button" onClick={() => this.props.updateItem(item)}>Update</button>
                    </div>
                </div>
            </li>
        )
        }
}

export default CartShow