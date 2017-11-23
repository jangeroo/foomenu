import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import BurgerList from './BurgerList.js';

class Sidebar extends React.Component {
  render() {
    if (this.props.appState.sideBarView === 'burgerList') {
      return (
        <div className="sidebar-container">
          <Menu width={'50%'} isOpen={this.props.appState.sideBarIsOpen}>
            <BurgerList
              appState={this.props.appState}
              updateAppState={this.props.updateAppState}
            />
          </Menu>
        </div>
      );
    } else if (this.props.appState.sideBarView === 'burgerInfo') {
      return (
        <div>
          <Menu width={'50%'} isOpen={this.props.appState.sideBarIsOpen} />
        </div>
      );
    }
  }
}

export default Sidebar;
