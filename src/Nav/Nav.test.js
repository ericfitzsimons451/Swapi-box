import React from 'react';
import Nav from './Nav.js';
import { shallow } from 'enzyme';

const mockFetchPeople = jest.fn()
const mockClick = 

describe('Nav', () => {
    let wrapper;

    it('should match the snapshot with all data passed down', () => {
        wrapper = shallow(
            <Nav fetchPeople={mockFetchPeople} />
        )
    })

    it('should register a click when PEOPLE is clicked', () => {
        wrapper.find('.people-btn').simulate('click')
        expect(mockFetchPeople).toHaveBeenCalled()
    })

    
})