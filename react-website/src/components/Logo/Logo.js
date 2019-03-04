import React from 'react';

import spryteLogo from '../../assets/images/logo.png';
import './Logo.css';
// Here is how we add images to the JS file

const logo = (props) => (
    <div className="Logo" >
        <img src={spryteLogo} alt="MyApp"/>
    </div>
);

export default logo;