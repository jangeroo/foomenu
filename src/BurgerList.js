import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem.js';



class BurgerList extends Component {

  render() {
    return (
      <div className="App-cheapest-content">
          {this.props.appState.burgers.map((burger, index) => {
            return (
              <div className="item-container" key={index}>
                <Link className="linkStyle" to="/map" onClick={this.props.closeMenu}>
                  <ListItem item={burger} />
                </Link>
              </div>)
          })}
      </div>
    );
  }

}

export default BurgerList;
