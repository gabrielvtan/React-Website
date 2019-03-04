import React, {Component} from 'react';

import Aux from '../Auxilary/Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

// Like the navigation tool bar, we also have to add the sidedrawer here because it is a main component of the app
// we will convert layout into a Stateful component in order to handle event listeners received from both the Toolbar and the SideDrawer
class Layout extends Component {
    // we have to include state here for whether the sideDrawer is currently visible or not
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    // here we expect the previous state as an input and in there, simply return the object you want to set to a new state
    // or you want to merge into the state
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
           return {showSideDrawer: !prevState.showSideDrawer};
        });   
    }

    render () {
        return (
            // From toolbar, we get the prop drawerToggleClicked which will allow use to animate the sideDrawer
            <Aux>
                <Toolbar 
                    drawerToggleClicked ={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className = "Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 


export default Layout; 