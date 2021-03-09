import { connect } from 'react-redux';
import { fetchAllCategory, allCategories } from '../../actions/category_actions';
import CategoryNav from './category_nav';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        categories: Object.values(state.entities.categories)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCategory: categoryId => dispatch(fetchAllCategory(categoryId)),
        allCategories: () => dispatch(allCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav)

