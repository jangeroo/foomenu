import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import BurgerList from './BurgerList.js';

class Sidebar extends React.Component {

    _closeBurgerList = () => {
        this.props.updateAppState({ sideBarIsOpen: false });
    }

    render() {
        return (<div className="sidebar-container">
            <Menu width={'50%'} isOpen={this.props.appState.sideBarIsOpen} >
                <BurgerList
                    closeBurgerList={this._closeBurgerList}
                    appState={this.props.appState}
                    updateAppState={this.props.updateAppState} />
            </Menu></div>
        );
    }
}

export default Sidebar;