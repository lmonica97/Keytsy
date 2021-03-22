import React from 'react';
import SearchResultsShow from './search_results_show';
const queryString = require('querystring');
import SingleRecommendation from './single_recommendation';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.products.length !== this.props.products.length) {
            this.props.fetchProducts();
        }
    }

    render() {
        const search = queryString.parse(this.props.location.search);
        const { products } = this.props;
        let searchProducts = products.filter(product => product.product_name.toLowerCase().includes(search["?search"].toLowerCase()) || product.description.toLowerCase().includes(search["?search"].toLowerCase()))
        return (
            <div className="search-results">
                <h1 className="search-results-header">Search Results</h1>
                { searchProducts.length === 0 ? 
                    <div> 
                        <p className="no-search-result">Sorry, there are no products that match "{search['?search']}". <br /> Please try searching something else.</p>
                        <img className="no-search-img" src={window.sad} />
                    </div>  
                    : 
                    <div className="search-results-container">
                        {searchProducts.map(product=> <SearchResultsShow key={product.id} product={product} />)}
                    </div>
                }
                <div>
                    <h3 className="search-results-header">Recommendations</h3>
                    <div className="search-results-container">
                        <SingleRecommendation product={products.slice(45,46)} />
                        <SingleRecommendation product={products.slice(66,67)} />
                        <SingleRecommendation product={products.slice(55,56)} />
                        <SingleRecommendation product={products.slice(87,88)} />
                        <SingleRecommendation product={products.slice(33,34)} />             
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults