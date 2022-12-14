import { usePomodoro } from 'hooks/usePomodoro';
import { useState } from 'react';
import { TimerContext } from './TimerContext';

export const TimerProvider = ({ children }) => {
  const {
    seconds,
    minutes,
    isBreakTime,
    isPaused,
    timer,
    pause,
    stop,
    reset,
    userTimers,
    setUserTimers,
    handleSubmit,
    deleteTimer,
    addTimer,
    getUserTimers,
  } = usePomodoro();

  return (
    <TimerContext.Provider
      value={{
        seconds,
        minutes,
        isBreakTime,
        isPaused,
        timer,
        pause,
        stop,
        reset,
        userTimers,
        setUserTimers,
        handleSubmit,
        deleteTimer,
        addTimer,
        getUserTimers,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
