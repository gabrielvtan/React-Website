import React, {Component} from 'react';

import './Modal.css';
import Aux from '../../../hoc/Auxilary/Aux';
import Backdrop from '../Backdrop/Backdrop';

// We now also import Backdrop bc we want this to show whenever the modal is displayed 
// and also import Aux to display the props.children of the component
class Modal extends Component {

    // by adding this, we increase the efficiency of the app because it is no longer unnecessarily re-rendering unless the modal is updated
    // we also have to slightly change this so that the component also updates for the props.children as well since the spinner is a children
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
        <Aux>
            {/* Here we will add show and modalClosed as properties */}
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
        </Aux>
        );
    }
} 

export default Modal;