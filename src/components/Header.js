import React, { Component } from 'react';

class Header extends Component {
    // Prevents the title from being re-rendered when any changes happen
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return <h1 className='f1'>RoboFriends</h1>
    }
}

export default Header;