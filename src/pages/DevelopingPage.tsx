import styled from "styled-components";
import { MobileTop } from "../components/MobileTop";
import { ListTitle } from "../components/ChattingList/ListTitle";
import { ChatBottom } from "../components/ChattingRoom/ChatBottom";
import MenuBar from "../components/ChattingList/MenuBar";

const DevelopingPage = () => {
  return (
    <Wrapper>
      <MobileTop />
      <ListTitle />
      <ContentStyle>
        <Emoji>⚠️</Emoji>
        <Title>
          페이지 준비중<span>입니다.</span>
        </Title>
        <Text>
          이용에 불편을 드려 죄송합니다.
          <br />
          보다 나은 서비스 제공을 위하여 페이지 개발 중에 있습니다.
          <br />
          빠른 시일 내에 준비하여 찾아뵙겠습니다.
        </Text>
      </ContentStyle>
      <MenuBar />
      <ChatBottom />
    </Wrapper>
  );
};
export default DevelopingPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
`;

const ContentStyle = styled.div`
  flex: 1 1 0;
  min-height: 0;
  overflow-y: auto;
  ${({ theme }) => theme.scroll.none};
  flex-direction: column;
  margin: 10rem auto;
`;

const Emoji = styled.div`
  text-align: center;
  ${({ theme }) => theme.font.Headline1};
  color: ${({ theme }) => theme.color.pink};
  margin-bottom: 1rem;
`;
const Title = styled.div`
  text-align: center;
  ${({ theme }) => theme.font.Subhead_bold};
  color: ${({ theme }) => theme.color.gray90};
  span {
    ${({ theme }) => theme.font.Subhead_med};
  }
  margin-bottom: 0.5rem;
`;
const Text = styled.div`
  text-align: center;
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray50};
`;
