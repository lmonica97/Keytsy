import React from 'react';

class LogoutDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropDown: false,
        }
        this.showDropDown = this.showDropDown.bind(this);
        this.closeDrownDown = this.closeDrownDown.bind(this);
    }

    showDropDown(e) {
        e.preventDefault();
        this.setState({ showDropDown: true })
    }

    closeDrownDown(e) {
        this.setState({ showDropDown: false })
    }

    render() {
        console.log('signout dropdown')
        return (
                <div>
                    <button onClick={() => this.showDropDown}>
                        You
                    </button>
                    {
                    this.state.showDropDown ?
                        (
                            <div>
                                <h3>{currentUser.name}</h3>
                                <button onClick={this.props.signout}>Sign out</button>
                            </div>
                        )
                        :
                        (null)
                    }
                </div>
        )
    }
}

export default LogoutDropdown;