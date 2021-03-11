import React from 'react';
import SearchResults from './search_results';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    render() {
        const { products } = this.props;
        debugger
        return(
            <div>
                <button className="search-button-signout"><img className="search-image"src={window.magnifying} /></button>
                <input 
                type="text" 
                className="searchBar-signout" 
                placeholder="Search for anything"
                value={this.state.searchTerm}
                onChange={this.update('searchTerm')}>
                </input>
            </div>
        )
    }
}

export default Search;