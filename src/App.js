import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount = () => {
    fetch('https://swapi.co/api/')
    .then(response => response.json())
    .then(data => {
      this.setState({data: data})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
       <h1>Swapi Box</h1>
      </div>
    );
  }

}

export default App;

