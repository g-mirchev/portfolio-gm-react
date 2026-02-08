import { useState, useEffect } from 'react';

export const useTime = (intervalMs = 1000) => {
  const [time, setTime] = useState('00:00:00 AM');

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      intervalMs,
    );
    return () => clearInterval(interval);
  }, [intervalMs]);

  return time;
};
