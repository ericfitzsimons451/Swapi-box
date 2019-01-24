import React, { Component } from 'react';
import TextScroll from './TextScroll';
import Nav from './Nav.js'
import Person from './Person.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      crawlText: null,
      people: null
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/'
    fetch(url)
      .then(response => response.json())
      .then(starWarsData => this.fetchFilms(starWarsData.films))
      .then(crawlText => this.setState({ crawlText }))
}
  fetchFilms = (url) => {
    const randomNum = Math.ceil(Math.random() * 7)
    const filmCrawlText = fetch(url + randomNum)
      .then(response => response.json())
      .then(film => film.opening_crawl)
      .catch(err => console.log(err))
      return filmCrawlText
  }

  fetchPeople = () => {
    let peoplePromises = []
    for (var i = 1; i < 10; i++) {
      const url = `https://swapi.co/api/people/?page=${i}`
      peoplePromises.push(fetch(url)
      .then(response => response.json())
      .then(people => this.setState({ people: people.results })))
     
    }
    Promise.all(peoplePromises)
  }

  render() {
    const { crawlText, people } = this.state

    if (!crawlText) {
      return (
        <div className="App">
          <h1>Swapi Box</h1>
          <h2>Loading data...</h2>
        </div>
      );
    } else if (people) {
      return(
        <div className="App">
          <h1>Swapi Box</h1>
          <Nav fetchPeople={this.fetchPeople} />
          <TextScroll crawlText={crawlText} />
          {
            this.state.people.map((person) => {
              return <Person information={person} />
            })
          }
      </div>
      )
    } else {
      return(
      <div className="App">
        <h1>Swapi Box</h1>
        <Nav fetchPeople={this.fetchPeople} />
        <TextScroll crawlText={crawlText} />
      </div>
      )
    } 
  }

}

export default App;

