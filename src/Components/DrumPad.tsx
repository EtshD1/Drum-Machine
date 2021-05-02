import React, { useRef } from 'react';

const DrumPad = ({ name }: { name: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    audioRef.current?.play();
  }

  return (<div id={`${name}Container`} className="drum-pad" onClick={handleClick}>
    {name}
    <audio ref={audioRef} id={name} className="clip" src={`./audio/${name}.wav`}></audio>
  </div>);
}

export default DrumPad;