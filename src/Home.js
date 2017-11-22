import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import foomenu from './backend.js';

class Home extends Component {
  _handleCheapest = async () => {
    this.props.updateAppState({
      sortOrder: 'price',
      burgers: await foomenu.getCheapestBurger(),
      sideBarIsOpen: true
    });
  };

  render() {
    return (
      <div className="App-home-content">
        <div className="home-container">
          <button className="btn" onClick={this._handleCheapest}>
            Cheapest burger
          </button>
          <button className="btn" onClick={this._handleCheapest}>
            Nearest burger
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
