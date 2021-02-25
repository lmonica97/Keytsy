import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropDown: false,
        }
        this.showDropDown = this.showDropDown.bind(this);
        // this.closeDrownDown = this.closeDrownDown.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signout.then(this.props.history.push({path:'/', state: this.state }));
    }

    showDropDown(e) {
        e.preventDefault();
        const newState = !this.state.showDropDown
        this.setState({ showDropDown: newState })
    }

    render() {
        return (
                <div>
                    <button className="profile-dropdown" onFocus={this.showDropDown} onBlur={this.showDropDown}>
                    You
                    
                    {
                    this.state.showDropDown ?
                        (
                            <ul className="dropDown-content">
                                <h3>Welcome, {this.props.currentUser.name} </h3>
                                <p onClick={this.props.signout}>↳ Sign out</p>
                                {/* <button onClick={this.props.signout}>Sign out</button> */}
                            </ul>
                        )
                        :
                        (null)
                    }
                    </button>
                </div>
        )
    }
}

export default Dropdown;