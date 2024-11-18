import React, { createContext } from 'react';

interface SettingsContextType {
  showSettings: boolean;
  setShowSettings: (value: boolean) => void;
  workMinutes: number;
  setWorkMinutes: (value: number) => void;
  breakMinutes: number;
  setBreakMinutes: (value: number) => void;
}

const SettingsContext = createContext<SettingsContextType>({
  showSettings: false,
  setShowSettings: () => {},
  workMinutes: 15,
  setWorkMinutes: () => {},
  breakMinutes: 5,
  setBreakMinutes: () => {},
});

export default SettingsContext;
