import React, { Component } from 'react';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MapContainer from './MapContainer';
import Sidebar from './Sidebar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      burgers: [],
      sideBarIsOpen: false,
      sortOrder: null,
      burgerIndex: 0,
      currentLocation: {
        lat: null,
        lng: null
      },
      mapCenter: {
        lat: null,
        lng: null
      }
    };
  }

  componentWillMount() {
    /* Get Current Location */
    this._getCurrentLocation();
  }

  _getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(st => ({
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          mapCenter: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }));
      });
    }
  }

  updateAppState = update => {
    this.setState(update);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Sidebar> contains burger list! */}
          <Route
            path="/"
            render={() => {
              if (this.state.sortOrder !== null)
                return (
                  <Sidebar
                    appState={this.state}
                    updateAppState={this.updateAppState}
                  />
                );
              else return <div />;
            }}
          />

          {/* <Header> contains the FOOMENU sign and link to HOMEPAGE */}
          <Route path="/" render={() => <Header />} />

          {/* MID-CONTENT contains all the routed paths */}
          <div className="App-mid-content">
            <Route
              exact
              path="/"
              render={() => <Home updateAppState={this.updateAppState} />}
            />

            <Route
              exact
              path="/map"
              render={() => {
                return (
                  <MapContainer
                    appState={this.state}
                    initialCenter={this.state.currentLocation}
                    center={this.state.mapCenter}
                    markers={this.state.burgers}
                  />
                );
              }}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
