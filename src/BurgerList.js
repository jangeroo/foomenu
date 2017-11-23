import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem.js';

class BurgerList extends Component {
  _findBurgerOnMap(index) {
    this.props.updateAppState({
      burgerIndex: index,
      mapCenter: {
        lat: this.props.appState.burgers[this.props.appState.burgerIndex]
          .restaurant.location.lat,
        lng: this.props.appState.burgers[this.props.appState.burgerIndex]
          .restaurant.location.lng
      }
    });
    /* Closes Side Bar */
    this.props.updateAppState({ sideBarIsOpen: false });
  }

  render() {
    if (this.props.appState.burgers.length === 0) return <div>loading</div>;
    return (
      <div className="App-cheapest-content">
        {this.props.appState.burgers.map((burger, index) => {
          return (
            <div className="item-container" key={index}>
              <Link to={`/map/lat=${burger.restaurant.location.lat}/lng=${burger.restaurant.location.lng}`}
                className="linkStyle"
                onClick={() => this._findBurgerOnMap(index)}
              >
                <ListItem item={burger} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BurgerList;
