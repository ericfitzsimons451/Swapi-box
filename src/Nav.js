import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: null
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.props.fetchPeople}>People</button>
                <button>Vehicles</button>
                <button>Planets</button>
            </div>
        )
    }
}


export default Nav;