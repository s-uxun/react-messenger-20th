import { useState, useEffect } from "react";

const getCurrentTime = (): string => {
  return new Date().toLocaleTimeString([], {
    hour: "numeric", //1자리 or 2자리
    hour12: true,
    minute: "2-digit", //2자리만
  });
};

export function useTime() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
}
