import React, { Component } from 'react';

class Home extends Component {

  _openBurgerList = () =>{
    this.props.updateAppState({sideBarIsOpen: true})
  }

  render() {
    return (
      <div className="App-home-content">
        <div className="home-container">
          <button className="btn" onClick={this._openBurgerList} >Cheapest burger</button>
        </div>
      </div>
    );
  }

}

export default Home;
