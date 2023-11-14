import React, { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

const Timer = ({ startTimer, handleUnPauseTimer, restartTimer }) => {
  const [isPaused, setIsPaused] = useState(true);

  const { seconds, minutes, hours, start, pause } = useStopwatch({
    autoStart: false,
  });

  const handlePauseClick = () => {
    if (isPaused) {
      setIsPaused(false);
      handleUnPauseTimer(false);
      start();
    } else {
      setIsPaused(true);
      handleUnPauseTimer(false);

      pause();
    }
  };

  useEffect(() => {
    if (!startTimer) {
    } else if (startTimer) {
      setIsPaused(false);
      start();
    }
  }, [startTimer]);

  useEffect(() => {
    if (restartTimer) {
      setIsPaused(false);
      start();
    }
  }, [restartTimer]);

  return (
    <div>
      <p>
        Timer: {hours}:{minutes}:{seconds}
      </p>
      <button onClick={handlePauseClick}>Pause Button</button>
    </div>
  );
};

export default Timer;
