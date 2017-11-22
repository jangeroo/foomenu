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
            {/* On new entry to web app, render a map of user's current
            location at the center, with the home buttons floating */}
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div className="frontPage">
                    <MapContainer
                      appState={this.state}
                      initialCenter={this.state.currentLocation}
                      center={this.state.mapCenter}
                      markers={this.state.burgers}
                    />
                    <Home updateAppState={this.updateAppState} />
                  </div>
                );
              }}
            />
            {/* When a user has selected a burger, the map is rendered
             at the url path specified by the restaurant's location,
             and marked with a red marker */}
            <Route
              exact
              path="/map/lng=:lng/lat=:lat"
              render={routeProps => {
                this.state.mapCenter = {
                  lng: routeProps.match.params.lng,
                  lat: routeProps.match.params.lat
                };
                return (
                  <MapContainer
                    appState={this.state}
                    initialCenter={this.state.mapCenter}
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
