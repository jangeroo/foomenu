import React, { Component } from 'react';
import ListItem from './ListItem.js'
import foomenu from './backend-mock.js';


class BurgerList extends Component {

  async componentWillMount() {
    if (this.props.sortOrder === 'price')
      this.props.updateAppState({ burgers: await foomenu.getCheapestBurger() })
  }

  render() {
    return (
      <div className="App-cheapest-content">
        <ol>
          {this.props.appState.burgers.map((burger, index) => {
            return (
              <li key={index}>
                <ListItem item={burger} />
              </li>)
          })}
        </ol>
      </div>
    );
  }

}

export default BurgerList;
