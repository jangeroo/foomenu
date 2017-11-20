import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <div className="App-header">
                {this.props.backBtn ? (<button className="backBtn" onClick={this.props.routeProps.history.goBack}>Back</button>): <div></div>}
                <h1><Link className='linkStyle' to='/'>Foomenu</Link></h1>
            </div>
        );
    }

}

export default Header;