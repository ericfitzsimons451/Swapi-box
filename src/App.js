import React, { Component } from 'react';
import TextScroll from './TextScroll';
import Nav from './Nav.js'
import Person from './Person.js'
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: null,
      releaseDate: null,
      crawlText: null,
      people: null
    }
  }

  async componentDidMount() {
    const url = 'https://swapi.co/api/'
    const response = await fetch(url)
    const starWarsData = await response.json()
    this.fetchFilms(starWarsData.films)
    await this.setState({ crawlText: starWarsData.crawl })
  }

  fetchFilms = async (url) => {
    const randomNum = Math.ceil(Math.random() * 7)
    try {
      const response = await fetch(url + randomNum)
      const film = await response.json()
      const crawl = film.opening_crawl
      const title = film.title
      const releaseDate = film.release_date
      this.setState({ crawlText: crawl, title: title, releaseDate: releaseDate })
    } catch(error) {
      console.log(error)
    }
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
    const { crawlText, people, title, releaseDate } = this.state

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
          <TextScroll crawlText={crawlText}
                      title={title}
                      releaseDate={releaseDate} />
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
        <TextScroll crawlText={crawlText}
                      title={title}
                      releaseDate={releaseDate} />
        <h1 className="title">Swapi Box</h1>
        <Nav fetchPeople={this.fetchPeople} />
      </div>
      )
    } 
  }

}

export default App;

