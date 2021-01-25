import { connect  } from 'react-redux'
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        product: state.entities.products[ownProps.match.params.id],
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);







