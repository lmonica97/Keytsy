import React from 'react';
import CategoryShowContainer from './category_show_container';
import { Link } from 'react-router-dom';

class CategoryNav extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    componentDidMount() {
        debugger
        this.props.fetchAllCategories();
        debugger
    }

    render() {
        const { categories } = this.props;
        return (
            <div className="cat-nav-block">
                <div className="cat-nav-container">
                    <ul className="cat-nav-list">
                        { categories.map(category => 
                            <Link to={`/categories/${category.id}`} style={{textDecoration:'none'}}> 
                                <p className="cat-nav-element">{category.category_name}</p>
                            </Link>  
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CategoryNav;