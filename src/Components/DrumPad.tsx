import React, { useEffect, useRef } from 'react';

const DrumPad = ({ name }: { name: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key.toLocaleLowerCase() === name.toLocaleLowerCase()) {
      audioRef.current?.play();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  return (<div id={`${name}Container`} className="drum-pad" onClick={handlePlay}>
    {name}
    <audio ref={audioRef} id={name} className="clip" src={`./audio/${name}.wav`}></audio>
  </div>);
}

export default DrumPad;