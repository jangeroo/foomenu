import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  _doesNotAffectSideBar = () => {
    this.props.updateAppState({ sideBarIsOpen: false });
  };

  render() {
    return (
      <div className="App-header">
        <h1>
          <Link
            className="linkStyle"
            to="/"
            onClick={this._doesNotAffectSideBar}
          >
            Foomenu
          </Link>
        </h1>
      </div>
    );
  }
}

export default Header;
