import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: null
        }
    }

    render() {
        return(
            <div className="nav-container">
                <button onClick={this.props.fetchPeople}>People</button>
                <button>Vehicles</button>
                <button>Planets</button>
            </div>
        )
    }
}


export default Nav;