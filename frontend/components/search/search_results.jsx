import React from 'react';
import SearchResultsShow from './search_results_show';
const queryString = require('querystring');

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const search = queryString.parse(this.props.location.search);
        const { products } = this.props;
        let searchProducts = products.filter(product => product.product_name.toLowerCase().includes(search["?search"].toLowerCase()))
        debugger
        return (
            <div>
                {searchProducts.map(product=> <SearchResultsShow product={product} />)}
            </div>
        )
    }
}

export default SearchResults