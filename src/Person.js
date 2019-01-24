import React from 'react';
import './Person.scss'

const Person = (props) => {
    const { name, homeworld, species } = props.information
     return(
         <div className="person-card">
             <h2>{name}</h2>
             <h3>{homeworld}</h3>
             <h3>{species}</h3>
         </div>
     )
}

export default Person;