import React, { Component } from 'react';
import {Form, Field} from 'simple-react-forms';

export default class ProviderForm extends Component {
  onClickHandler() {
    console.log(this.refs['simpleForm'].getFormValues());
  }

  render() {
    return (
      <div>
        <Form ref='simpleForm'>
          <label>Find internets within</label>
          <Field
            id='distance'
            value='1'
            validators={['required']}
          />
          <Field
            id='measure'
            value='miles'
            label='Mile(s)'
          />
          <Field
            id='measure'
            value='kilometers'
            label='Kilometer(s)'
          />
          <p>of here.</p>
          <label>Filter By Provider:</label>
          <Field
            name='Time Warner (Spectrum)'
            label='Time Warner (Spectrum)'
            id='time-warner'
            type='checkbox'
          />
          <Field
            name='Cablevision (Altice USA)'
            label='Cablevision (Altice USA)'
            id='cablevision'
            type='checkbox'
          />
          <Field
            name='AT&T'
            label='AT&T'
            id='att'
            type='checkbox'
          />
        </Form>
        <button onClick={this.onClickHandler.bind(this)}>FIND INTERNET!</button>
      </div>
    );
  }
}
