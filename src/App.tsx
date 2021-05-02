import React, { useState } from 'react';
import DrumPad from './Components/DrumPad';
import './reset.css';
import './index.css';

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
  const [displayText, setDisplayText] = useState("    ");

  const handleDisplay = (text: string) => {
    setDisplayText(text);
  }

  const drumpads = keys.map(key => <DrumPad name={key} key={key} handleDisplay={handleDisplay} />);

  return (<div id="drum-machine">
    <div id="display">
      <div>Action:</div>
      <div>{displayText}</div>
      <div></div>
    </div>
    <div className="keysContainer">{drumpads}</div>
  </div>);
}

export default App;