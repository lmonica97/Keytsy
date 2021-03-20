import React from 'react';
import { Link } from 'react-router-dom';

class CategoryNav extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllCategories();
    }

    render() {
        const { categories } = this.props;
        return (
            <div className="cat-nav-block">
                <div className="cat-nav-container">
                    <ul className="cat-nav-list">
                        { categories.map(category => 
                            <Link to={`/categories/${category.id}`} style={{textDecoration:'none'}} key={category.id}> 
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