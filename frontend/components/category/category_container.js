import { connect } from 'react-redux';
import CategoryNav from './category_nav';
import { fetchAllCategory, fetchAllCategories } from '../../actions/category_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        categories: Object.values(state.entities.categories)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCategories: () => dispatch(fetchAllCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav)

