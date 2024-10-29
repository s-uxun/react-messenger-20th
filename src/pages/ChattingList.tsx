import { useState, useEffect } from "react";
import styled from "styled-components";
import { MobileTop } from "../components/MobileTop";
import ListTitle from "../components/ChattingList/ListTitle";
import { ChatBottom } from "../components/ChattingRoom/ChatBottom";

const ChattingList = () => {
  return (
    <Wrapper>
      <MobileTop />
      <ListTitle />
      <ContentStyle></ContentStyle>
      <ChatBottom />
    </Wrapper>
  );
};
export default ChattingList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
`;

const ContentStyle = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;
