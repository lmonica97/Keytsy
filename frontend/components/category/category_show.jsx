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
            this.props.fetchAllCategory(this.props.match.params.id).then(this.setState({ selectedFilter: 'default'}))
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
                    <div className="category-section">
                        <p className="category-section-all">All categories</p>
                        <p className="category-arrow"> › </p> 
                        <p className="category-section-name">{category.category_name}</p>
                        <p className="category-product-total">({allProducts.length} results)</p>
                    </div>
                    <div className="category-main">
                        <div className="category-price-header">
                            <p>Price ($)</p>
                            <input type="radio" 
                            name="price" 
                            className="filter-price" 
                            value="default" 
                            onChange={this.handleFilter} 
                            checked={selectedFilter === "default"} />
                                <label>Any Price</label>
                            <br />
                            <input type="radio" 
                            name="price" 
                            className="filter-price"
                            value="below" 
                            onChange={this.handleFilter}
                            checked={selectedFilter === "below"} />
                                <label>Under $25</label>
                            <br />
                            <input type="radio" 
                            name="price" 
                            className="filter-price"
                            value="between low" 
                            onChange={this.handleFilter}
                            checked={selectedFilter === "between low"} />
                                <label>$25 to $50</label>
                            <br />
                            <input type="radio" 
                            name="price" 
                            className="filter-price" 
                            value="between high" 
                            onChange={this.handleFilter}
                            checked={selectedFilter === "between high"} />
                                <label>$50 to $100</label>
                            <br />
                            <input type="radio" 
                            name="price" 
                            className="filter-price" 
                            value="above" 
                            onChange={this.handleFilter}
                            checked={selectedFilter === "above"} />
                                <label>Over $100</label>
                            <br />
                        </div>
                            <ul className="category-product-container">
                                {productShow.length === 0 ? 
                                    <div>
                                        <div className="noMatchFilter">Sorry, there are no products that match this price range.</div>  
                                        <img className="noMatch-sad" src={window.sad} />  
                                    </div>
                                    :
                                    productShow.map(product => 
                                    <CategoryProductShow product={product} key={product.id}/>    
                                    )
                                }
                            </ul>
                    </div>
                </div>
            )
        }
    }
}

export default CategoryShow