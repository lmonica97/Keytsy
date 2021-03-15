import React from 'react';
import SearchResultsShow from './search_results_show';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: this.props.history.location.search
        }
        let { products } = this.props;
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
        const { products } = this.props;
        debugger
        return null;
    }
}

export default SearchResults