import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import SettingsContext from '../../context/SettingContext';
import BackButton from './BackButton';

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div className="mt-8 flex flex-col items-center p-6 bg-white shadow-lg rounded-lg w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

      {/* Work Slider */}
      <div className="w-full mb-8">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Work Duration: <span className="text-lightPink">{settingsInfo.workMinutes}:00</span>
        </label>
        <ReactSlider
          className="w-full h-2 bg-gray-300 rounded-full slider-thumb"
          thumbClassName="w-6 h-6 bg-lightPink rounded-full shadow-lg cursor-pointer"
          trackClassName="bg-lightPink h-2 rounded-full"
          value={settingsInfo.workMinutes}
          onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
          min={0}
          max={60}
        />
      </div>

      {/* Break Slider */}
      <div className="w-full mb-8">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Break Duration: <span className="text-lightPink">{settingsInfo.breakMinutes}:00</span>
        </label>
        <ReactSlider
          className="w-full h-2 bg-gray-300 rounded-full slider-thumb"
          thumbClassName="w-6 h-6 bg-lightPink rounded-full shadow-lg cursor-pointer"
          trackClassName="bg-lightPink h-2 rounded-full"
          value={settingsInfo.breakMinutes}
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
          min={0}
          max={60}
        />
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <BackButton
          onClick={() => settingsInfo.setShowSettings(false)}
          className="px-6 py-2 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-primary-dark transition"
        />
      </div>
    </div>
  );
};

export default Settings;
