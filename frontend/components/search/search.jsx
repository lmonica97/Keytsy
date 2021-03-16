import React from 'react';
import SearchResults from './search_results';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
const queryString = require('querystring');
 
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const {searchTerm} = this.state
        this.props.history.push({ pathname: '/search', search: `search=${searchTerm}`})
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="search-bar-form">
                <input 
                    type="text" 
                    className="searchBar-signout" 
                    placeholder="Search for anything"
                    value={this.state.searchTerm}
                    onChange={this.update('searchTerm')}>
                </input>
                <button className="search-button-signout"><img className="search-image"src={window.magnifying} /></button>
            </form>
        )
    }
}

export default withRouter(Search);