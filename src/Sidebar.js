import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import BurgerList from './BurgerList.js';

class Sidebar extends React.Component {
  _closeMenu = index => {
    this.props.updateAppState({
      sideBarIsOpen: false,
      mapCenter: {
        lat: this.props.appState.burgers[index].restaurant.location.lat,
        lng: this.props.appState.burgers[index].restaurant.location.lng
      }
    });
  };

  render() {
    return (
      <div className="sidebar-container">
        <Menu width={'50%'} isOpen={this.props.appState.sideBarIsOpen}>
          <BurgerList
            closeMenu={this._closeMenu}
            appState={this.props.appState}
            updateAppState={this.props.updateAppState}
          />
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
