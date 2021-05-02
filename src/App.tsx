import React from 'react';
import DrumPad from './Components/DrumPad';
import './reset.css';

const keys = [
  'Q',
  'W',
  'E',
  'A',
  'S',
  'D',
  'Z',
  'X',
  'C'
];

const App = () => {
  const drumpads = keys.map(key => <DrumPad name={key} />);

  return (<div id="drum-machine">
    <div id="display"></div>
    <div>{drumpads}</div>
  </div>);
}

export default App;