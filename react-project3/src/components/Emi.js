import { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart'
import './Emi.css'

let Emi =()=> {
  // the width of the box
  const [width, setWidth] = useState(100);

  // the height of the box
  const [height, setHeight] = useState(100);

  // This function is called when the first range slider changes
  const changeWidth = (event) => {
    setWidth(event.target.value);
  };

  // This function is called when the second range slider changes
  const changeHeight = (event) => {
    setHeight(event.target.value);
  };

  return (
    <div className='container'>

<PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ]}
  width={400}
  height={200}
/>






      <h2>Home Load Calculator</h2>

      <h4>Box Width: {width}px</h4>
      <input
        type='range'
        onChange={changeWidth}
        min={1}
        max={800}
        step={1}
        value={width}
      ></input>

      
    </div>
  );
}

export default Emi