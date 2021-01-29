// import React from 'react'
// import CartShow from './cart_show';
// import { Link } from 'react-router-dom';

// class Cart extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     componentDidMount() {
//         // debugger
//         this.props.fetchAllitems();
//     }

//     render() {
//         const { items, removeItem } = this.props;
//         // if (this.props.user === undefined) {
//         //     return(
//         //         <div>
//         //             <h1>Your cart is empty.</h1>
//         //             <Link to="/">Discover something unique to fill it up</Link>
//         //         </div>
//         //     )
//         // }
//         let total = 0
//         items.forEach( item => total += parseFloat(item.price))
//         if (!items) {
//             return (
//                 <h1>Fetching items...</h1>
//             )
//         } else {
//             return (
//                 <div>
//                     <div className="cartshow-topheader">
//                         <h2 className="cartshow-header">{items.length} items in your cart</h2>
//                         <Link to="/" ><button>Keep shopping</button></Link>
//                     </div>
//                     <ul className="cartshow-container">
//                         {
//                             items.map(item => (
//                                     <CartShow seller={item.name} name={item.product_name} price={item.price} photo={item.photoUrl} id={item.id}
//                                         removeitem={removeItem} total={total} />
//                             ))
//                         }
//                     </ul>
//                     <div>
//                         <h3>How you'll pay</h3>
//                         <form action="">
//                             <input type="radio" name="creditcard" />
//                             <label>
//                                 <img src={window.mastercard} /> 
//                                 <img src={window.visa} />
//                                 <img src={window.ae} />
//                                 <img src={window.discover} />
//                             </label>
//                             <input type="radio" name="paypal" />
//                             <label>
//                                 <img src={window.paypal} />
//                             </label>
//                         </form>
//                         <h3>${total}</h3>
//                     </div>
//                 </div>
//             )
//         }
//     }
// }

// export default Cart
