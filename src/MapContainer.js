import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from './config';

export class MapContainer extends Component {
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
        >
          {this.props.markers.length !== 0 ? (
            this.props.markers.map((burger, index) => {
              return (
                <Marker
                  key={index}
                  title={`${index}: ${burger.name}`}
                  name={burger.name}
                  position={burger.restaurant.location}
                />
              );
            })
          ) : (
            <Marker
              key={'My Location'}
              title={`My Coordinates: ${this.props.center}`}
              name={'My Location'}
              position={this.props.center}
            />
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY
})(MapContainer);
