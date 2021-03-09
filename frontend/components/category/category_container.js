import { connect } from 'react-redux';
import CategoryNav from './category_nav';
import { fetchAllCategory, fetchAllCategories } from '../../actions/category_actions';


const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        categories: Object.values(state.entities.categories)
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        fetchAllCategory: categoryId => dispatch(fetchAllCategory(categoryId)),
        fetchAllCategories: () => dispatch(fetchAllCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav)

