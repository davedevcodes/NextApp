"use client"; // Client-side rendering

import React, { useState, useRef } from "react";
import '../styles/stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const milliseconds = String((time % 1000) / 10).padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  };
  
  return (
    <div className="stopwatchContainer">
      <div className="timeDisplay">{formatTime(time)}</div>
      <div className="buttonContainer">
        <button
          className="button"
          onClick={startStopwatch}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="button"
          onClick={stopStopwatch}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button className="button"
         onClick={resetStopwatch}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
