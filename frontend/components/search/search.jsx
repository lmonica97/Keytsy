import React from 'react';
import SearchResults from './search_results';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        e.preventDefault();
        debugger
        this.props.history.push({ pathname: '/search', searchInput: this.state.searchTerm})
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button className="search-button-signout"><img className="search-image"src={window.magnifying} /></button>
                    <input 
                    type="text" 
                    className="searchBar-signout" 
                    placeholder="Search for anything"
                    value={this.state.searchTerm}
                    onChange={this.update('searchTerm')}>
                    </input>
                </form>
            </div>
        )
    }
}

export default Search;