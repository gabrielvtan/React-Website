import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary/Aux';

// this component will be the display menu when menu is clicked - this is created for mobile devices but works with PC functionality 
const sideDrawer = (props) => {
    // We use the {} here because we want to conditionally attach different CSS classes to make animations prior to returning the JSX
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    
    
    // props.closed was created in the layout component
    return (
        <Aux>
            {/* Here we will add a general onClick close sideDrawer method */}
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className="Logo">
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );

}

export default sideDrawer;