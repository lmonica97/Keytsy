import React from 'react';
import CategoryProductShow from './category_product_show'

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
        this.filterUpdate = this.filterUpdate.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCategory(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchAllCategory(this.props.match.params.id)
        }
    }

    render() {
        let { allProducts, category } = this.props;
        if (!category) {
            return (
                <div>Fetch Products...</div>
            )
        } else {
            return (
                <div>
                    <div>
                        <h1 className="category-header">{category.category_name}</h1>
                    </div>
                    <div className="category-main">
                        <div className="category-price-header">
                            <p>Price ($)</p>
                            <input type="radio" name="price" className="filter-price" defaultChecked />
                                <label>Any Price</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" />
                                <label>Under $25</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" />
                                <label>$25 to $50</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" />
                                <label>$50 to $100</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" />
                                <label>Over $100</label>
                            <br />
                        </div>
                            <ul className="category-product-container">
                                {allProducts.map(product => 
                                    <CategoryProductShow product={product} />    
                                )}
                            </ul>
                    </div>
                </div>
            )
        }
    }
}

export default CategoryShow