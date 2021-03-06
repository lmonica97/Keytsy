import { connect } from 'react-redux';
import CategoryShow from './category_show';
import { fetchAllCategory } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        category: state.entities.categories[ownProps.match.params.id],
        allProducts: Object.values(state.entities.categoryProducts)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCategory: categoryId => dispatch(fetchAllCategory(categoryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);