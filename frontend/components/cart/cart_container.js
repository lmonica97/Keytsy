// import { connect } from 'react-redux';
// import Cart from './cart';
// import { fetchAllitems, addItem, updateItem, removeItem } from '../../actions/cartitem_actions';

// const mapStateToProps = (state, ownProps) => {
//     // debugger
//     return {
//         user: state.session.currentUser.id,
//         items: Object.values(state.entities.cartitems)
//     }
//     // debugger
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         fetchAllitems: () => dispatch(fetchAllitems()),
//         updateItem: cartitem => dispatch(updateItem(cartitem)),
//         removeItem: cartitemId => dispatch(removeItem(cartitemId)),
//         addItem: cartitem => dispatch(addItem(cartitem))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);