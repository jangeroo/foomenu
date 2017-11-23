import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from './config';

export class MapContainer extends Component {
  _onBurgerMarkerClick = (burger, index, marker) => {
    this.props.updateAppState({
      selectedPlace: { ...burger },
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
          {/* Renders Markers of all the burgers on the map */}
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
            {this.props.appState.selectedPlace ? (
              <div className="info-window">
                <img
                  src="http://www.myiconfinder.com/uploads/iconsets/256-256-50d2bb24a01a3c32510470c6cf675782-burger.png"
                  height="100px"
                  width="100px"
                />
                <h1>{this.props.appState.selectedPlace.name}</h1>
                RATE STARS (AVG RATING __)
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
