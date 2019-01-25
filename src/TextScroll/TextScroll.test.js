import React from 'react';
import TextScroll from './TextScroll.js';
import { shallow } from 'enzyme';

const mockCrawlText = 'Hello, yo!'
const mockTitle = 'A New Hope'
const mockReleaseDate = '11-20-1975'

describe('TextScroll', () => {
    let wrapper;

    it('should match the snapshot with all data passed down', () => {
        wrapper = shallow(
            <TextScroll crawlText={mockCrawlText}
                        title={mockTitle}
                        releaseDate={mockReleaseDate} />
        )
    })
})