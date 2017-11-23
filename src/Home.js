import React, { Component } from 'react';
import foomenu from './backend.js';

class Home extends Component {
  _handleCheapest = async () => {
    this.props.updateAppState({
      sortOrder: 'price',
      burgers: await foomenu.getCheapestBurger(),
      sideBarIsOpen: true,
      sideBarView: 'burgerList'
    });
  };

  render() {
    return (
      <div className="App-home-content">
        <div className="home-container">
          <button className="btn" onClick={this._handleCheapest}>
            Cheapest burger
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
