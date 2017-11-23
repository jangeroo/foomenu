import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from './config';
import ListItem from './ListItem.js';

export class MapContainer extends Component {
  _onBurgerMarkerClick = (burger, index, marker) => {
    console.log(burger, index);
    this.props.updateAppState({
      selectedBurger: this.props.appState.burgers[
        this.props.appState.burgerIndex
      ],
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  _onMapClick = () => {
    if (this.props.appState.showingInfoWindow) {
      this.props.updateAppState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      height: '89%',
      width: '100%'
    };

    return (
      <div className="Map-contents">
        <Map
          google={this.props.google}
          style={style}
          initialCenter={this.props.initialCenter}
          center={this.props.center}
          zoom={15}
          onClick={this._onMapClick}
        >
          {/* Render each marker*/}
          {this.props.markers.map((burger, index) => {
            return (
              <Marker
                key={index}
                title={`${index}: ${burger.name}`}
                name={burger.name}
                position={burger.restaurant.location}
                onClick={(props, marker) =>
                  this._onBurgerMarkerClick(burger, index, marker)}
              />
            );
          })}
          {/* Renders the marker of your location */}
          <Marker
            key={'My Location'}
            title={`My Coordinates: ${this.props.center}`}
            name={'My Location'}
            position={this.props.appState.currentLocation}
          />

          {/* When the infowindow opens, open the information sidebar */}
          <InfoWindow
            marker={this.props.appState.activeMarker}
            visible={this.props.appState.showingInfoWindow}
          >
            {this.props.appState.selectedBurger ? (
              <div className="info-window">
                <ListItem
                  item={this.props.appState.selectedBurger}
                  itemDisplay="info-window"
                />
              </div>
            ) : (
              void 0
            )}
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY
})(MapContainer);
