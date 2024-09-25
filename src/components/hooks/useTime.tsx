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
    }, 10000); //원래는 60000으로 1분마다 렌더링되도록 했는데 그렇게 하면 처음 페이지 로드되었을 때의 시점에 따라 실제 시간과 1분씩 차이나는 구간 발생. => 10초 단위로 렌더링되도록 수정

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
}
