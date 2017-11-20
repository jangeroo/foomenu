import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    _handleClick = () => {
        this.props.updateUser({ userID: null });
    }

    render() {
        return (
            <div className='App-navigation-bar'>
                <Link className='nav-button-container menu-button' to='/menu-side'/>
                <Link className='nav-button-container search-button' to='/search'/>
                <Link className='nav-button-container account-button' to='/account'/>
                <Link className='nav-button-container cart-button' to='/cart'/>
                </div>

        )

    }

}

export default NavBar;