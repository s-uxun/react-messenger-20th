import { useState } from "react";
import styled from "styled-components";
import { MobileTop } from "../components/MobileTop";
import { ChatTitle } from "../components/ChattingRoom/ChatTitle";
import { ChatInput } from "../components/ChattingRoom/ChatInput";
import { ChatContent } from "../components/ChattingRoom/ChatContent";
import { ChatBottom } from "../components/ChattingRoom/ChatBottom";

const ChattingPage = () => {
  const [newChatIds, setNewChatIds] = useState<number[]>([]);
  const handleNewChat = (id: number) => {
    setNewChatIds((prevIds) => [...prevIds, id]);
  };

  return (
    <Wrapper>
      <MobileTop />
      <ChatTitle />
      <ChatContentStyle>
        <ChatContent newChatIds={newChatIds} />
      </ChatContentStyle>
      <ChatInput onNewChat={handleNewChat} />
      <ChatBottom />
    </Wrapper>
  );
};
export default ChattingPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.color.gray10};
`;

const ChatContentStyle = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;
