import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {GOOGLE_MAPS_API_KEY} from './config'


export class MapContainer extends Component {
render() {
    const style = {
        height: '100%',
        width: '100%'
    }
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={this.props.initialCenter}
        zoom={11}
      >

        {this.props.markers.map((burger, index) => {
          return (
            <Marker key={index}
              title={`${index}: ${burger.name}`}
              name={burger.name}
              position={burger.restaurant.location}
            />
          )
        })}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_MAPS_API_KEY)
})(MapContainer)