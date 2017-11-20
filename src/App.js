import React, { Component } from 'react';
import Header from './Header.js'
import Home from './Home.js';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MapContainer from './MapContainer'
import Sidebar from './Sidebar.js'


class App extends Component {

  constructor() {
    super();
    this.state = {
      burgers: [],
      sideBarIsOpen: false,
    }
  }

  updateAppState = update => {
    this.setState(update)
  }

  render() {
    return (
      <BrowserRouter>

        <div className="App">

          {/* <Sidebar> contains burger list! */}
          <Route path="/" render={() => (
            <Sidebar appState={this.state} updateAppState={this.updateAppState} />
          )} />

          {/* <Header> contains the FOOMENU sign and link to HOMEPAGE */}
          <Route path="/" render={() => <Header />} />

          {/* MID-CONTENT contains all the routed paths */}
          <div className="App-mid-content">

            <Route exact path="/" render={() => <Home updateAppState={this.updateAppState} />} />

            <Route exact path="/map"
              render={() => (
                <MapContainer
                  appState={this.state}
                  initialCenter={this.state.burgers[0].restaurant.location}
                  markers={this.state.burgers}
                />
              )}
            />

            <Route exact path="/map"
              render={() => (
                <MapContainer
                  appState={this.state}
                  initialCenter={this.state.burgers[0].restaurant.location}
                  markers={this.state.burgers}
                />
              )}
            />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
