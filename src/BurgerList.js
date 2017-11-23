import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem.js';

class BurgerList extends Component {
  render() {
    if (this.props.appState.burgers.length === 0) return <div>loading</div>;
    return (
      <div className="App-cheapest-content">
        {this.props.appState.burgers.map((burger, index) => {
          return (
            <div className="item-container" key={index}>
              <Link
                to={`/map/lat=${burger.restaurant.location.lat}/lng=${burger
                  .restaurant.location.lng}`}
                className="linkStyle"
                onClick={() => this.props.closeMenu(index)}
              >
                <ListItem item={burger} itemDisplay="list" />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BurgerList;
