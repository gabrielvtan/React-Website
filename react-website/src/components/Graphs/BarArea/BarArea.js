import React, { PureComponent } from 'react';
import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './BarArea.css';

const data = [
    {
      name: 'Page A', pv: 800, amt: 1400,
    },
    {
      name: 'Page B', pv: 967, amt: 1506,
    },
    {
      name: 'Page C', pv: 1098, amt: 989,
    },
    {
      name: 'Page D', pv: 1200, amt: 1228,
    },
    {
      name: 'Page E', pv: 1108, amt: 1100,
    },
    {
      name: 'Page F', pv: 680, amt: 1700,
    },
  ];
  
class BarArea extends PureComponent { 
    render() {
      return (
        <ComposedChart 
          className="container"
          width={1000}
          height={800}
          data={data}
          margin={{
            top: 20, right: 80, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} />
          <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        </ComposedChart>
      );
    }
}
  
export default BarArea;