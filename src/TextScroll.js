import React from 'react';
import './TextScroll.scss'

const TextScroll = (props) => {
    console.log(props)
    return(
        <div className='scrolling-container'>
            <h3 className="scrolling-text">{props.crawlText}</h3>
        </div>
    )
}

export default TextScroll;