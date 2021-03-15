import { connect } from 'react-redux';
import SearchResults from './search_results';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        products: Object.values(state.entities.products)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);