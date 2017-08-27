import React, { Component } from 'react';
import logo from '../public/wifinyc.png';
import SimpleMap from './SimpleMap.js';
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
            Filter By Provider:<br></br>
            Time Warner (Spectrum)
            <input type="checkbox" label="Time Warner (Spectrum)" id="time-warner" /><br></br>
            Cablevision (Altice USA)
            <input type="checkbox" label="Cablevision (Altice USA)" id="cablevision" /><br></br>
            AT&T
            <input type="checkbox" label="AT&T" id="att"/>
            <br></br>
            <button type="submit" className="button">FIND INTERNET!</button><br></br>
          </form>
          <SimpleMap />
          <Marker />
          <InfoWindow />
          <HotSpotLocations />
        </div>
      </div>
    );
  }
}
