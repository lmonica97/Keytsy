import { connect } from 'react-redux';
import { fetchProducts } from '../actions/product_actions';
import Splash from './splash';

const mapStateToProps = (state, ownProps) => {
    return {
        products: Object.values(state.entities.products)
    }
} 

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)