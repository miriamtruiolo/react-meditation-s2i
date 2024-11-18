import React from 'react';
import { AiFillPauseCircle } from 'react-icons/ai';

interface PauseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PauseButton: React.FC<PauseButtonProps> = (props) => {
  return (
    <button {...props} className='playButton'>
      <AiFillPauseCircle size={40} />
    </button>
  );
};

export default PauseButton;
