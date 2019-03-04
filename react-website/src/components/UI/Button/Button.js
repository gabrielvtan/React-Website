import React from 'react';

import './Button.css';

// for the button class here, we have to pass in an array so that we can conditionally use a button css style 
// As a reminder the classes have to be passed in as strings
// we need to include our own disabled props because we are using a customized button 
const button = (props) => (
    <button
        disabled={props.disabled}
        className={["Button", [props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;