import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary/Aux';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <Aux>
                <div className="Home"> 
                    HOME CONTAINER
                </div>
                <div className="Home"> 
                    <p>Welcome to my homepage! Please select an option on the navigation bar</p>
                </div>
            </Aux>
        );
    }
}

export default Home; 