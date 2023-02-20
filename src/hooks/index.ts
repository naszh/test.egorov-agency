import { useEffect, useState } from 'react';

export const useCountdown = (date: Date) => {
  const countDate = new Date(date).getTime();

  const [countdown, setCountdown] = useState<number>(
    countDate - new Date().getTime()
  );

  useEffect(() => {
    const step = setInterval(() => {
      setCountdown(countDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(step);
  }, [countDate]);

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const days = countdown > 0 ? Math.floor(countdown / DAY) : 0;
  const hours = countdown > 0 ? Math.floor((countdown % DAY) / HOUR) : 0;
  const minutes = countdown > 0 ? Math.floor((countdown % HOUR) / MINUTE) : 0;
  const seconds = countdown > 0 ? Math.floor((countdown % MINUTE) / SECOND) : 0;

  return [days, hours, minutes, seconds];
};
