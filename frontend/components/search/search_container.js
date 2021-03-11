import { connect } from 'react-redux';
import Search from './search';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        products: state.entities.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);