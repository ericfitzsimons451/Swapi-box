import React from 'react';
import './Nav.scss';

const Nav = (props) => {
    const { fetchPeople } = props
    return(
        <div className="nav-container">
            <button onClick={fetchPeople} className='people-btn'>People</button>
            <button>Vehicles</button>
            <button>Planets</button>
            <button>Favorites 0</button>
        </div>
    ) 
    
}


export default Nav;