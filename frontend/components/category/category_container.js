import { connect } from 'react-redux';
import { fetchAllCategory } from '../../actions/category_actions';
import CategoryNav from './category_nav';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        categories: state.entities.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCategory: categoryId => dispatch(fetchAllCategory(categoryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav)

