import React, { useState, useEffect } from 'react';
import "../styles/timer.css"

function Timer() {
  const [seconds, setSeconds] = useState(1800);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className='timer-parent'>
      <h1>Holding your tickets for</h1>
      <div className='timer'>
        {minutes < 10 ? '0' : ''}{minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}
      </div>
    </div>
  );
}

export default Timer;
