import React, { Component } from 'react';
import TextScroll from './TextScroll';
import Nav from './Nav.js'
import Person from './Person.js'
import './App.scss';

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

  fetchPeople = async () => {
      const url = 'https://swapi.co/api/people/'
      try {
        const response = await fetch(url)
        const people = await response.json()
        await this.setState({ people: people.results })
      } catch (error) {
        console.log(error)
      }
  }

  render() {
    const { crawlText, people } = this.state

    if (!crawlText) {
      return (
        <div className="App">
          <h1 className="title">Swapi Box</h1>
          <h2>Loading data...</h2>
        </div>
      );
    } else if (people) {
      return(
        <div className="App">
          <TextScroll crawlText={crawlText} />
          <h1 className="title">Swapi Box</h1>
          <Nav fetchPeople={this.fetchPeople} />
          <div className="people-display-container">
            {
              this.state.people.map((person) => {
                return <Person information={person} />
              })
            }
          </div>
      </div>
      )
    } else {
      return(
      <div className="App">
        <TextScroll crawlText={crawlText} />
        <h1 className="title">Swapi Box</h1>
        <Nav fetchPeople={this.fetchPeople} />
      </div>
      )
    } 
  }

}

export default App;

