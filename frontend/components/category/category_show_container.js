import { connect } from 'react-redux';
import CategoryShow from './category_show';
import { fetchAllCategory } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
    debugger 
    return {
        categories: Object.values(state.entities.categories)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCategory: categoryId => dispatch(fetchAllCategory(categoryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);