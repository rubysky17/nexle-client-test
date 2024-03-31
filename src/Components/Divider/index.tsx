import React from 'react'
import "./style.css";

function HDivider(props) {
    const { text, className } = props;

    return (
        <div className={`header__center ${className}`}>{text}</div>
    )
}

export default HDivider