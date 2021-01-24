import { connect  } from 'react-redux'
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        product: state.product[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        fetchProduct: product => dispatch(fetchProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);







