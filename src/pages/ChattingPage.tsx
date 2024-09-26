import styled from "styled-components";
import { MobileTop } from "../components/MobileTop";
import { ChatTitle } from "../components/ChattingRoom/ChatTitle";
import { ChatInput } from "../components/ChattingRoom/ChatInput";

const ChattingPage = () => {
  return (
    <Wrapper>
      <MobileTop />
      <ChatTitle />
      <p>채팅방</p>
      <ChatInput />
    </Wrapper>
  );
};
export default ChattingPage;

const Wrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.color.gray10};
`;
