import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

//Here we are creating multiple urls for each of pages
// NOW since we receive isAutheticated, we need to render Auth conditionally 
// We also need to add the functionality of order being visible only when the user is authenticated 
const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/graphs">Graphs</NavigationItem>
        <NavigationItem link="/dev-profile">Dev Profile</NavigationItem>
        <NavigationItem link="/story-report">Story Report</NavigationItem>
        <NavigationItem link="/start-end">Count Down</NavigationItem>
    </ul>
);

export default navigationItems;