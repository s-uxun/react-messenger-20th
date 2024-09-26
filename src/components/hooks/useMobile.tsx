import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobileDevice = /android|iphone|ipad|windows phone/i.test(userAgent);

    setIsMobile(isMobileDevice);
  }, []);

  return isMobile;
}
