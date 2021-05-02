import React, { useEffect, useRef } from 'react';

const DrumPad = ({ name, handleDisplay }: { name: string, handleDisplay: Function }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    handleDisplay(name);
    audioRef.current?.play();
  }

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        handleDisplay(name);
        audioRef.current?.play();
        divRef.current?.classList.add("active");
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        divRef.current?.classList.remove("active");
      }
    }
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('keydown', handleKeyUp);
    };
  }, [name, handleDisplay]);

  return (<div ref={divRef} id={`${name}Container`} className="drum-pad" onClick={handlePlay}>
    {name}
    <audio ref={audioRef} id={name} className="clip" src={`./audio/${name}.wav`}></audio>
  </div>);
}

export default DrumPad;