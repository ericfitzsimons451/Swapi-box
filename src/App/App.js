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
      people: null,
      // species: null
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
        const updatedPeople = await this.fetchPeopleInfo(people)
        const updatedPeopleData = await this.fetchSpecies(updatedPeople)
        await this.setState({ people: updatedPeopleData })
      } catch (error) {
        console.log(error)
      }
  }

  fetchPeopleInfo = async (people) => {
    const updatedPeople = people.results.map( async (person) => {
      const response = await fetch(person.homeworld)
      const foundWorld = await response.json()
      const { name, population } = foundWorld
      return (
          { ...person, homeworld: name, population: population }
        )
    })
    return await Promise.all(updatedPeople)
  }

  fetchSpecies = async (people) => {
    const updatedSpecies = people.map( async (person) => {
      const response = await fetch(person.species)
      const species = await response.json()
      return (
        { ...people, species: species.name }
      )
    })
    return await Promise.all(updatedSpecies)
  }

  render() {
    const { crawlText, people, title, releaseDate, species } = this.state

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
              this.state.people.map((person, i) => {
                return <Person information={person}
                               key={i} />
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

