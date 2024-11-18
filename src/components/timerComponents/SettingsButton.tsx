import React from 'react';
import { FaCog } from 'react-icons/fa';

interface SettingsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SettingsButton: React.FC<SettingsButtonProps> = (props) => {
  return (
    <button {...props} className='flex flex-row items-center gap-2 p-2 border border-black rounded'>
      <FaCog />
      Settings
    </button>
  );
};

export default SettingsButton;
