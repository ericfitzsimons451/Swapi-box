import React from 'react';
import './TextScroll.scss'

const TextScroll = (props) => {
    console.log(props)
    return(
        <h3>{props.crawlText}</h3>
    )
}

export default TextScroll;