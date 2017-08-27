import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

export default class HotSpotLocations extends Component {
  constructor() {
    super()
    this.state = {
      lat: null,
      long:null,
      zoom: 16,
      hotspots: []
    }
  }

  componentWillMount() {
    axios.get('https://data.cityofnewyork.us/api/views/jd4g-ks2z/rows.json?accessType=DOWNLOAD')
    .then((response)=> {
      this.setState({
        hotspots: response.data.data
      })
    })
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
    })
  }

  render() {
    let location
    !!(this.state.lat && this.state.long) ? location = <Map lat={this.state.lat} long={this.state.long} zoom={this.state.zoom} hotspots={this.state.hotspots} /> : location = <h1>LOADING...</h1>
    return (
       <div>
          { location }
       </div>
    );
  }
};
