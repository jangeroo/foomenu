import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>
          <Link className="linkStyle" to="/" onClick={this.props.reset}>
            Foomenu
          </Link>
        </h1>
      </div>
    );
  }
}

export default Header;
