import React from 'react';
import './TextScroll.scss'

const TextScroll = (props) => {
    const { crawlText, title, releaseDate } = props;
      return (
        <div className='scrolling-container'>
          <h3 className="scrolling-text">{title}<br />{crawlText}<br />{releaseDate}</h3>
        </div>
    )
}

export default TextScroll;