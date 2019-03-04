import React from 'react';

import './DrawerToggle.css';

// We include 3 empty div container pairs here bc of how our drawerToggle.css file is set up 
// This will show up for mobile applications
const drawerToggle = (props) => (
    <div onClick={props.clicked} className="DrawerToggle">
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;