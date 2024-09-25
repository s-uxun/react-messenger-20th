import { useState, useEffect } from "react";
import { useTime } from "./hooks/useTime";
import { MobileBar } from "../assets/icons";
import styled from "styled-components";

export function MobileTop() {
  const currentTime = useTime()
    .replace(/오전|오후/g, "")
    .trim(); //여기선 오전, 오후 제외

  // 모바일, 태블릿에서는 안 보이게 하기
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const deviceWidth = window.screen.width;
    setIsMobile(deviceWidth <= 1024); //태블릿까지 고려해서 1024px로 설정
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <Container>
      <TimeText>{currentTime}</TimeText>
      <MobileBar style={{ width: "4.25rem" }} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.0625rem 1.5rem 0.5625rem 1.75rem;
  background-color: white;
`;

const TimeText = styled.p`
  ${({ theme }) => theme.font.Body_1_bold}
`;
