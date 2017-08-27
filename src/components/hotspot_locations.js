import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { hotspotLocationsStyle } from './hotspot_locations_styles.js';

var HotSpotLocations = React.createClass({
  getDefaultProps: function () {
    return {
      text: ''
    };
  },
  
  render() {
    return (
       <div style={hotspotLocationsStyle}>
          {this.props.text}
       </div>
    );
  }
});

module.exports = HotSpotLocations;
