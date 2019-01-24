import React, { Component } from 'react';
import TextScroll from './TextScroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      crawlText: null
    }
  }

  fetchFilms = (url) => {
    const randomNum = Math.ceil(Math.random() * 7)
    const filmCrawlText = fetch(url + randomNum)
      .then(response => response.json())
      .then(film => film.opening_crawl)
      .catch(err => console.log(err))
      return filmCrawlText
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/'
    fetch(url)
      .then(response => response.json())
      .then(starWarsData => this.fetchFilms(starWarsData.films))
      .then(crawlText => this.setState({ crawlText }))
}

  render() {
    const { crawlText } = this.state

    if (!crawlText) {
      return (
        <div className="App">
          <h1>Swapi Box</h1>
          <h2>Loading data...</h2>
        </div>
      );
    } else {
      return(
      <div className="App">
        <h1>Swapi Box</h1>
        <TextScroll crawlText={crawlText} />
      </div>
      )
    }
  }

}

export default App;

