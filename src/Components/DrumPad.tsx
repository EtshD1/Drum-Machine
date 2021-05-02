import React, { useEffect, useRef } from 'react';

const DrumPad = ({ name, handleDisplay }: { name: string, handleDisplay: Function }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    handleDisplay(name);
    audioRef.current?.play();
  }

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        handleDisplay(name);
        audioRef.current?.play();
      }
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [name, handleDisplay]);

  return (<div id={`${name}Container`} className="drum-pad" onClick={handlePlay}>
    {name}
    <audio ref={audioRef} id={name} className="clip" src={`./audio/${name}.wav`}></audio>
  </div>);
}

export default DrumPad;