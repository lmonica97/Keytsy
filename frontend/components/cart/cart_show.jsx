// import React from 'react';

// class CartShow extends React.Component{
//     constructor(props){
//         super(props)
//     }


//     render() {
//         return (
//             <li className="cartshow-index" key={this.props.id}>
//                 <div className="cartshow-item-index">
//                     <div>
//                         <div className="cartshow-seller">
//                             <div>
//                                 <img className="cartshow-seller-pic" src={window.anon} />
//                             </div>
//                             <div>
//                                 <h3 className="cartshow-seller-name">{this.props.seller}</h3>
//                             </div>
//                         </div>
//                         <div> 
//                             <img className="cartshow-image"src={this.props.photo} />
//                         </div>
//                     </div>
//                     <div className="cartshow-strings">
//                         <div className="cartshow-name">
//                             <p>{this.props.name}</p>
//                         </div>
//                         <div className="cartshow-price">
//                             <span>${this.props.price}</span>
//                         </div>
//                     </div> 
//                     <div className="remove-item">
//                         <button className="remove-button" onClick={() => this.props.removeitem(this.props.id)}>Remove</button>
//                     </div>
//                 </div>
//             </li>
//         )
//         }
// }

// export default CartShow