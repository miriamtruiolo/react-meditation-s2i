import React, { useState, useEffect, useRef } from "react";
import { BsFillVolumeOffFill, BsFillVolumeDownFill } from "react-icons/bs";

interface SoundItemProps {
  item: {
    id: string;
    title: string;
    soundUrl: string;
    icon: JSX.Element;
  };
  isStopped: boolean;
  setIsStopped: (value: boolean) => void;
}

const SoundItem: React.FC<SoundItemProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0); 
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && !props.isStopped) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }

      if (props.isStopped) {
        setIsPlaying(false); // stop playback
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio
      }
    }
  }, [isPlaying, props.isStopped]);

  const changeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value) / 100); 
  };

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <button
        className="p-5 m-2 border-none rounded-full text-primary shadow-lg hover:shadow-xl"
        onClick={() => setIsPlaying((prev) => !prev)}
        style={{
          backgroundColor: isPlaying && !props.isStopped ? "#FFFFFF" : "",
          color: isPlaying && !props.isStopped ? "#222" : "",
        }}
      >
        {props.item.icon}

        <audio loop ref={audioRef} src={props.item.soundUrl}>
           Your browser does not support the audio element.
        </audio>
        </button>

      {isPlaying && !props.isStopped && (
        <div className="flex items-center mt-2">
          <BsFillVolumeOffFill className="mr-2" />
          <input
            type="range"
            className="w-16"
            defaultValue="100"
            onChange={changeRange}
          />
          <BsFillVolumeDownFill className="ml-2" />
        </div>
      )}
      <p className="mt-2">{props.item.title}</p>
    </div>
  );
};

export default SoundItem;
