import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MapContainer from './MapContainer';
import Header from './Header.js';
import Home from './Home.js';
import Sidebar from './Sidebar.js';
import './App.css';

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
      },
      showingInfoWindow: false,
      activeMarker: null,
      selectedPlace: null,
      sideBarView: null
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
              if (this.state.burgers.length !== 0)
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
          <Route
            path="/"
            render={() => (
              <Header
                appState={this.state}
                updateAppState={this.updateAppState}
              />
            )}
          />

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
                      updateAppState={this.updateAppState}
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
              path="/map/lat=:lat/lng=:lng"
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
                    updateAppState={this.updateAppState}
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
