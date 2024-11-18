import React from 'react';
import { AiFillLeftCircle } from 'react-icons/ai';

interface BackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const BackButton: React.FC<BackButtonProps> = (props) => {
  return (
    <button {...props} className='flex flex-row items-center gap-2 p-2 border border-black rounded'>
      <AiFillLeftCircle /> back
    </button>
  );
};

export default BackButton;
