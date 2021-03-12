import React from 'react';
import ProductIndexItem from '../products/product_index_item';
import CategoryProductShow from './category_product_show'

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: 'default'
        }
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCategory(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchAllCategory(this.props.match.params.id)
        }
    }

    handleFilter(e) {
        this.setState({ selectedFilter: e.target.value})
    }

    render() {
        let { allProducts, category } = this.props;
        let { selectedFilter } = this.state

        let productShow = (selectedFilter === 'below' ? allProducts.filter(product => product.price < 25)
                            : selectedFilter === 'between low' ? allProducts.filter(product => product.price >= 25 && product.price <= 50)
                            : selectedFilter === 'between high' ? allProducts.filter(product => product.price >= 50 && product.price <= 100)
                            : selectedFilter === 'above' ? allProducts.filter(product => product.price > 100)
                            : allProducts)
        let categoryPic = {
            "Keyboard & Accesories": <img className="cat-navimg" src={window.cat1} />,
            "Jewelry & Accesories": <img className="cat-navimg" src={window.cat2} />,
            "Clothing & Shoes": <img className="cat-navimg" src={window.cat3} />,
            "Home & Living": <img className="cat-navimg" src={window.cat4} />,
            "Wedding & Party": <img className="cat-navimg" src={window.cat5} />,
            "Toys & Entertainment": <img className="cat-navimg" src={window.cat6} />,
            "Art & Collectables": <img className="cat-navimg" src={window.cat7} />,
            "Craft Supplies": <img className="cat-navimg" src={window.cat8} />,
            "Keytsy Gifts & Gift Cards": <img className="cat-navimg" src={window.cat9} />
        }
        if (!category) {
            return (
                <div>Fetch Products...</div>
            )
        } else {
            return (
                <div>
                    <div>
                        {categoryPic[category.category_name]}
                        <h1 className="category-header">{category.category_name}</h1>
                    </div>
                    <div className="category-main">
                        <div className="category-price-header">
                            <p>Price ($)</p>
                            <input type="radio" name="price" className="filter-price" value="default" onChange={this.state.value === 'default'} onChange={this.handleFilter} defaultChecked />
                                <label>Any Price</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" value="below" onChange={this.state.value === 'below'} onChange={this.handleFilter} />
                                <label>Under $25</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" value="between low" hecked={this.state.value === 'between low'} onChange={this.handleFilter} />
                                <label>$25 to $50</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" value="between high" checked={this.state.value === 'between high'} onChange={this.handleFilter} />
                                <label>$50 to $100</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" value="above" checked={this.state.value === 'above'} onChange={this.handleFilter} />
                                <label>Over $100</label>
                            <br />
                        </div>
                            <ul className="category-product-container">
                                {productShow.map(product => 
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