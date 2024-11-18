import React, { useContext, useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import SettingsContext from '../../context/SettingContext';

const secondaryColor = '#f5cac7';
const mainBlack = '#222';

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState<'work' | 'break'>('work'); // work/break
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds =
        (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = mode === 'work'
    ? settingsInfo.workMinutes * 60
    : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds: number = secondsLeft % 60;
  if (seconds < 10 ) seconds = 0 + seconds;

  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-10">
      <div className="w-48 h-48">
        <CircularProgressbar
          value={percentage}
          text={`${minutes}:${seconds}`}
          styles={buildStyles({
            textColor: mode === 'work' ? secondaryColor : mainBlack,
            textSize: '16px',
            pathColor: mode === 'work' ? secondaryColor : mainBlack,
            trailColor: 'rgba(255, 255, 255, 0.2)',
          })}
        />
      </div>
      <div className="flex items-center space-x-4">
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <SettingsButton
        onClick={() => settingsInfo.setShowSettings(true)}
      />
    </div>
  );
};

export default Timer;
