import React from 'react';
import './Person.scss'

const Person = (props) => {
    const { name, homeworld, population, species } = props.information
    return(
        <div className="person-card">
            <h2>{name}</h2>
            <h3>Homeworld: {homeworld}</h3>
            <h3>Population: {population}</h3>
            <h3>Species: {species}</h3>
        </div>
     )
}

export default Person;