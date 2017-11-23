import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  _goToHomePage = () => {
    this.updateAppState({
      burgers: [],
      sideBarIsOpen: false,
      sortOrder: null,
      burgerIndex: 0,
      mapCenter: this.appState.currentLocation,
      showingInfoWindow: false,
      activeMarker: null,
      selectedPlace: null,
      sideBarView: null
    });
  };

  render() {
    return (
      <div className="App-header">
        <h1>
          <Link className="linkStyle" to="/" onClick={this._goToHomePage}>
            Foomenu
          </Link>
        </h1>
      </div>
    );
  }
}

export default Header;
