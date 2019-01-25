import React from 'react';
import Person from './Person.js';
import { shallow } from 'enzyme';

const mockPerson = { 
    name: 'Luke', 
    homeworld: 'Tatooine',
    species: 'human'
}

describe('Person', () => {
    let wrapper;

    it('should match the snapshot with all data passed down', () => {
        wrapper = shallow(
            <Person information={mockPerson} />
        )
    })
})