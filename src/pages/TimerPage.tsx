import React, { useState } from 'react';
import Header from '../components/Header/Header';
import TitleTimerPage from '../components/timerComponents/TitleTimerPage';
import Timer from '../components/timerComponents/Timer';
import Settings from '../components/timerComponents/Settings';
import SettingsContext from '../context/SettingContext';
import SoundsGrid from '../components/Sound/SoundsGrid';


const TimerPage = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes,setWorkMinutes] = useState(10);
  const [breakMinutes,setBreakMinutes] = useState(0);

  const [isStopped, setIsStopped] = useState(false);

  return (
    <>
      <Header header='timerHeader' >
        <TitleTimerPage />
      </Header>
      <div className='timerContainer'>
        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </div>
      <SoundsGrid  isStopped={isStopped} setIsStopped={setIsStopped} />
    </>
  )
}

export default TimerPage;