import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import HotSpotLocations from './components/hotspot_locations.js';

// const HotSpotLocations = ({ text }) => <div>{text}</div>;

var SimpleMap = React.createClass({
  getDefaultProps: function () {
    return {
      center: {lat: 59.95, lng: 30.33},
      zoom: 10,
      hotspotCoords: {lat: 52.028611, lng: 6.021111}
    };
  },

  render() {
    return (
      <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <HotSpotLocations
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMap>
    );
  }
})

module.exports = SimpleMap;
