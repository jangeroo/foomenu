import React, { Component } from 'react';
import Header from './Header.js'
import Home from './Home.js';
import NavBar from './NavBar.js';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cheapest from './Cheapest.js'


class App extends Component {

  constructor() {
    super();
    this.state = {
      cheapestBurger: [],
      backBtn: false
    }
  }

  updateState = update => {
    // console.log('updating App state with', update);
    this.setState(update)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Header> contains the ALIBAY sign and link to HOMEPAGE */}
          <Route path="/" render={(routeProps)=><Header backBtn={this.state.backBtn} routeProps={routeProps}/>} />


          {/* MID-CONTENT contains all the routed paths */}
          <div className="App-mid-content">

            <Route exact path="/" render={() => <Home backBtnUpdate={this.updateState}/>} />
            <Route exact path="/cheapest" render={(routeProps) => <Cheapest routeProps={routeProps} backBtnUpdate={this.updateState}/>} />

          </div>


          {/* <NavBar>*/}
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
