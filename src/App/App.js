import React, { Component } from 'react';
import TextScroll from '../TextScroll/TextScroll.js';
import Nav from '../Nav/Nav.js'
import Person from '../Person/Person.js'
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
    } catch (error) {
      console.log(error)
    }
  }

  fetchPeople = async () => {
      const url = 'https://swapi.co/api/people/'
      try {
        const response = await fetch(url)
        const people = await response.json()
        const updatedPeople = await this.fetchUpdatedPeople(people)
        await this.setState({ people: updatedPeople })
      } catch (error) {
        console.log(error)
      }
  }

  fetchUpdatedPeople = async (aliens) => {
    const updatedAliens = aliens.results.map( async (alien) => {
      const response = await fetch(alien.homeworld)
      const foundWorld = await response.json()
      const { name, population } = foundWorld
      return (
          { ...alien, homeworld: name, population: population }
        )
    })
    return await Promise.all(updatedAliens)
  }



  render() {
    const { crawlText, people, title, releaseDate } = this.state

    if (!crawlText) {
      return (
        <div className="App">
          <h1 className="title">Swapi Box</h1>
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

