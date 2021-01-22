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
            <input
            type="text"
            value={this.state.keywords}
            placeholder={"Search for anything"}
            onChange={this.update('keywords')} />
        )
    }
}

export default SearchBar;