import React, {Component} from 'react';
import './Graph.css'

import Aux from '../../hoc/Auxilary/Aux';
import AreaBarLine from '../../components/Graphs/AreaBarLine/AreaBarLine';
import PercentArea from '../../components/Graphs/PercentArea/PercentArea';
import BarArea from '../../components/Graphs/BarArea/BarArea';

class Graph extends Component {
    render () {
        return (
            <Aux>
                <div className="Graph"> 
                    <strong>Graph #2</strong> 
                    <AreaBarLine />
                </div>
                <div className="Graph"> 
                    <strong>Graph #3</strong> 
                    <PercentArea />
                </div>
                <div className="Graph"> 
                    <strong>Graph #5</strong> 
                    <BarArea/>
                </div>
            </Aux>
        )
    }
}

export default Graph;