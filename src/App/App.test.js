import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

describe('App', () => {
  let wrapper;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('updates state after a fetch', () => {

  // })
})

