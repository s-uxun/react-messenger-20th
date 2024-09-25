import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";

const ChattingPage = () => {
  return (
    <Wrapper>
      <p>채팅방</p>
    </Wrapper>
  );
};

export default ChattingPage;

const Wrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.color.gray10};
`;
