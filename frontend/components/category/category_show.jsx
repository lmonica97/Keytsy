import React from 'react';
import CategoryProductShow from './category_product_show'

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.allProducts
        }
        this.filterPriceMin = this.filterPriceMin.bind(this);
        this.filterRange = this.filterRange.bind(this);
        this.filterPriceMax = this.filterPriceMax.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCategory(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchAllCategory(this.props.match.params.id)
        }
    }

    filterPriceMin(price) {
        return (e) => {
            
        }
    }

    filterRange(price1, price2) {
        return (e) => {

        }
    }

    filterPriceMax(price) {
        return (e) => {

        }
    }

    render() {
        let { allProducts, category } = this.props;
        let categoryPic = {
            "Keyboard & Accesories": <img className="cat-navimg" src={window.cat1} />,
            "Jewelry & Accesories": <img className="cat-navimg" src={window.cat2} />,
            "Clothing & Shoes": <img className="cat-navimg" src={window.cat3} />,
            "Home & Living": <img className="cat-navimg" src={window.cat4} />,
            "Wedding & Party": <img className="cat-navimg" src={window.cat5} />,
            "Toys & Entertainment": <img className="cat-navimg" src={window.cat6} />,
            "Arts & Collectables": <img className="cat-navimg" src={window.cat7} />,
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
                            <input type="radio" name="price" className="filter-price" defaultChecked />
                                <label>Any Price</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" onClick={this.filterPriceMin(25)}/>
                                <label>Under $25</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" onClick={this.filterRange(25, 50)}/>
                                <label>$25 to $50</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" onClick={this.filterRange(50, 100)} />
                                <label>$50 to $100</label>
                            <br />
                            <input type="radio" name="price" className="filter-price" onClick={this.filterPriceMax(100)} />
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