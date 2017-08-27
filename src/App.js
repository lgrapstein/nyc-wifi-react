import React, { Component } from 'react';
import logo from '../public/wifinyc.png';
import SimpleMap from './SimpleMap.js';
import ProviderForm from './components/provider_form.js';
import Marker from './components/marker.js';
import InfoWindow from './components/info_window.js';
import HotSpotLocations from './components/hotspot_locations.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form>
            Find internets within
            <input type="number" id="distance" value="1" required="required" />
            <select id="measure">
              <option value="miles">mile(s)</option>
              <option value="kilometers">kilometer(s)</option>
            </select>
            of here.<br></br>
          </form>
          <ProviderForm />
          <SimpleMap />
          <Marker />
          <InfoWindow />
          <HotSpotLocations />
        </div>
      </div>
    );
  }
}
