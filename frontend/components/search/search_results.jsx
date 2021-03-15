import React from 'react';
import SearchResultsShow from './search_results_show';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        let { products } = this.props;
        debugger
    }

    componentDidMount() {
        this.props.fetchProducts()
        debugger
    }

    searchProducts() {
        debugger
        return this.products.filter(product => product.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    render() {
        return (
            <div>
                {this.products.map(product => 
                    <SearchResultsShow product={product} />    
                )}
            </div>
        )
    }
}

export default SearchResults