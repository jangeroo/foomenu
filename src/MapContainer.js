import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from './config';

export class MapContainer extends Component {
  _onBurgerMarkerClick = (burger, index) => {
    console.log('marker clicked', burger.name, index);
    this.props.updateAppState({
      selectedPlace: burger.name,
      activeMarker: index,
      showingInfoWindow: true
    });
  };

  _onMapClick = () => {
    console.log('map clicked');
    if (this.props.appState.showingInfoWindow) {
      this.props.updateAppState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      height: '100%',
      width: '100%'
    };

    return (
      <div className="Map-contents">
        <Map
          google={this.props.google}
          style={style}
          initialCenter={this.props.initialCenter}
          center={this.props.center}
          zoom={12}
          onClick={this._onMapClick}
        >
          {this.props.markers.map((burger, index) => {
            return (
              <Marker
                key={index}
                title={`${index}: ${burger.name}`}
                name={burger.name}
                position={burger.restaurant.location}
                onClick={() => this._onBurgerMarkerClick(burger, index)}
              />
            );
          })}
          <Marker
            key={'My Location'}
            title={`My Coordinates: ${this.props.center}`}
            name={'My Location'}
            position={this.props.appState.currentLocation}
          />
          <InfoWindow
            marker={this.props.appState.activeMarker}
            visible={this.props.appState.showingInfoWindow}
          >
            <div>
              <h1>{this.props.appState.selectedPlace}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY
})(MapContainer);
