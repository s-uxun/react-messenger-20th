import { useState, useEffect } from "react";

// 사용자의 기기가 모바일, 태블릿 기기인지 확인하는 커스텀 훅
export function useMobile() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobileDevice = /android|iphone|ipad|windows phone/i.test(userAgent);

    setIsMobile(isMobileDevice);
  }, []);

  return isMobile;
}
