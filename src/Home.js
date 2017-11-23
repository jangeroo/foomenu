import React, { Component } from 'react';
import foomenu from './backend.js';
import StartMenu from './StartMenu.js';

class Home extends Component {
  _handleCheapest = async () => {
    this.props.updateAppState({
      sortOrder: 'price',
      burgers: await foomenu.getCheapestBurger(),
      sideBarIsOpen: true
    });
  };

  _handleNearest = async () => {
    this.props.updateAppState({
      sortOrder: 'distance',
      burgers: await foomenu.getNearestBurger(),
      sideBarIsOpen: true,
      sideBarView: 'burgerList'
    });
  };

  render() {
    return (
      <div className="App-home-content">
        <div className="home-container">
          <StartMenu
            handleCheapest={this._handleCheapest}
            handleNearest={this._handleNearest}
          />
        </div>
      </div>
    );
  }
}

export default Home;
