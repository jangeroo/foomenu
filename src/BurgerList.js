import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem.js';
import foomenu from './backend.js';


class BurgerList extends Component {

  constructor(){
    super();
    this.state = {showItemInfo: [],}
  }

  async componentWillMount() {
    if (this.props.sortOrder === 'price'){
      this.props.updateAppState({ burgers: await foomenu.getCheapestBurger() });
    }
  }
  _closeBurgerList = () =>{
    this.props.updateAppState({sideBarIsOpen: false});
  }

  render() {
    return (
      <div className="App-cheapest-content">
          {this.props.appState.burgers.map((burger, index) => {
            return (
              <div className="item-container" key={index}>
                <Link className="linkStyle" to="/map" onClick={this._closeBurgerList}>
                  <ListItem item={burger} />
                </Link>
              </div>)
          })}
      </div>
    );
  }

}

export default BurgerList;
