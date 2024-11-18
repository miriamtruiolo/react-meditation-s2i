import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

interface PlayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PlayButton: React.FC<PlayButtonProps> = (props) => {
  return (
    <button {...props} className='playButton text-lightPink'>
      <AiFillPlayCircle size={40} />
    </button>
  );
};

export default PlayButton;
