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
    <h1>Hello, World!</h1>
  </div>);
}

export default App;