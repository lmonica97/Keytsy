import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        // debugger
        this.state={
            keywords: ''
        }
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    render() {
        return (
            <div>
                <input
                type="text"
                value={this.state.keywords}
                placeholder={"Search for anything"}
                onChange={this.update('keywords')} />
                <div>
                    <button className="search-button">{window.search}</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;