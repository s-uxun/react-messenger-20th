import styled from "styled-components";
import { MobileTop } from "../components/MobileTop";
import { ListTitle } from "../components/ChattingList/ListTitle";
import { ChatBottom } from "../components/ChattingRoom/ChatBottom";
import ChatItem from "../components/ChattingList/ChatItem";
import MenuBar from "../components/ChattingList/MenuBar";

const ChattingList = () => {
  return (
    <Wrapper>
      <MobileTop />
      <ListTitle />
      <ContentStyle>
        <ChatItem />
      </ContentStyle>
      <MenuBar />
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
  flex: 1 1 0;
  min-height: 0;
  overflow-y: auto;
  ${({ theme }) => theme.scroll.none};
`;
