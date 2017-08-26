import React, { Component } from 'react';
import logo from '../public/wifinyc.png';
import SimpleMap from './simpleMap';
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
            <a href="#" class="button">FIND INTERNET!</a>
          </form>
          <SimpleMap />
        </div>
      </div>
    );
  }
}
