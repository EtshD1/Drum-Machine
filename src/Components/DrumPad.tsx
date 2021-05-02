import React from 'react';

const DrumPad = ({ name }: { name: string }) => {
  return (<div id={`${name}Container`} className="drum-pad">
    {name}
    <audio id={name} className="clip" src="./audio/A.wav"></audio>
  </div>);
}

export default DrumPad;